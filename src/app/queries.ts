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
