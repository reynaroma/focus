"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./Button";

const icons = [
  {
    src: "/integrations/notion.svg",
  },
  {
    src: "/integrations/slack.svg",
  },
  {
    src: "/integrations/google_drive.svg",
  },
  {
    src: "/integrations/intercom.svg",
  },
  {
    src: "/integrations/jira.svg",
  },
  {
    src: "/integrations/dropbox.svg",
  },
  {
    src: "/integrations/stripe.svg",
  },
  {
    src: "/integrations/zapier.svg",
  },
  {
    src: "/integrations/figma.svg",
  },
  {
    src: "/integrations/confluence.svg",
  },
  {
    src: "/integrations/mailchimp.svg",
  },
  {
    src: "/integrations/whatsapp.svg",
  },
  {
    src: "/integrations/discord.svg",
  },
  {
    src: "/integrations/bitbucket.svg",
  },
  {
    src: "/integrations/invision.svg",
  },
  {
    src: "/integrations/evernote.svg",
  },
]

const Integrations = () => {
  return (
    <section className="py-24 xl:py-32 min-h-[720px] xl:mt-32">
      <div className="container mx-auto flex flex-col justify-center items-center gap-8 xl:gap-16">
        {/* text */}
        <div className="text-center">
          <h2 className="h2 mb-3">Unified Workflows</h2>
          <p className="lead">Integrate with top apps to create a seamless, connected experience.</p>
        </div>
        {/* icon list */}
        <div className="flex flex-wrap gap-8 w-full max-w-[1024px] mx-auto place-content-center mb-8">
          {icons.map((icon, index) => (
            <div key={index} className="relative w-[80px] h-[80px]">
              <Image src={icon.src} alt="icon" fill />
            </div>
          ))}
        </div>
        {/* btn */}
        <div>
          <Button btnText="See all" />
        </div>
      </div>
    </section>
  )
}

export default Integrations