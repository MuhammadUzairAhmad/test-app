"use client";

import React from "react";
import Image from "next/image";
import QRCodeIcon from "@/assets/png/qr-code.png";
import IllistrationIcon from "@/assets/png/Illistration.png";

const QRCodeSection = () => {
  return (
    <div className="w-full bg-primary hidden lg:block">
      <div className=" px-4 md:px-8 xl:px-12 mx-auto bg-hero-Background-section bg-cover bg-center bg-no-repeat 2xl:container w-full py-[70px] relative">
        
        <div className="w-full h-[400px] xlg:h-[540px] gap-4 xlg:gap-8 flex justify-center items-center relative">
          {/* First Div */}
          <div className="w-1/2 xlg:w-1/3 h-full bg-white rounded-[50px] overflow-hidden p-[25px] relative z-20">
            <div className="bg-primary w-full h-full flex justify-center items-center rounded-[25px]">
              <Image src={QRCodeIcon} alt="Menu" className="" />
            </div>
          </div>

          <div className="w-1/2 xlg:w-2/3 h-full bg-white rounded-[25px] p-[25px] flex justify-end items-center text-xl xlg:text-[30px] font-medium text-secondary relative">
            <div className="absolute -left-20 bottom-0 w-full h-full overflow-hidden pointer-events-none z-30">
              <Image
                src={IllistrationIcon}
                alt="Menu"
                className="absolute -left-5 bottom-2 z-10 hidden xlg:block"
              />
            </div>
            <div className="w-[522px] relative z-30 xl:mr-5 2xl:mr-10">
              <span className="xlg:text-[33px] text-2xl font-bold">Sign up today </span>
              and manage your portfolio like a pro with personalized assistant
              and access to a trusted tech community of 1,200 members who
              connected $150M+ of total assets.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRCodeSection;
