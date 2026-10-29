import type { Metadata } from "next";
import { About } from "@/components/home/about";
import { ContactCta } from "@/components/home/contact-cta";
import { Credentials } from "@/components/home/credentials";
import { Expertise } from "@/components/home/expertise";
import { Hero } from "@/components/home/hero";
import { SelectedWork } from "@/components/home/selected-work";
import { Services } from "@/components/home/services";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Services />
      <Expertise />
      <Credentials />
      <About />
      <ContactCta />
    </>
  );
}
