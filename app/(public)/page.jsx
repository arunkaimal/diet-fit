import Image from "next/image";
import dietHero from "@/public/images/diet_hero.jpg";
import HeroScetion from "@/components/HeroScetion";

export default function Home() {
  return (
    <>
      <div className="h-screen">
        <div className="relative w-full">
          <Image src={dietHero} alt="DIet Hero" fill />
          <div className="absolute inset-0 bg-[#CCFBF1]/25"></div>
          <HeroScetion />
        </div>
      </div>
    </>
  );
}
