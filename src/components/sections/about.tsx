import { Target, Eye, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/reveal";
import { coreValues, site } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="section bg-surface-2">
      <div className="container-rt">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionHeading
              eyebrow="About the Club"
              title={
                <>
                  Traditional Shotokan.
                  <br />
                  <span className="text-tiger">Modern Discipline.</span>
                </>
              }
            />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-offwhite/65 md:text-lg">
              <Reveal>
                <p>
                  Roaring Tigers Shotokan Karate Club is a Shotokan Karate
                  academy based in {site.location}. We provide professional
                  karate instruction for children, teenagers, adults and women
                  with a focus on discipline, confidence, self-defense, physical
                  fitness and personal development.
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <p>
                  We emphasize traditional Shotokan Karate while creating a
                  welcoming environment where students of all experience levels
                  train together.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-offwhite/80">
                  Active for approximately{" "}
                  <span className="text-gold">
                    {site.yearsActive} years
                  </span>
                  , our academy has trained students who competed at district
                  and national level.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="space-y-6">
            <Reveal>
              <MissionCard
                icon={<Target className="size-6" />}
                label="Our Mission"
                text="To develop disciplined, confident, physically fit individuals through traditional Shotokan Karate training."
              />
            </Reveal>
            <Reveal delay={0.08}>
              <MissionCard
                icon={<Eye className="size-6" />}
                label="Our Vision"
                text="To inspire the youth of Pakistan by promoting martial arts, healthy living, respect and lifelong personal growth."
              />
            </Reveal>
          </div>
        </div>

        {/* Core values */}
        <div className="mt-16">
          <Reveal>
            <div className="flex items-center gap-3">
              <ShieldCheck className="size-5 text-tiger" />
              <h3 className="font-heading text-sm uppercase tracking-[0.25em] text-offwhite/70">
                Core Values
              </h3>
            </div>
          </Reveal>
          <StaggerGroup className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {coreValues.map((value) => (
              <StaggerItem key={value}>
                <div className="group relative overflow-hidden rounded-lg border border-line/70 bg-surface px-4 py-5 transition-colors hover:border-tiger/60">
                  <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-tiger to-ember transition-transform duration-300 group-hover:scale-x-100" />
                  <span className="font-heading text-base font-medium uppercase tracking-wide text-offwhite/85">
                    {value}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}

function MissionCard({
  icon,
  label,
  text,
}: {
  icon: React.ReactNode;
  label: string;
  text: string;
}) {
  return (
    <div className="relative rounded-xl border border-line/70 bg-surface p-7">
      <div className="absolute left-0 top-7 h-10 w-1 rounded-r bg-tiger" />
      <div className="flex items-center gap-3 text-tiger">
        {icon}
        <span className="font-heading text-sm uppercase tracking-[0.25em] text-offwhite/70">
          {label}
        </span>
      </div>
      <p className="mt-4 text-lg leading-relaxed text-offwhite/85">{text}</p>
    </div>
  );
}
