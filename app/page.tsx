import { Topbar, Header } from "./components/SiteHeader";
import { Hero } from "./components/Hero";
import { NewCollection } from "./components/NewCollection";
import { PeonyStory } from "./components/PeonyStory";
import { DailyWardrobe } from "./components/DailyWardrobe";
import { VideoLookbook } from "./components/VideoLookbook";
import { WearInRealLife } from "./components/WearInRealLife";
import { CustomerFeedback } from "./components/CustomerFeedback";
import { Newsletter } from "./components/Newsletter";
import { Promises } from "./components/Promises";
import { SiteFooter } from "./components/SiteFooter";

export default function Home() {
  return (
    <div className="w-full">
      <Topbar />
      <Header />
      <Hero />
      <main>
        <NewCollection />
        <PeonyStory />
        <DailyWardrobe />
        <VideoLookbook />
        <WearInRealLife />
        <CustomerFeedback />
        <Newsletter />
        <Promises />
      </main>
      <SiteFooter />
    </div>
  );
}
