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
        <div></div>
      </div>
    </section>
  )
}

export default Testimonial