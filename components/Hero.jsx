"use client";
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  return (
    <section>
      <div className="container mx-auto h-full flex items-center xl:items-start">
        {/* text */}
        <div className='bg-pink-50/10 flex flex-col justify-center items-center 
        gap-6 text-center fixed left-0 right-0 mt-24 xl:mt-[160px]'>
          <h1 className='text-[60px] font-bold tracking-[-0.5px] leading-none max-w-[800px]
           xl:max-w-max'>Boost Your Productivity Instantly</h1>
        </div>
        {/* img */}
        <div className='hidden xl:flex w-full max-w-[960px] mx-auto h-[520px] bg-no-repeat sticky left-0 right-0'
          style={{
            backgroundImage: "url('/hero/img.svg')",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}></div>
      </div>
    </section>
  )
}

export default Hero