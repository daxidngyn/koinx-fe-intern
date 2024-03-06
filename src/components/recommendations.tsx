import Carousel from "./carousel";

export default function Recommendations() {
  return (
    <div className="mt-6 bg-white lg:p-16">
      <h3 className="font-bold text-lg text-[#202020]">You May Also Like</h3>
      <div className="mt-1 lg:mt-4">
        <Carousel>
          <div className="p-2.5 lg:p-4 border-[#E3E3E3] border rounded-md">
            <div className="flex items-center">
              <div className="w-4 h-4 lg:w-[26px] lg:h-[26px] rounded-full mr-1.5 bg-black"></div>
              <div className="text-[10px] text-[#202020] lg:text-base">BNB</div>
              <div className="bg-[#0AB27D0F] text-[#32BE88] text-[8px] lg:text-sm p-[3px] rounded-sm">
                +0.52%
              </div>
            </div>

            <div className="font-medium text-xs mt-2.5 lg:text-xl lg:mt-3">
              $319.34
            </div>
          </div>
        </Carousel>
      </div>

      <h3 className="font-bold text-lg mt-8 lg:mt-6 text-[#202020]">
        Trending Coins
      </h3>
      <div className="mt-1 lg:mt-4">
        <Carousel>
          <div className="p-2.5 lg:p-4 border-[#E3E3E3] border rounded-md">
            <div className="flex items-center">
              <div className="w-4 h-4 lg:w-[26px] lg:h-[26px] rounded-full mr-1.5 bg-black"></div>
              <div className="text-[10px] text-[#202020] lg:text-base">BNB</div>
              <div className="bg-[#0AB27D0F] text-[#32BE88] text-[8px] lg:text-sm p-[3px] rounded-sm">
                +0.52%
              </div>
            </div>

            <div className="font-medium text-xs mt-2.5 lg:text-xl lg:mt-3">
              $319.34
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
