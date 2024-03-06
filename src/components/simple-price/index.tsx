import CaretUpIcon from "@/icons/caret-up-icon";
import SimplePriceChart from "./chart";

export default async function SimplePrice() {
  return (
    <div className="bg-white border-[#DEE1E6] border shadow-sm p-6 rounded-lg">
      <div className="flex">
        <div>
          <h2 className="text-3xl font-semibold text-[#0B1426]">$16,953.04</h2>
          <span className="leading-8 font-medium text-slate-700">
            ₹ 13,42,343
          </span>
        </div>

        <div className="flex h-fit items-center ml-8 mt-1">
          <div className="bg-[#EBF9F4] text-[#14B079] px-2.5 py-1 rounded-md flex items-center gap-x-1.5">
            <CaretUpIcon color="#14B079" />
            <span className="font-medium">2.51%</span>
          </div>
          <span className="text-sm font-medium text-[#768396] ml-3">(24H)</span>
        </div>
      </div>

      <hr className="my-6 border-[#DEE1E6]" />

      <SimplePriceChart />
    </div>
  );
}
