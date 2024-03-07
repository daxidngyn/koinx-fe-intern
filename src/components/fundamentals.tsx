import { CoinData } from "@/app/queries";
import InfoIcon from "@/icons/info-icon";

const fundamentalsKeys: { id: keyof CoinData | null; title: string }[] = [
  { id: "price", title: "Bitcoin Price" },
  { id: "ath", title: "24h Low / 24h High" },
  { id: null, title: "7d Low / 7d High" },
  { id: "volume", title: "Trading Volume" },
  { id: "rank", title: "Market Cap Rank" },
  { id: "marketCap", title: "Market Cap" },
  { id: null, title: "Market Cap Dominance" },
  { id: "marketCap", title: "Volume / Market Cap" },
  { id: "ath", title: "All-Time High" },
  { id: "atl", title: "All-Time Low" },
];

export default function Fundamentals({ coinData }: { coinData: CoinData }) {
  if (!coinData) return null;

  const fundamentals = fundamentalsKeys.map((fundamental) => {
    const key = fundamental.title;
    if (!fundamental.id) {
      return { key: key, value: <span /> };
    }

    if (key === "24h Low / 24h High") {
      return {
        key: key,
        value: (
          <span>
            ${coinData.lo24h.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} /
            ${coinData.hi24h.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </span>
        ),
      };
    }
    if (key === "Volume / Market Cap") {
      return {
        key: key,
        value: <span>{(coinData.volume / coinData.marketCap).toFixed(4)}</span>,
      };
    }
    if (key === "All-Time High") {
      return {
        key: key,
        value: (
          <div className="text-right">
            <div className="font-sm font-medium">
              <span className="text-[#111827]">
                ${coinData.ath.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </span>{" "}
              <span
                className={
                  coinData.athChangePercentage < 0
                    ? "text-[#F7324C]"
                    : "text-[#0FBA83]"
                }
              >
                {coinData.athChangePercentage.toFixed(1)}%
              </span>
            </div>
            <span className="text-[#111827] text-xs">
              {coinData.athDate.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
        ),
      };
    }
    if (key === "All-Time Low") {
      return {
        key: key,
        value: (
          <div className="text-right">
            <div className="font-sm font-medium">
              <span className="text-[#111827]">
                ${coinData.atl.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </span>{" "}
              <span
                className={
                  coinData.atlChangePercentage < 0
                    ? "text-[#F7324C]"
                    : "text-[#0FBA83]"
                }
              >
                {coinData.atlChangePercentage.toFixed(1)}%
              </span>
            </div>
            <span className="text-[#111827] text-xs">
              {coinData.atlDate.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
        ),
      };
    }

    let value = coinData[fundamental.id];
    if (fundamental.id === "marketCap" || fundamental.id === "volume") {
      value = `$${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    }

    return {
      key: key,
      // @ts-ignore
      value: <span>{value}</span>,
    };
  });

  return (
    <div className="mt-8 lg:mt-12">
      <div className="flex items-center">
        <h3 className="text-[#44475B] text-lg font-semibold mr-2">
          Fundamentals
        </h3>
        <InfoIcon />
      </div>

      <div className="lg:hidden">
        {fundamentals.map((data) => (
          <div
            className="flex items-center justify-between py-4 border-b border-[#E7E7E7]"
            key={data.key}
          >
            <div className="text-[#768396] font-medium text-sm">{data.key}</div>
            <div className="text-[#111827] font-medium text-sm">
              {data.value}
            </div>
          </div>
        ))}
      </div>

      <div className="hidden lg:flex mt-4 w-full gap-x-24">
        <div className="w-1/2 flex flex-col justify-between">
          {fundamentals.slice(0, 5).map((data) => (
            <div
              className="flex items-center justify-between py-4 border-b border-[#E7E7E7]"
              key={data.key}
            >
              <div className="text-[#768396] font-medium text-sm">
                {data.key}
              </div>
              <div className="text-[#111827] font-medium text-sm">
                {data.value}
              </div>
            </div>
          ))}
        </div>

        <div className="w-1/2 flex flex-col justify-between">
          {fundamentals.slice(5, fundamentals.length).map((data) => (
            <div
              className="flex items-center justify-between py-4 border-b border-[#E7E7E7]"
              key={data.key}
            >
              <div className="text-[#768396] font-medium text-sm">
                {data.key}
              </div>
              <div className="text-[#111827] font-medium text-sm">
                {data.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
