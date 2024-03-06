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

export default function PerformanceSection() {
  return (
    <section className="bg-white border-[#DEE1E6] border shadow-sm rounded-lg p-4">
      <h3 className="text-[#0F1629] font-semibold text-2xl">Performance</h3>
      <div className="mt-4 space-y-6">
        <div className="flex items-center">
          <div className="min-w-24 w-fit">
            <div className="text-[#44475B] text-sm whitespace-nowrap">
              Today{"'"}s Low
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
              Today{"'"}s High
            </div>
            <div className="leading-10">49,343.83</div>
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

      <div className="">
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
    </section>
  );
}
