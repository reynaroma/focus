"use client";
import { motion } from "framer-motion";
import { fadeInUpSpring } from "@/motion/motionVariants";

const Trial = () => {
  return (
    <section className="xl:mb-32 w-full">
      <div className="py-24 w-full xl:max-w-[1140px] mx-auto min-h-[300px] bg-gradient-to-r from-accent via-accent_secondary to-accent h-full flex items-center xl:rounded-2xl">
        <div>
          <div>
            {/* text */}
            <div>
              <h2 className="">Start your 30-day free trial</h2>
              <p>Experience the full power of our platform with a 30-day free trial. No credit card required.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Trial