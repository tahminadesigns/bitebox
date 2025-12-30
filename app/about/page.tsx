import AboutStory from "@/app/components/about/AboutStory";
import MissionValues from "@/app/components/about/MissionValues";
import Qualitypromise from "@/app/components/about/Qualitypromise";
import BrandVisuals from "@/app/components/about/BrandVisuals";

export default function AboutPage() {
  return (
    <main className="bg-[#0b0b0b] text-white">
      <AboutStory />
      <MissionValues />
      <Qualitypromise />
      <BrandVisuals />
    </main>
  );
}
