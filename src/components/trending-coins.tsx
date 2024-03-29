import Image from "next/image";
import Link from "next/link";
import { getTrending } from "@/app/queries";
import CaretUpIcon from "@/icons/caret-up-icon";

export default async function TrendingCoins() {
  const { data } = await getTrending();
  if (!data || !data.length) return null;

  return (
    <div className="bg-white rounded-lg py-6 px-4 mt-8">
      <h2 className="font-semibold text-2xl text-[#0F1629]">
        Trending Coins (24h)
      </h2>

      <div className="mt-6 space-y-5">
        {data.slice(0, 3).map((coin: any) => (
          <Link
            href={`/${coin.id}`}
            key={coin.id}
            className="flex items-center justify-between"
          >
            <div className="flex items-center">
              <Image
                src={coin.imageUrl}
                alt={coin.symbol}
                width={24}
                height={24}
                className="w-6 h-6 mr-1.5 rounded-full"
              />
              <div className="font-medium">
                {coin.name}({coin.symbol})
              </div>
            </div>
            <div>
              {coin.priceChangePercentage24h >= 0 ? (
                <div className="bg-[#EBF9F4] rounded-lg px-2.5 py-2 flex items-center">
                  <CaretUpIcon color="#14B079" className="mr-2" />
                  <span className="font-medium text-[#14B079]">
                    {coin.priceChangePercentage24h.toFixed(2)}%
                  </span>
                </div>
              ) : (
                <div className="bg-[#fae9e9] rounded-lg px-2.5 py-2 flex items-center">
                  <CaretUpIcon color="#FF4949" className="mr-2 rotate-180" />
                  <span className="font-medium text-[#FF4949]">
                    {coin.priceChangePercentage24h.toFixed(2)}%
                  </span>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
