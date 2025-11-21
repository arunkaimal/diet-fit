import React from "react";
import { Button } from "./ui/button";
import  Link  from "next/link";

const HeroScetion = () => {
  return (
    <div className="relative z-20 grid grid-cols-1 gap-4 p-10 sm:grid-cols-2">
      <div className=" w-full h-100 flex flex-col justify-center items-center ">
        <h1 className="text-4xl font-bold bg-linear-to-r from-[#065F46] to-[#CCFBF1] rounded-4xl px-4 py-2 mb-4 tracking-tighter">
          Welcome To Nuticare
        </h1>
        <p className="bg-black rounded px-3 text-[#34D399] text-xl font-semibold">
          Where Science Meet Wellness
        </p>
      </div>
      <div className="bg-[#CCFBF1]/10 shadow-2xl w-full max-h-screen flex flex-col justify-center items-center rounded text-center font-semibold lg:overflow-visible overflow-auto p-6">
        <p className="mb-5">
          Dietitian Shruti Doshi is a qualified Clinical Nutritionist currently
          working with the Municipal Corporation of Greater Mumbai (MCGM) in the
          N Ward, where she manages HBT clinics and Aapla Davakhana
          (dispensaries). She has previously served in F South Ward, Parel,
          providing nutritional counselling to patients with lifestyle-related
          and chronic health conditions.
        </p>
        <Button asChild className="bg-emerald-700 cursor-pointer hover:bg-[#065F46]">
          <Link href="/about">Know More</Link>
        </Button>
      </div>
    </div>
  );
};

export default HeroScetion;
