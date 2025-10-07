'use client'

import React from "react";
import AboutBanner from "@/components/about-banner";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-white lg:pt-20 pt-10">
      <AboutBanner />

      {/* Section 1: Main content */}
      <div className="max-w-[1400px] mx-auto lg:py-10 py-5 xl:px-20 2xl:px-0 lg:px-10 px-5">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-[50px] text-center"
        >
          We can create what you imagine
        </motion.h2>

        <motion.h5
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="2xl:text-[28px] lg:text-[24px] text-[20px] text-[#6B0606] mt-10 2xl:mb-5 mb-3 font-medium md:text-start text-center"
        >
          Blandit at maecenas
        </motion.h5>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="2xl:text-[18px] text-[14px] flex flex-col md:flex-row gap-5 md:gap-0 md:justify-between justify-center md:items-start items-center text-center md:text-start text-black"
        >
          <p className="max-w-[350px] lg:max-w-[450px] xl:max-w-full">
            Blandit at maecenas dui sed amet sit enim vitae. Amet purus dictum
            urna sagittis dignissim. At fermentum nisl ullamcorper orci.
            Pellentesque id tempor lacus aliquet tempus vitae nibh habitasse
            consectetur. Augue quis cras blandit habitant neque. Faucibus
            vestibulum id nisi ligula ultricies et vehicula. Et adipiscing
            mattis egestas mi placerat duis congue id. Scelerisque integer
            pulvinar justo sed egetipsum faucibus
          </p>
          <p className="max-w-[350px] lg:max-w-[450px] xl:max-w-full">
            Lorem ipsum dolor sit amet consectetur. Blandit at maecenas dui sed
            amet sit enim vitae. Amet purus dictum urna sagittis dignissim. At
            fermentum nisl ullamcorper orci. Pellentesque id tempor lacus
            aliquet tempus vitae nibh habitasse consectetur. Augue quis cras
            blandit habitant neque. Faucibus vestibulum id nisi ligula ultricies
            et vehicula.
          </p>
        </motion.div>
      </div>

      {/* Section 2: Image + text */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-[1400px] mx-auto lg:py-15 py-8 flex flex-col md:flex-row md:justify-between justify-center items-center text-center md:text-start xl:px-20 2xl:px-0 lg:px-10 px-5"
      >
        <div>
          <Image
            src="/about-1.svg"
            alt="about 1"
            height={100}
            width={100}
            className="2xl:w-[526px] lg:w-[400px] md:w-[350px] w-full mb-8 md:mb-0"
          />
        </div>
        <div className="xl:max-w-[700px] lg:max-w-[500px] max-w-[350px]">
          <h2 className="text-[50px] lg:mb-8 mb-4">
            Styles from the city, service from out of this world
          </h2>
          <p className="2xl:text-[18px] text-[14px] text-black">
            Lorem ipsum dolor sit amet consectetur. Blandit at maecenas dui sed
            amet sit enim vitae. Amet purus dictum urna sagittis dignissim. At
            fermentum nisl ullamcorper orci. Lorem ipsum dolor sit amet
            consectetur. Blandit at maecenas dui sed amet sit enim vitae. Amet
            purus dictum urna sagittis dignissim. At fermentum nisl ullamcorper
            orci. Lorem ipsum dolor sit amet consectetur. Blandit at maecenas
            dui sed amet sit enim vitae. Amet purus dictum urna sagittis
            dignissim. At fermentum nisl ullamcorper orci.
          </p>
        </div>
      </motion.section>

      {/* Section 3: Stats row */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-[#F3E2D5] md:py-15 py-8"
      >
        <div className="flex flex-col md:flex-row md:justify-between justify-center gap-10 md:gap-0 items-center max-w-[1400px] mx-auto xl:px-20 2xl:px-0 lg:px-10 px-5">
          <Image
            src="/0.png"
            alt="0"
            height={100}
            width={100}
            className="2xl:w-[112px] xl:w-[90px] w-[70px]"
          />
          <Image
            src="/90.png"
            alt="0"
            height={100}
            width={100}
            className="2xl:w-[175px] xl:w-[155px] w-[135px]"
          />
          <Image
            src="/80.png"
            alt="0"
            height={100}
            width={100}
            className="2xl:w-[129px] xl:w-[109px] w-[89px]"
          />
          <Image
            src="/70.png"
            alt="0"
            height={100}
            width={100}
            className="2xl:w-[180px] xl:w-[160px] w-[140px]"
          />
          <Image
            src="/60.png"
            alt="0"
            height={100}
            width={100}
            className="2xl:w-[97px] xl:w-[77px] w-[57px]"
          />
        </div>
      </motion.section>
    </section>
  );
};

export default About;