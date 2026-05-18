import { Topbar, Header } from "./components/SiteHeader";
import { Hero } from "./components/Hero";
import { Collections } from "./components/Collections";
import { PeonyStory } from "./components/PeonyStory";
import { DailyWardrobe } from "./components/DailyWardrobe";
import { WearInRealLife } from "./components/WearInRealLife";
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
        <Collections />
        <PeonyStory />
        <DailyWardrobe />
        <WearInRealLife />
        <Newsletter />
        <Promises />
      </main>
      <SiteFooter />
    </div>
  );
}
