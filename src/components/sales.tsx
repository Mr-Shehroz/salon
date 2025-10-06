import Image from "next/image";
import React from "react";

const Sales = () => {
  return (
    <div className="bg-[#6B0606] h-[40px] text-center flex items-center justify-center gap-4">
      <Image src="/Icon.png" alt="Sales Icon" height={100} width={100} className="2xl:w-6 xl:w-5 w-4" />
      <h4 className="font-medium 2xl:text-[16px] xl:text-[14px] text-[12px] text-white uppercase">
        Only this month 20% discount on all services
      </h4>
      <Image src="/Icon.png" alt="Sales Icon" height={100} width={100} className="2xl:w-6 xl:w-5 w-4" />
    </div>
  );
};

export default Sales;
