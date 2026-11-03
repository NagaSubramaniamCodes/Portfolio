import type { Metadata } from "next";
import { About } from "@/components/home/about";
import { ContactCta } from "@/components/home/contact-cta";
import { Credentials } from "@/components/home/credentials";
import { Experience } from "@/components/home/experience";
import { Hero } from "@/components/home/hero";
import { RecruiterRail } from "@/components/home/recruiter-rail";
import { SelectedWork } from "@/components/home/selected-work";
import { SkillBoard } from "@/components/home/skill-board";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <RecruiterRail />
      <About />
      <SkillBoard />
      <SelectedWork />
      <Experience />
      <Credentials />
      <ContactCta />
    </>
  );
}
