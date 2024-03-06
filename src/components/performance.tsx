import Fundamentals from "./fundamentals";

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

      <Fundamentals />
    </section>
  );
}
