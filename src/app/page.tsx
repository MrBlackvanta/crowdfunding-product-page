import CampaignProvider from "@/components/campaign-provider";
import { SiteHeader } from "@/components/layout";
import { FundingStats, HeroBanner, IntroCard } from "@/views/home";

export default function Home() {
  return (
    <CampaignProvider>
      <SiteHeader />
      <main id="main">
        <HeroBanner />
        <div className="-mt-14 space-y-6 px-6 md:-mt-23">
          <IntroCard />
          <FundingStats />
        </div>
      </main>
    </CampaignProvider>
  );
}
