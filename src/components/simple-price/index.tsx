import CaretUpIcon from "@/icons/caret-up-icon";
import SimplePriceChart from "./chart";
import { getPrice } from "@/app/queries";

export default async function SimplePrice() {
  const { success, data } = await getPrice({ id: "bitcoin" });

  return (
    <div className="bg-transparent lg:bg-white rounded-lg border-[#DEE1E6] lg:border p-0 lg:p-6">
      <div className="flex items-center pb-[18px] lg:pb-0">
        <div className="bg-black w-8 h-8 lg:w-9 lg:h-9 rounded-full mr-2 lg:mr-2.5" />
        <h1 className="text-xl lg:text-2xl text-[#0B1426] font-semibold mr-2.5">
          Bitcoin
        </h1>
        <span className="text-[#5D667B] font-semibold text-sm lg:text-base">
          BTC
        </span>

        <div className="border-[#808A9D] border bg-[#768396] rounded-lg px-2.5 py-2 ml-8">
          <span className="text-white font-medium">Rank #1</span>
        </div>
      </div>

      <div className="bg-white border-[#DEE1E6] border p-6 rounded-lg lg:border-none lg:p-0 mt-0 xl:mt-10 2xl:mt-12">
        <div className="flex">
          <div>
            <h2 className="text-3xl font-semibold text-[#0B1426]">
              $
              {data &&
                data.usd.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </h2>
            <span className="leading-8 font-medium text-[#0B1426]">
              ₹{" "}
              {data &&
                data.inr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </span>
          </div>

          <div className="flex h-fit items-center ml-8 mt-1">
            {data && data.usd_24h_change >= 0 ? (
              <div>
                <div className="bg-[#EBF9F4] text-[#14B079] px-2.5 py-1 rounded-md flex items-center gap-x-1.5">
                  <CaretUpIcon color="#14B079" />
                  <span className="font-medium">
                    {data && data.usd_24h_change.toFixed(2)}%
                  </span>
                </div>
              </div>
            ) : (
              <div className="bg-[#fae9e9] text-[#FF4949] px-2.5 py-1 rounded-md flex items-center gap-x-1.5">
                <CaretUpIcon color="#FF4949" className="rotate-180" />
                <span className="font-medium">
                  {data && data.usd_24h_change.toFixed(2)}%
                </span>
              </div>
            )}

            <span className="text-sm font-medium text-[#768396] ml-3">
              (24H)
            </span>
          </div>
        </div>

        <hr className="my-6 border-[#DEE1E6]" />

        <SimplePriceChart />
      </div>
    </div>
  );
}
