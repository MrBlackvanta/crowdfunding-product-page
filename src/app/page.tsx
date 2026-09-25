import CampaignProvider from "@/components/campaign-provider";
import { SiteHeader } from "@/components/layout";
import { HeroBanner } from "@/views/home";

export default function Home() {
  return (
    <CampaignProvider>
      <SiteHeader />
      <main id="main">
        <HeroBanner />
      </main>
    </CampaignProvider>
  );
}
