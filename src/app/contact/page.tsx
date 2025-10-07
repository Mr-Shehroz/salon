import Contactbanner from "@/components/contact-banner";
import Gallery from "@/components/gallery";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <section className="bg-white">
      <Contactbanner />
      <section className="py-15 flex justify-between items-start max-w-[1400px] mx-auto relative">
        <Image
          src="/location.svg"
          alt="Contact Image"
          height={100}
          width={100}
          className="absolute inset-0 w-[300px] object-cover z-10"
        />
        <div className="flex flex-col items-center justify-center text-center max-w-[330px]">
          <h2 className="text-[50px] mb-5">Address</h2>
          <p className="text-[24px] text-black">
            19 North Road Piscataway, NJ 08854
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center max-w-[330px] relative">
          <Image
            src="/location.svg"
            alt="Contact Image"
            height={100}
            width={100}
            className="absolute inset-0 w-[300px] object-cover z-10"
          />
          <h2 className="text-[50px] mb-5">Email</h2>
          <p className="text-[24px] text-black">gamma@sbcglobal.net</p>
        </div>
        <div className="flex flex-col items-center justify-center text-center max-w-[330px] relative">
          <Image
            src="/location.svg"
            alt="Contact Image"
            height={100}
            width={100}
            className="absolute inset-0 w-[300px] object-cover z-10"
          />
          <h2 className="text-[50px] mb-5">Phone</h2>
          <p className="text-[24px] text-black">(246) 917-5787</p>
        </div>
      </section>

      <section className="bg-[#F3E2D5] h-[372px] mt-12 relative mb-100">
        <section className="bg-white w-[1076px] h-[657px] p-15 absolute top-[120%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow flex justify-between">
          <div>
            <Image
              src="/contact.svg"
              alt="contact"
              height={100}
              width={100}
              className="w-[334px]"
            />
          </div>
          <div>
            <h5 className="text-[20px] font-inter mb-5">Beauty salon</h5>
            <h2 className="text-[50px] mb-5">Book appointment</h2>
            <p className="text-[16px] text-black leading-[22px]">
              Mi senectus ac ullamcorper sollicitudin volutpat sit a velit.
              Purus scelerisque
            </p>
            <div className="flex justify-between items-center">
              <div className="flex flex-col items-start gap-2">
                <label className="text-black">First name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="text-[16px] text-[#909090]"
                />
              </div>
              <div className="flex flex-col items-start gap-2">
                <label className="text-black">Last name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="text-[16px] text-[#909090]"
                />
              </div>
            </div>
          </div>
        </section>
      </section>
      <Gallery />
    </section>
  );
};

export default Contact;
