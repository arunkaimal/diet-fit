import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Register = () => {
  return (
    <div className="flex items-center justify-center py-8 min-h-screen lg:min-h-0">
      <div className="mx-auto bg-white rounded-2xl shadow-xl 
    max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl 
    p-6 sm:p-8 md:p-10">
        <h1 className="text-center text-lg sm:text-2xl font-bold border-b pb-3 mb-4 text-emerald-900 border-emerald-800/20">
          Registration
        </h1>
        <form className="flex flex-col items-center gap-4">
          <div className="w-full mt-3">
            <input
              className="border w-full p-2 rounded-lg outline-none"
              type="text"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="w-full">
            <input
              className="border w-full p-2 rounded-lg outline-none"
              type="email"
              placeholder="Enter Your Mail"
            />
          </div>
          <div className="w-full">
            <input
              className="border w-full p-2 rounded-lg outline-none"
              type="password"
              placeholder="Enter Your Password"
            />
          </div>
          <div className="w-full">
            <input
              className="border w-full p-2 rounded-lg outline-none"
              type="password"
              placeholder="Enter Your Confirm Password"
            />
          </div>
          <Button className="bg-emerald-700 cursor-pointer hover:bg-[#065F46] w-full text-md font-semibold">
            Sumbit
          </Button>
        </form>
        <p className="text-center mt-4 text-gray-500">Already A User? <Link href="" className="text-emerald-700">Login</Link></p>
      </div>
    </div>
  );
};

export default Register;
