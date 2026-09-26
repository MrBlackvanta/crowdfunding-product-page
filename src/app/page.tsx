import CampaignProvider from "@/components/campaign-provider";
import { SiteFooter, SiteHeader } from "@/components/layout";
import {
  AboutProject,
  FundingStats,
  HeroBanner,
  IntroCard,
  PledgeDialog,
  ThanksDialog,
} from "@/views/home";

export default function Home() {
  return (
    <CampaignProvider>
      <SiteHeader />
      <main id="main">
        <HeroBanner />
        <div className="-mt-14 space-y-6 px-6 md:-mt-23">
          <IntroCard />
          <FundingStats />
          <AboutProject />
        </div>
      </main>
      <SiteFooter />
      <PledgeDialog />
      <ThanksDialog />
    </CampaignProvider>
  );
}
