import Image from "next/image";
import { getTrending } from "@/app/queries";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./carousel";
import { cn } from "@/utils/cn";

export default async function Recommendations() {
  const { data } = await getTrending();
  if (!data || !data.length) return null;

  return (
    <div className="mt-6 bg-white xl:p-16">
      <h3 className="font-bold text-lg text-[#202020]">You May Also Like</h3>
      <div className="mt-1 lg:mt-4">
        <Carousel className="w-full">
          <CarouselContent className="xl:-ml-2.5">
            {data.map((coin) => (
              <CarouselItem
                key={coin.id}
                className="basis-1/2 md:basis-1/3 xl:basis-1/5 xl:pr-2.5"
              >
                <div className="p-2.5 lg:p-4 border-[#E3E3E3] border rounded-lg xl:min-w-60">
                  <div className="flex items-center">
                    <Image
                      src={coin.imageUrl}
                      alt={coin.symbol}
                      width={16}
                      height={16}
                      className="lg:w-[26px] lg:h-[26px] rounded-full mr-1.5 bg-black"
                    />
                    <div className="text-[10px] text-[#202020] lg:text-base">
                      {coin.symbol}
                    </div>
                    <div
                      className={cn(
                        "text-[8px] lg:text-sm p-[3px] rounded-sm",
                        coin.priceChangePercentage24h < 0
                          ? "bg-[#fae9e9] text-[#FF4949]"
                          : "text-[#32BE88] bg-[#0AB27D0F]"
                      )}
                    >
                      {coin.priceChangePercentage24h > 0 && "+"}
                      {coin.priceChangePercentage24h.toFixed(2)}%
                    </div>
                  </div>

                  <div className="font-medium text-xs mt-2.5 lg:text-xl lg:mt-3">
                    $319.34
                  </div>

                  <div className="h-16 mt-4 flex items-center justify-center">
                    <Image
                      src={coin.sparklineUrl}
                      alt={`${coin.symbol} sparkline`}
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <h3 className="font-bold text-lg mt-8 lg:mt-6 text-[#202020]">
        Trending Coins
      </h3>
      <div className="mt-1 lg:mt-4">
        <Carousel className="w-full">
          <CarouselContent className="xl:-ml-2.5">
            {data.reverse().map((coin) => (
              <CarouselItem
                key={coin.id}
                className="basis-1/2 md:basis-1/3 xl:basis-1/5 xl:pr-2.5"
              >
                <div className="p-2.5 lg:p-4 border-[#E3E3E3] border rounded-lg xl:min-w-60">
                  <div className="flex items-center">
                    <Image
                      src={coin.imageUrl}
                      alt={coin.symbol}
                      width={16}
                      height={16}
                      className="lg:w-[26px] lg:h-[26px] rounded-full mr-1.5 bg-black"
                    />
                    <div className="text-[10px] text-[#202020] lg:text-base">
                      {coin.symbol}
                    </div>
                    <div
                      className={cn(
                        "text-[8px] lg:text-sm p-[3px] rounded-sm",
                        coin.priceChangePercentage24h < 0
                          ? "bg-[#fae9e9] text-[#FF4949]"
                          : "text-[#32BE88] bg-[#0AB27D0F]"
                      )}
                    >
                      {coin.priceChangePercentage24h > 0 && "+"}
                      {coin.priceChangePercentage24h.toFixed(2)}%
                    </div>
                  </div>

                  <div className="font-medium text-xs mt-2.5 lg:text-xl lg:mt-3">
                    $319.34
                  </div>

                  <div className="h-16 mt-4 flex items-center justify-center">
                    <Image
                      src={coin.sparklineUrl}
                      alt={`${coin.symbol} sparkline`}
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
