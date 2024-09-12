"use client";

import { motion } from "framer-motion";;
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaRegCheckCircle } from 'react-icons/fa';

const featuresData = [
  {
    imgSrc: "/Features/img-1.svg",
    title: "Smart Task Management",
    description: "Organize and prioritize tasks effortlessly.",
    highlights: [
      "Set due dates and reminders.",
      "Track progress and milestones.",
      "Easily sort tasks by priority.",
    ],
  },
  {
    imgSrc: "/Features/img-2.svg",
    title: "Real-Time Collaboration",
    description: "Collaborate with you team in real-time.",
    highlights: [
      "Set due dates and reminders.",
      "Track progress and milestones.",
      "Easily sort tasks by priority.",
    ],
  },
  {
    imgSrc: "/Features/img-3.svg",
    title: "Advanced Analytics",
    description: "Gain insights to boost your productivity.",
    highlights: [
      "Set due dates and reminders.",
      "Track progress and milestones.",
      "Easily sort tasks by priority.",
    ],
  },
  {
    imgSrc: "/Features/img-4.svg",
    title: "Customizabble Workspaces",
    description: "Personalize your workspace for maximum efficiency.",
    highlights: [
      "Set due dates and reminders.",
      "Track progress and milestones.",
      "Easily sort tasks by priority.",
    ],
  },
]

const Features = () => {
  return (
    <section className="text-white pt-32 relative">
      <div className="container mx-auto">
        <div className="flex gap-16">
          {/* img */}
          <div>img</div>
          {/* text */}
          <div className="flex-1 flex flex-col gap-24">
            {featuresData.map((feature, index) => {
              return (
                <div key={index}>
                  <div>
                    <h2>{feature.title}</h2>
                    <p>{feature.description}</p>
                    {/* highlights */}
                    <div>
                      {feature.highlights.map((highlight, index) => {
                        return (
                          <div key={index} className="flex items-center gap-4">
                            <FaRegCheckCircle className="text-accent_secondary text-2xl" />
                            <p>{highlight}</p>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>)
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features