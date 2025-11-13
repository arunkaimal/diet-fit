import Image from "next/image";
import dietHero from "@/public/images/diet_hero.jpg";

export default function Home() {
  return (
    <>
      <div className="relative w-full h-screen">
        <Image src={dietHero} alt="DIet Hero" fill />
        <div className="absolute inset-0 bg-[#CCFBF1]/25"></div>
        <div className="relative z-20 grid grid-cols-1 gap-4 p-10 sm:grid-cols-2">
          <div className=" w-full h-100 flex flex-col justify-center items-center ">
            <h1 className="text-4xl font-bold bg-linear-to-r from-[#065F46] to-[#CCFBF1] rounded-4xl px-4 py-2 mb-4 ">
              Welcome To Nuticare
            </h1>
            <p className="bg-black rounded px-3 text-[#34D399] text-xl font-semibold">Where Science Meet Wellness</p>
          </div>
          <div className="bg-amber-300 w-full h-100"></div>
        </div>
      </div>
    </>
  );
}
