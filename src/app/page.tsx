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
    <main className="w-full grow lg:flex lg:px-14 gap-x-5">
      <div className="px-4 lg:p-0 flex-1">
        <Breadcrumbs />

        <SimplePrice />

        <Tabs />
        <div className="space-y-4">
          <PerformanceSection />
          <SentimentSection />
          <AboutSection />
          <TeamSection />
        </div>
      </div>

      <div className="mt-8 lg:mt-16 lg:shrink-0 lg:max-w-md">
        <div className="px-4 lg:p-0">
          <GetStartedSection />
        </div>
        <TrendingCoins />
      </div>
    </main>
  );
}
