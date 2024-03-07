import Fundamentals from "./fundamentals";

import type { CoinData } from "@/app/queries";

export default function PerformanceSection({
  coinData,
}: {
  coinData: CoinData;
}) {
  return (
    <section className="bg-white border-[#DEE1E6] border shadow-sm rounded-lg p-4 lg:p-6">
      <h3 className="text-[#0F1629] font-semibold text-2xl">Performance</h3>
      <div className="mt-4 lg:mt-6 space-y-6">
        <div className="flex items-center">
          <div className="min-w-24 w-fit">
            <div className="text-[#44475B] text-sm whitespace-nowrap">
              Today{"'"}s Low
            </div>
            <div className="leading-10">
              {coinData.lo24h.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </div>
          </div>

          <div
            className="h-2 w-full flex rounded-xl mx-2"
            style={{
              backgroundImage:
                "linear-gradient(to right, #FF4949, #FF4E11, #FC870A, #FFAF11, #C2CB21, #11EB68)",
            }}
          />

          <div className="min-w-24 text-right">
            <div className="text-[#44475B] text-sm whitespace-nowrap">
              Today{"'"}s High
            </div>
            <div className="leading-10">
              {coinData.hi24h.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <div className="min-w-24">
            <div className="text-[#44475B] text-sm whitespace-nowrap">
              52W Low
            </div>
            <div className="leading-10">46,930.22</div>
          </div>

          <div
            className="h-2 w-full flex rounded-xl mx-2"
            style={{
              backgroundImage:
                "linear-gradient(to right, #FF4949, #FF4E11, #FC870A, #FFAF11, #C2CB21, #11EB68)",
            }}
          />

          <div className="min-w-24 text-right">
            <div className="text-[#44475B] text-sm whitespace-nowrap">
              52W High
            </div>
            <div className="leading-10">49,343.83</div>
          </div>
        </div>
      </div>

      <Fundamentals coinData={coinData} />
    </section>
  );
}
