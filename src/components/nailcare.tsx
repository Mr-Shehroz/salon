"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Nailcare = () => {
  // Price items data for cleaner rendering
  const priceItems = [
    {
      service: "Nail care",
      price: "$25",
      dashWidth: "2xl:w-[296px] md:w-[226px] w-[190px]",
    },
    {
      service: "Hair Styling",
      price: "$30",
      dashWidth: "2xl:w-[273px] md:w-[203px] w-[167px]",
    },
    {
      service: "Make up",
      price: "$50",
      dashWidth: "2xl:w-[297px] md:w-[227px] w-[191px]",
    },
    {
      service: "Cosmetology",
      price: "$20",
      dashWidth: "2xl:w-[260px] md:w-[190px] w-[154px]",
    },
    {
      service: "SPA procedures",
      price: "$30",
      dashWidth: "2xl:w-[240px] md:w-[170px] w-[144px]",
    },
  ];

  return (
    <section className="xl:py-20 py-5 bg-white">
      <div className="flex flex-col md:flex-row justify-between items-center xl:px-20 px-5 2xl:max-w-[1400px] xl:max-w-[1150px] max-w-[900px] mx-auto">

        {/* Image - Animate from left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 md:mb-0"
        >
          <Image
            src="/1.svg"
            alt="Nail treatment"
            height={100}
            width={100}
            className="2xl:w-[550px] xl:w-[480px] lg:w-[350px] md:w-[300px] w-[350px] h-auto"
          />
        </motion.div>

        {/* Text & Price List - Animate from right */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="flex flex-col justify-center items-center text-center xl:gap-4 gap-2"
        >
          <h2 className="text-[50px] leading-tight">Nail care</h2>
          <p className="text-[#909090] 2xl:text-[16px] text-[14px]">
            Velit in dui dictum arcu felis tempor in feugiat in mauris...
          </p>

          {/* Animated price rows */}
          <div className="flex flex-col gap-4 mt-4">
            {priceItems.map((item, index) => (
              <motion.div
                key={item.service}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
                className="flex gap-4 items-center"
              >
                <h6 className="2xl:text-[16px] text-[14px] font-medium text-black whitespace-nowrap">
                  {item.service}
                </h6>
                <div
                  className={`${item.dashWidth} border-dashed border border-[#909090]`}
                />
                <h6 className="2xl:text-[16px] text-[14px] text-[#6B0606] font-medium">
                  {item.price}
                </h6>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Nailcare;
