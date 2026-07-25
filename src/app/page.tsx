import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Programs } from "@/components/sections/programs";
import { Benefits } from "@/components/sections/benefits";
import { Gallery } from "@/components/sections/gallery";
import { Schedule } from "@/components/sections/schedule";
import { Pricing } from "@/components/sections/pricing";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: site.seo.title,
  },
  description: site.seo.description,
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Programs />
        <Benefits />
        <Gallery />
        <Schedule />
        <Pricing />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
