"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center overflow-hidden pt-20"
    >
      {/* Background image + treatments */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/banner.jpeg"
          alt="Karate training"
          fill
          priority
          className="scale-105 object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/70" />
        <div className="vignette absolute inset-0" />
      </div>

      {/* Ambient glow */}
      <div className="pointer-events-none absolute -left-40 top-1/3 -z-10 h-96 w-96 rounded-full bg-tiger/20 blur-[120px]" />

      <div className="container-rt grid items-center gap-12 py-16 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="flex items-center gap-3"
          >
            <span className="accent-line" />
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-offwhite/70">
              {site.location}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease, delay: 0.08 }}
            className="font-display mt-6 text-6xl leading-[0.9] uppercase sm:text-7xl md:text-8xl"
          >
            Roaring Tigers
            <span className="block text-gradient-fire">Shotokan Karate</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.18 }}
            className="mt-6 max-w-xl font-heading text-lg uppercase tracking-[0.2em] text-offwhite/80"
          >
            {site.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.24 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-offwhite/60 md:text-lg"
          >
            A traditional Shotokan academy building disciplined, confident and
            physically fit students — for kids, teens, adults and women of all
            experience levels.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.32 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a href="#join">
              <Button variant="primary" size="lg">
                Join Today <ArrowRight />
              </Button>
            </a>
            <a href="#contact">
              <Button variant="secondary" size="lg">
                Book a Free Trial
              </Button>
            </a>
            <a
              href={`tel:${site.phones[0].replace(/-/g, "")}`}
              className="flex items-center gap-2 font-heading text-sm uppercase tracking-wide text-offwhite/70 transition-colors hover:text-white"
            >
              <Phone className="size-4 text-tiger" /> {site.phones[0]}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-line/50 pt-6"
          >
            {[
              { value: `${site.yearsActive}+`, label: "Years Active" },
              { value: "All Ages", label: "5 & Up" },
              { value: "District & National", label: "Competitors Trained" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl text-gradient-gold">
                  {stat.value}
                </div>
                <div className="font-heading text-xs uppercase tracking-widest text-offwhite/50">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Logo emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease, delay: 0.2 }}
          className="relative hidden justify-self-center lg:block"
        >
          <div className="absolute inset-0 -z-10 rounded-full bg-tiger/25 blur-[80px]" />
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/images/logo.png"
              alt={site.name}
              width={420}
              height={420}
              className="drop-shadow-[0_20px_60px_rgba(214,40,40,0.35)]"
              priority
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-offwhite/30 p-1.5"
        >
          <span className="h-2 w-1 rounded-full bg-tiger" />
        </motion.div>
      </div>
    </section>
  );
}
