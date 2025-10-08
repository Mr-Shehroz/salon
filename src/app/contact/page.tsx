"use client";
import Contactbanner from "@/components/contact-banner";
import Gallery from "@/components/gallery";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget; // 👈 Capture it immediately
    setIsSubmitting(true);
    setMessage(null);

    const formData = new FormData(form); // use `form` here
    const data = {
      firstName: formData.get("firstName")?.toString() || "",
      lastName: formData.get("lastName")?.toString() || "",
      phone: formData.get("phone")?.toString() || "",
      service: formData.get("service")?.toString() || "",
      date: formData.get("date")?.toString() || "",
      time: formData.get("time")?.toString() || "",
    };

    const res = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setMessage({
        type: "success",
        text: "Your appointment request has been sent!",
      });
      form.reset(); // ✅ Safe: `form` is captured before async
    } else {
      const errorData = await res.json();
      setMessage({
        type: "error",
        text: errorData.error || "Something went wrong. Please try again.",
      });
    }

    setIsSubmitting(false);
  };
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="bg-white">
      <Contactbanner />

      {/* Contact Info Section */}
      <motion.section
        className="md:py-15 py-8 flex flex-col md:flex-row md:justify-between justify-center md:items-start items-center md:gap-0 gap-10 max-w-[1400px] 2xl:px-0 xl:px-20 lg:px-10 px-5 mx-auto relative"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {[
          { title: "Address", content: "Islam Nagar Near Karian's Tomb" },
          { title: "Email", content: "khushibeautysalon.pk@gmail.com" },
          { title: "Phone", content: "+923198377407" },
        ].map((info, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center text-center 2xl:max-w-[330px] xl:max-w-[280px] md:max-w-[200px]"
            variants={item}
          >
            <h2 className="text-[50px] lg:mb-5 mb-3">{info.title}</h2>
            <p className="2xl:text-[24px] xl:text-[20px] text-[18px] text-black">
              {info.content}
            </p>
          </motion.div>
        ))}
      </motion.section>

      {/* Form Background */}
      <section className="bg-[#F3E2D5] h-[372px] xl:mt-12 mt-8 relative lg:mb-100 md:mb-200 mb-230">
        {/* Desktop Form */}
        <motion.section
          className="hidden bg-white xl:w-[1076px] xl:h-[657px] lg:w-[90%] xl:p-15 lg:py-10 lg:px-5 md:p-10 absolute lg:top-[120%] md:top-[170%] top-[100%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow md:flex flex-col lg:flex-row lg:justify-between justify-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div>
            <Image
              src="/contact.svg"
              alt="contact"
              height={100}
              width={100}
              className="xl:w-[334px] lg:w-[280px] md:w-[50%] mx-auto xl:mx-0"
            />
          </div>
          <div className="lg:max-w-[580px] max-w-full">
            <h5 className="2xl:text-[20px] text-[18px] font-inter mb-5 md:mt-10 lg:mt-0">
              Beauty salon
            </h5>
            <h2 className="text-[50px] mb-5">Book appointment</h2>
            <p className="2xl:text-[16px] text-[14px] text-black leading-[22px]">
              Mi senectus ac ullamcorper sollicitudin volutpat sit a velit.
              Purus scelerisque
            </p>
            <form onSubmit={handleSubmit}>
              <div className="flex justify-between items-center mt-7">
                <div className="flex flex-col items-start gap-2">
                  <label className="text-black">First name</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="2xl:text-[18px] xl:text-[16px] text-[14px] text-black border border-[#909090] py-[6px] px-3"
                  />
                </div>
                <div className="flex flex-col items-start gap-2">
                  <label className="text-black">Last name</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="2xl:text-[18px] xl:text-[16px] text-[14px] text-black border border-[#909090] py-[6px] px-3"
                  />
                </div>
              </div>

              <div className="flex justify-between items-center mt-7">
                <div className="flex flex-col items-start gap-2">
                  <label className="text-black">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    className="2xl:text-[18px] xl:text-[16px] text-[14px] text-black border border-[#909090] py-[6px] px-3"
                  />
                </div>
                <div className="flex flex-col items-start gap-2">
                  <label className="text-black">Services</label>
                  <select
                    className="2xl:text-[18px] xl:text-[16px] text-[14px] text-black border border-[#909090] py-[6px] px-3 bg-white appearance-none"
                    defaultValue=""
                    name="service"
                    required
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="haircut">Haircut</option>
                    <option value="coloring">Hair Coloring</option>
                    <option value="manicure">Manicure</option>
                    <option value="pedicure">Pedicure</option>
                    <option value="facial">Facial Treatment</option>
                    <option value="waxing">Waxing</option>
                    <option value="massage">Massage</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-between items-center mt-7">
                <div className="flex flex-col items-start gap-2">
                  <label className="text-black">Date</label>
                  <input
                    type="date"
                    name="date"
                    placeholder="Date"
                    className="2xl:text-[18px] xl:text-[16px] text-[14px] text-black border border-[#909090] py-[6px] px-3"
                  />
                </div>
                <div className="flex flex-col items-start gap-2">
                  <label className="text-black">Time</label>
                  <input
                    type="time"
                    name="time"
                    placeholder="Time"
                    className="2xl:text-[18px] xl:text-[16px] text-[14px] text-black border border-[#909090] py-[6px] px-3"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#6B0606] hover:bg-[#8a0808] w-full py-[6px] 2xl:text-[24px] xl:text-[20px] text-[18px] mt-9 font-bold transition-colors duration-200 disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {message && (
                <p
                  className={`mt-3 text-center ${
                    message.type === "success"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {message.text}
                </p>
              )}
            </form>
          </div>
        </motion.section>

        {/* Mobile Contact Form */}
        <motion.section
          className="md:hidden bg-white w-full p-6 absolute top-[20%] left-0 right-0 shadow-lg flex flex-col items-center z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="w-full max-w-md">
            <div className="flex justify-center mb-4">
              <Image
                src="/contact.svg"
                alt="contact"
                width={80}
                height={80}
                className="w-[70%]"
              />
            </div>

            <h5 className="text-[16px] font-inter mb-3 text-center">
              Beauty salon
            </h5>
            <h2 className="text-[50px] font-bold mb-3 text-center">
              Book appointment
            </h2>
            <p className="text-[14px] text-black leading-[20px] text-center mb-6">
              Mi senectus ac ullamcorper sollicitudin volutpat sit a velit.
              Purus scelerisque
            </p>

            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4 mb-5">
                {[
                  { label: "First name", name: "firstName", type: "text" },
                  { label: "Last name", name: "lastName", type: "text" },
                  { label: "Phone", name: "phone", type: "tel" },
                  { label: "Services", name: "service", type: "select" },
                  { label: "Date", name: "date", type: "date" },
                  { label: "Time", name: "time", type: "time" },
                ].map((field, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <label className="text-black text-[14px] font-medium">
                      {field.label}
                    </label>
                    {field.type === "select" ? (
                      <select
                        name="service"
                        className="text-[14px] text-black border border-[#909090] py-3 px-4 rounded appearance-none bg-white"
                        required
                      >
                        <option value="">Select a service</option>
                        <option value="haircut">Haircut</option>
                        <option value="coloring">Hair Coloring</option>
                        <option value="manicure">Manicure</option>
                        <option value="pedicure">Pedicure</option>
                        <option value="facial">Facial Treatment</option>
                        <option value="waxing">Waxing</option>
                        <option value="massage">Massage</option>
                      </select>
                    ) : (
                      <input
                        name={field.name}
                        type={field.type}
                        className="text-[14px] text-black border border-[#909090] py-3 px-4 rounded"
                        required
                      />
                    )}
                  </div>
                ))}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#6B0606] hover:bg-[#8a0808] w-full py-[6px] 2xl:text-[24px] xl:text-[20px] text-[18px] mt-9 font-bold transition-colors duration-200 disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {message && (
                <p
                  className={`mt-3 text-center ${
                    message.type === "success"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {message.text}
                </p>
              )}
            </form>
          </div>
        </motion.section>
      </section>

      <Gallery />
    </section>
  );
};

export default Contact;
