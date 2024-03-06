import InfoIcon from "@/icons/info-icon";

const fundamentalsKeys = [
  "Bitcoin Price",
  "24h Low / 24h High",
  "7d Low / 7d High",
  "Trading Volume",
  "Market Cap Rank",
  "Market Cap",
  "Market Cap Dominance",
  "Volume / Market Cap",
  "All-Time High",
  "All-Time Low",
];

export default function Fundamentals() {
  return (
    <div className="mt-8">
      <div className="flex items-center">
        <h3 className="text-[#44475B] text-lg font-semibold mr-2">
          Fundamentals
        </h3>
        <InfoIcon />
      </div>
      {fundamentalsKeys.map((data) => (
        <div
          className="flex items-center justify-between py-4 border-b border-[#E7E7E7]"
          key={data}
        >
          <div className="text-[#768396] font-medium text-sm">{data}</div>
          <div className="text-[#111827] font-medium text-sm">x</div>
        </div>
      ))}
    </div>
  );
}
