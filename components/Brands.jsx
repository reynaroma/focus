"use client";
import { motion } from "framer-motion";
import Image from "next/image";


const brandImages = [
  {
    src: "/brands/brand-1.svg",
  },
  {
    src: "/brands/brand-2.svg",
  },
  {
    src: "/brands/brand-3.svg",
  },
  {
    src: "/brands/brand-4.svg",
  },
  {
    src: "/brands/brand-5.svg",
  },
  {
    src: "/brands/brand-6.svg",
  },
  {
    src: "/brands/brand-7.svg",
  },
];

const Brands = () => {
  return (
    <div>
      <div>
        {brandImages.map((brand, index) => {
          return <div>
            <Image src={brand.src} fill alt="" className="object-contain"/>
          </div>
        })}
      </div>
    </div>
  )
}

export default Brands