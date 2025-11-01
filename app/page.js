import Image from "next/image";
import dietHero from "../public/images/diet_hero.jpg";

export default function Home() {
  return (
    <>
      <div className="relative w-full h-screen">
        <Image src={dietHero} alt="DIet Hero" fill />
        <div className="absolute inset-0 bg-[#CCFBF1]/25"></div>
        <div className="relative z-20 grid grid-cols-1 gap-4 p-10 sm:grid-cols-2">
          <div className="bg-amber-300 w-full h-100"></div>
          <div className="bg-amber-300 w-full h-100"></div>
        </div>
      </div>
    </>
  );
}
