import {
  Baby,
  Flame,
  Dumbbell,
  ShieldHalf,
  Wind,
  Swords,
  Check,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/reveal";
import { programs, type Program } from "@/lib/site";

const iconMap: Record<Program["icon"], LucideIcon> = {
  kids: Baby,
  teen: Flame,
  adult: Dumbbell,
  women: ShieldHalf,
  kata: Wind,
  kumite: Swords,
};

export function Programs() {
  return (
    <section id="programs" className="section bg-[#171717]">
      <div className="container-rt">
        <SectionHeading
          eyebrow="Programs"
          title={
            <>
              Training for <span className="text-tiger">Every</span> Journey
            </>
          }
          description="From first-time beginners to competitive athletes, every program is rooted in traditional Shotokan technique and real-world capability."
          align="center"
        />

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => {
            const Icon = iconMap[program.icon];
            return (
              <StaggerItem key={program.title}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-line/70 bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-tiger/60">
                  <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-tiger/10 blur-2xl transition-opacity duration-300 group-hover:bg-tiger/20" />

                  <div className="flex items-center justify-between">
                    <div className="grid size-14 place-items-center rounded-lg border border-line/70 bg-ink text-tiger transition-colors group-hover:border-tiger/50">
                      <Icon className="size-7" />
                    </div>
                    {program.age && (
                      <span className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 font-heading text-xs uppercase tracking-wider text-gold">
                        {program.age}
                      </span>
                    )}
                  </div>

                  <h3 className="font-display mt-6 text-3xl uppercase leading-none">
                    {program.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-offwhite/60">
                    {program.intro}
                  </p>

                  <ul className="mt-6 space-y-2 border-t border-line/50 pt-5">
                    {program.focus.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2.5 text-sm text-offwhite/80"
                      >
                        <Check className="size-4 shrink-0 text-tiger" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
