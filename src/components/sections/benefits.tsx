import { Check, Trophy } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/reveal";
import { benefits, belts } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Benefits() {
  return (
    <section className="section bg-ink">
      <div className="container-rt grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-start">
        {/* Benefits */}
        <div>
          <SectionHeading
            eyebrow="Why Train With Us"
            title={
              <>
                Benefits of <span className="text-tiger">Joining</span>
              </>
            }
          />
          <StaggerGroup className="mt-8 grid gap-3 sm:grid-cols-2">
            {benefits.map((b) => (
              <StaggerItem key={b}>
                <div className="flex items-center gap-3 rounded-lg border border-line/60 bg-surface px-4 py-3.5">
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-tiger/15 text-tiger">
                    <Check className="size-4" />
                  </span>
                  <span className="text-sm text-offwhite/80">{b}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        {/* Belt system */}
        <div>
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="accent-line" />
              <span className="font-heading text-xs uppercase tracking-[0.25em] text-tiger">
                Belt System
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h3 className="font-display mt-4 text-4xl uppercase leading-none sm:text-5xl">
              The Path to <span className="text-gradient-gold">Black Belt</span>
            </h3>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-offwhite/60">
              Typical Shotokan progression — each rank marks new discipline,
              skill and responsibility.
            </p>
          </Reveal>

          <StaggerGroup className="mt-8 space-y-3">
            {belts.map((belt, i) => {
              const isBlack = belt.name === "Black";
              return (
                <StaggerItem key={belt.name}>
                  <div
                    className={cn(
                      "flex items-center gap-4 rounded-lg border bg-surface px-4 py-3.5 transition-colors",
                      isBlack
                        ? "border-gold/50 bg-gold/5"
                        : "border-line/60 hover:border-line"
                    )}
                  >
                    <span className="font-heading w-6 text-sm text-offwhite/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={cn(
                        "h-6 flex-1 rounded-sm border border-black/20",
                        belt.className
                      )}
                    />
                    <span
                      className={cn(
                        "font-heading w-28 text-right text-sm uppercase tracking-wide",
                        isBlack ? "text-gold" : "text-offwhite/85"
                      )}
                    >
                      {belt.name} Belt
                    </span>
                    {isBlack && <Trophy className="size-4 text-gold" />}
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
