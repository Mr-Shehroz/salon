import Image from "next/image";
import React from "react";

const Sales = () => {
  return (
    <div className="bg-[#6B0606] h-[40px] text-center flex items-center justify-center gap-4">
      <Image src="/Icon.png" alt="Sales Icon" height={100} width={100} className="w-6" />
      <h4 className="font-medium text-[16px] text-white uppercase">
        Only this month 20% discount on all services
      </h4>
      <Image src="/Icon.png" alt="Sales Icon" height={100} width={100} className="w-6" />
    </div>
  );
};

export default Sales;
