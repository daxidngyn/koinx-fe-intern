const getFetchUrl = (param: string) => {
  return `${process.env.KOINX_API_URL}${param}${process.env.KOINX_API_KEY}`;
};

export const getPrice = async ({
  id,
}: {
  id: string;
}): Promise<{
  success: boolean;
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

    return { success: false, data: data[id] };
  } catch (err) {
    console.error("Failed to fetch:", fetchUrl, err);
    return { success: false, data: null };
  }
};

export const getTrending = async (): Promise<{
  success: boolean;
  data: [] | null;
}> => {
  const fetchUrl = getFetchUrl(`/search/trending?`);

  try {
    const res = await fetch(fetchUrl);
    const data = await res.json();

    return { success: false, data: data.coins.map((coin: any) => coin.item) };
  } catch (err) {
    console.error("Failed to fetch:", fetchUrl, err);
    return { success: false, data: null };
  }
};

export interface CoinData {
  id: string;
  symbol: string;
  name: string;
  ath: number;
  athDate: Date;
  atl: number;
  atlDate: Date;
  volume: number;
  hi24h: number;
  lo24h: number;
  rank: number;
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
    const res = await fetch(fetchUrl);
    const data = await res.json();

    const coinData: CoinData = {
      id: data.id,
      symbol: data.symbol,
      name: data.name,
      ath: data.market_data.ath.usd,
      athDate: new Date(data.market_data.ath_date.usd),
      atl: data.market_data.atl.usd,
      atlDate: new Date(data.market_data.atl_date.usd),
      volume: data.market_data.total_volume.usd,
      hi24h: data.market_data.high_24h.usd,
      lo24h: data.market_data.low_24h.usd,
      rank: data.market_cap_rank,
    };

    return { data: coinData };
  } catch (err) {
    console.error("Failed to fetch:", fetchUrl, err);
    return { data: null };
  }
};
