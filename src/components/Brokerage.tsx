"use client";

import React from "react";
import Image from "next/image";
import AmazonIcon from "@/assets/png/Amazon-1.png";
import GoogleIcon from "@/assets/png/Google-2.png";
import StockClubsIcon from "@/assets/png/StockClubs-3.png";

const Brokerage = () => {
  const imageBaseClasses =
    "absolute max-w-[260px] sm:max-w-[280px] lg:max-w-[380px] xlg:max-w-[480px] xl:max-w-[560px]";

  return (
    <section className="w-full bg-[#3994E9]">
      <div className="px-4 md:px-8 xl:px-12 mx-auto bg-hero-Background-section bg-cover bg-center bg-no-repeat 2xl:container w-full py-[70px]">
        <div className="w-full bg-white rounded-[25px] h-[460px] sm:h-[500px] lg:h-[400px] xlg:h-[540px] flex justify-center items-center relative lg:px-24 flex-col-reverse lg:flex-row">
          <div className="md:w-1/2 w-full px-6 md:px-0 flex flex-col justify-center items-center lg:items-start text-center lg:text-left lg:pr-10 h-full text-lg md:text-xl xlg:text-[30px] font-medium text-secondary">
            <span className="xlg:text-[33px] text-lg md:text-2xl font-bold">
              Connect your brokerage accounts{" "}
            </span>
            and get access to trading ideas, aggregated stats and discussions in
            your tech investing community right away.
          </div>

          <div className="w-full lg:w-1/2 relative h-full flex justify-center items-center">
            <Image
              src={AmazonIcon}
              alt="Amazon Logo"
              className={`${imageBaseClasses} xlg:left-14 xlg:top-20 xl:left-10 top-7 sm:top-10 lg:top-14 lg:left-10 sm:left-1/3 z-10`}
            />
            <Image
              src={GoogleIcon}
              alt="Google Logo"
              className={`${imageBaseClasses} xlg:left-10 xlg:top-28 xl:left-6 sm:top-16 top-14 lg:top-20 lg:left-6 sm:left-1/3 z-10`}
            />
            <Image
              src={StockClubsIcon}
              alt="StockClubs Logo"
              className={`${imageBaseClasses} top-[105px] sm:top-28 xlg:left-14 xlg:top-44 xl:left-10 lg:top-36 lg:left-8 sm:left-1/3 z-10 hover:scale-125 hover:translate-y-[-20px] transition-all duration-300 origin-bottom`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brokerage;
