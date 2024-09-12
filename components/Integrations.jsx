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
    src: "/integrations/bitbucked.svg",
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
        <div className="">
          <h2 className="">Unified Workflows</h2>
          <p className="">Integrate with top apps to create a seamless, connected experience.</p>
        </div>
        {/* icon list */}
        <div className="">icon</div>
        {/* btn */}
        <div>
          <Button btnText="See all" />
        </div>
      </div>
    </section>
  )
}

export default Integrations