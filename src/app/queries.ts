const getFetchUrl = (param: string) => {
  return `${process.env.KOINX_API_URL}${param}${process.env.KOINX_API_KEY}`;
};

export const getPrice = async ({
  id,
}: {
  id: string;
}): Promise<{
  data: {
    inr: number;
    inr_24h_change: number;
    usd: number;
    usd_24h_change: number;
  } | null;
}> => {
  const fetchUrl = getFetchUrl(
    `/simple/price?ids=${id}&vs_currencies=inr%2Cusd&include_24hr_change=true&`
  );

  try {
    const res = await fetch(fetchUrl);
    const data = await res.json();

    return { data: data[id] };
  } catch (err) {
    console.error("Failed to fetch:", fetchUrl, err);
    return { data: null };
  }
};

export const getTrending = async (): Promise<{
  data: [];
}> => {
  const fetchUrl = getFetchUrl(`/search/trending?`);

  try {
    const res = await fetch(fetchUrl);
    const data = await res.json();

    return { data: data.coins.map((coin: any) => coin.item) };
  } catch (err) {
    console.error("Failed to fetch:", fetchUrl, err);
    return { data: [] };
  }
};

export interface CoinData {
  id: string;
  symbol: string;
  name: string;
  rank: number;
  price: number;
  marketCap: number;
  volume: number;
  ath: number;
  athChangePercentage: number;
  athDate: Date;
  atl: number;
  atlChangePercentage: number;
  atlDate: Date;
  hi24h: number;
  lo24h: number;
}

export const getCoinData = async ({
  id,
}: {
  id: string;
}): Promise<{
  data: CoinData | null;
}> => {
  const fetchUrl = getFetchUrl(
    `/coins/${id}?community_data=false&developer_data=false&`
  );

  try {
    const res = await fetch(fetchUrl, { cache: "no-store" });
    const data = await res.json();

    const coinData: CoinData = {
      id: data.id,
      symbol: data.symbol,
      name: data.name,
      rank: data.market_cap_rank,
      price: data.market_data.current_price.usd,
      marketCap: data.market_data.market_cap.usd,
      volume: data.market_data.total_volume.usd,
      ath: data.market_data.ath.usd,
      athChangePercentage: data.market_data.ath_change_percentage.usd,
      athDate: new Date(data.market_data.ath_date.usd),
      atl: data.market_data.atl.usd,
      atlChangePercentage: data.market_data.atl_change_percentage.usd,
      atlDate: new Date(data.market_data.atl_date.usd),
      hi24h: data.market_data.high_24h.usd,
      lo24h: data.market_data.low_24h.usd,
    };

    return { data: coinData };
  } catch (err) {
    console.error("Failed to fetch:", fetchUrl, err);
    return { data: null };
  }
};
