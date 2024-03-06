import CaretUpIcon from "@/icons/caret-up-icon";

export default function TrendingCoins() {
  return (
    <div className="bg-white rounded-lg py-6 px-4 mt-8">
      <h2 className="font-semibold text-2xl text-[#0F1629]">
        Trending Coins (24h)
      </h2>

      <div className="mt-6 space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-6 h-6 mr-1.5 bg-black rounded-full"></div>
            <div className="font-medium">Ethereum(ETH)</div>
          </div>
          <div>
            <div className="bg-[#EBF9F4] rounded-lg px-2.5 py-2 flex items-center">
              <CaretUpIcon color="#14B079" className="mr-2" />
              <span className="font-medium text-[#14B079]">8.21%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
