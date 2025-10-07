import Image from "next/image";
import React from "react";

const Sales = () => {
  return (
    <div className="bg-[#6B0606] h-[40px] text-center flex items-center justify-center md:gap-4 gap-2">
      <Image src="/Icon.png" alt="Sales Icon" height={100} width={100} className="2xl:w-6 xl:w-5 md:w-4 w-3" />
      <h4 className="font-medium 2xl:text-[16px] xl:text-[14px] md:text-[12px] text-[10px] text-white uppercase">
        Only this month 20% discount on all services
      </h4>
      <Image src="/Icon.png" alt="Sales Icon" height={100} width={100} className="2xl:w-6 xl:w-5 md:w-4 w-3" />
    </div>
  );
};

export default Sales;
