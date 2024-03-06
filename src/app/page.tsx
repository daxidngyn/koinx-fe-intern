import Breadcrumbs from "@/components/breadcrumbs";
import Tabs from "@/components/tabs";
import SimplePrice from "@/components/simple-price";
import PerformanceSection from "@/components/performance";
import SentimentSection from "@/components/sentiment";
import AboutSection from "@/components/about";
import TeamSection from "@/components/team";
import GetStartedSection from "@/components/get-started";
import TrendingCoins from "@/components/trending-coins";

export default function Home() {
  return (
    <main>
      <div className="px-4 lg:px-14">
        <Breadcrumbs />

        <div className="flex items-center pb-[18px]">
          <div className="bg-white w-8 h-8 rounded-full mr-2" />
          <h1 className="text-xl text-[#0B1426] font-semibold mr-2.5">
            Bitcoin
          </h1>
          <span className="text-[#5D667B] font-semibold text-sm">BTC</span>

          <div className="border-[#808A9D] border bg-[#768396] rounded-lg px-2.5 py-2 ml-8">
            <span className="text-white font-medium">Rank #1</span>
          </div>
        </div>

        <SimplePrice />

        <Tabs />
        <div className="space-y-4">
          <PerformanceSection />
          <SentimentSection />
          <AboutSection />
          <TeamSection />
        </div>
      </div>

      <div className="mt-8">
        <div className="px-4">
          <GetStartedSection />
        </div>
        <TrendingCoins />
      </div>
    </main>
  );
}
