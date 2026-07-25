import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

const included = [
  "Traditional Shotokan curriculum",
  "Kata & kumite training",
  "Belt grading & progression",
  "Tournament opportunities",
  "All ages & experience levels",
];

export function Pricing() {
  return (
    <section id="pricing" className="section relative overflow-hidden bg-[#171717]">
      <div className="pointer-events-none absolute right-0 top-0 -z-0 h-96 w-96 rounded-full bg-tiger/10 blur-[120px]" />

      <div className="container-rt relative">
        <SectionHeading
          eyebrow="Admission & Pricing"
          title={
            <>
              Start Your <span className="text-tiger">Journey</span>
            </>
          }
          description="Simple, transparent pricing. No hidden fees — just disciplined, professional training."
          align="center"
        />

        <div id="join" className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-stretch">
          {/* Pricing card */}
          <Reveal>
            <div className="relative h-full overflow-hidden rounded-2xl border border-tiger/40 bg-surface p-8 md:p-10 glow-red">
              <span className="absolute right-6 top-6 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 font-heading text-xs uppercase tracking-wider text-gold">
                Enrollment Open
              </span>

              <h3 className="font-display text-3xl uppercase">Membership</h3>
              <p className="mt-1 text-sm text-offwhite/55">
                Publicly advertised rates
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-line/60 bg-ink/60 p-5">
                  <p className="font-heading text-xs uppercase tracking-widest text-offwhite/50">
                    Registration
                  </p>
                  <p className="font-display mt-2 text-4xl text-gradient-fire">
                    {site.pricing.registration}
                  </p>
                  <p className="mt-1 text-xs text-offwhite/45">one-time</p>
                </div>
                <div className="rounded-xl border border-line/60 bg-ink/60 p-5">
                  <p className="font-heading text-xs uppercase tracking-widest text-offwhite/50">
                    Monthly Fee
                  </p>
                  <p className="font-display mt-2 text-4xl text-gradient-fire">
                    {site.pricing.monthly}
                  </p>
                  <p className="mt-1 text-xs text-offwhite/45">per month</p>
                </div>
              </div>

              <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
                {included.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-offwhite/80"
                  >
                    <Check className="size-4 shrink-0 text-tiger" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#contact">
                  <Button variant="primary" size="lg">
                    Join Today <ArrowRight />
                  </Button>
                </a>
                <a href="#contact">
                  <Button variant="secondary" size="lg">
                    Book a Free Trial
                  </Button>
                </a>
              </div>

              <p className="mt-6 text-xs text-offwhite/40">
                Fees are from publicly available listings. Please verify current
                pricing with the club before enrolling.
              </p>
            </div>
          </Reveal>

          {/* Emblem / value panel */}
          <Reveal delay={0.1}>
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-line/70 bg-ink p-8 md:p-10">
              <div className="pointer-events-none absolute inset-0 -z-0 opacity-[0.04]">
                <Image
                  src="/images/logo.png"
                  alt=""
                  fill
                  className="object-contain object-center"
                />
              </div>
              <div className="relative">
                <h3 className="font-display text-3xl uppercase leading-none">
                  More Than <span className="text-tiger">Karate</span>
                </h3>
                <p className="mt-4 text-offwhite/65">
                  Every membership is an investment in discipline, confidence
                  and a healthier lifestyle — guided by professional
                  instructors in a family-friendly dojo.
                </p>
              </div>
              <div className="relative mt-8 grid grid-cols-3 gap-4 border-t border-line/60 pt-6">
                {[
                  { v: `${site.yearsActive}+`, l: "Years" },
                  { v: "6", l: "Days / Week" },
                  { v: "All", l: "Ages" },
                ].map((s) => (
                  <div key={s.l}>
                    <p className="font-display text-3xl text-gradient-gold">
                      {s.v}
                    </p>
                    <p className="font-heading text-xs uppercase tracking-widest text-offwhite/50">
                      {s.l}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
