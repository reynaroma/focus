"use client";
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  return (
    <section>
      <div className="container mx-auto h-full items-center xl:items-start">
        <div>text</div>
        <div className='hidden xl:flex w-full max-w-[960px] mx-auto h-[520px] bg-no-repeat sticky left-0 right-0'
          style={{
            backgroundImage: "url('/hero/img.svg')",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}>image</div>
      </div>
    </section>
  )
}

export default Hero