import { notFound } from "next/navigation";
import { getCoinData } from "../queries";

import Breadcrumbs from "@/components/breadcrumbs";
import Tabs from "@/components/tabs";
import SimplePrice from "@/components/simple-price";
import PerformanceSection from "@/components/performance";
import SentimentSection from "@/components/sentiment";
import AboutSection from "@/components/about";
import TeamSection from "@/components/team";
import GetStartedSection from "@/components/get-started";
import TrendingCoins from "@/components/trending-coins";
import Recommendations from "@/components/recommendations";
import TokenomicsSection from "@/components/tokenomics";

export default async function Home({ params }: { params: { coin: string } }) {
  if (!params.coin) return notFound();

  const { data } = await getCoinData({ id: params.coin });
  if (!data || !Object.keys(data).length) return notFound();

  return (
    <main>
      <div className="w-full grow xl:flex xl:px-14 gap-x-5">
        <div className="px-4 md:px-8 xl:p-0 flex-1 shrink">
          <Breadcrumbs currentCoin={data.name} />

          <SimplePrice coinData={data} id={params.coin} />
          <Tabs />
          <div className="space-y-4">
            <PerformanceSection coinData={data} />
            <SentimentSection />
            <AboutSection />
            <TokenomicsSection />
            <TeamSection />
          </div>
        </div>

        <div className="mt-8 xl:mt-16 xl:shrink-0 xl:max-w-sm 2xl:max-w-md">
          <div className="px-4 md:px-8 xl:p-0">
            <GetStartedSection />
          </div>
          <TrendingCoins />
        </div>
      </div>

      <div className="hidden xl:block">
        <Recommendations />
      </div>
    </main>
  );
}
