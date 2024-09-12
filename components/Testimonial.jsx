"use client";

import { motion } from "framer-motion";
import { BiSolidQuoteLeft } from "react-icons/bi";

import { fadeInOnScroll } from "@/motion/motionVariants";

const testimonial = [
  {
    name: "John Doe",
    message: "This service was incredible! It exceeded all my expectations and I couldn't be happier with the results."
  },
  {
    name: "Jane Smith",
    message: "This service was incredible! It exceeded all my expectations and I couldn't be happier with the results."
  },
  {
    name: "Samuel Green",
    message: "This service was incredible! It exceeded all my expectations and I couldn't be happier with the results."
  },
  {
    name: "Emily White",
    message: "This service was incredible! It exceeded all my expectations and I couldn't be happier with the results."
  },
  {
    name: "Michael Brown",
    message: "This service was incredible! It exceeded all my expectations and I couldn't be happier with the results."
  },
  {
    name: "Sophia Lee",
    message: "This service was incredible! It exceeded all my expectations and I couldn't be happier with the results."
  },
  {
    name: "Olivia Martinez",
    message: "This service was incredible! It exceeded all my expectations and I couldn't be happier with the results."
  },
];

const Testimonial = () => {
  return (
    <section className="w-full xl:py-24 mb-24 xl:mb-32 flex justify-center items-center">
      <div className="overflow-hideen">
        {/* text */}
        <div>text</div>
        {/* card list */}
        <div>
          <div>
            <div>{testimonial.map((item, index) => (
              <div
                key={index}
                className="relative w-[460px] h-[300px] bg-[#0e11354e] mr-12 rounded-2xl flex flex-col justify-center px-14"
              >
                <BiSolidQuoteLeft className="text-accent mb-3 text-3xl" />
                <p className="mb-4 text-lg text-white/80">{item.message}</p>
                <p className="text-xl">{item.name}</p>
              </div>
            ))}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial