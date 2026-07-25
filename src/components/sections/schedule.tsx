import { CalendarDays, Sun, Moon, Info } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export function Schedule() {
  return (
    <section id="schedule" className="section bg-surface-2">
      <div className="container-rt grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <SectionHeading
          eyebrow="Training Schedule"
          title={
            <>
              Train Six <span className="text-tiger">Days a Week</span>
            </>
          }
          description="Flexible morning and evening sessions make it easy to build a consistent practice around school, work and family."
        />

        <Reveal>
          <div className="overflow-hidden rounded-xl border border-line/70 bg-surface">
            <div className="flex items-center gap-4 border-b border-line/60 bg-gradient-to-r from-tiger/15 to-transparent px-7 py-6">
              <span className="grid size-12 place-items-center rounded-lg bg-tiger/20 text-tiger">
                <CalendarDays className="size-6" />
              </span>
              <div>
                <p className="font-heading text-xs uppercase tracking-widest text-offwhite/50">
                  Open
                </p>
                <p className="font-display text-2xl uppercase">
                  {site.schedule.days}
                </p>
              </div>
            </div>

            <div className="grid divide-y divide-line/60 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
              <div className="flex items-center gap-4 px-7 py-7">
                <Sun className="size-6 text-gold" />
                <div>
                  <p className="font-heading text-xs uppercase tracking-widest text-offwhite/50">
                    Daily Hours
                  </p>
                  <p className="text-lg font-medium text-offwhite/90">
                    {site.schedule.time}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 px-7 py-7">
                <Moon className="size-6 text-ember" />
                <div>
                  <p className="font-heading text-xs uppercase tracking-widest text-offwhite/50">
                    Sessions
                  </p>
                  <p className="text-lg font-medium text-offwhite/90">
                    Morning & Evening
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 border-t border-line/60 bg-ink/40 px-7 py-4">
              <Info className="mt-0.5 size-4 shrink-0 text-offwhite/40" />
              <p className="text-xs leading-relaxed text-offwhite/50">
                Some directories list evening classes at 6:00–9:00 PM. Please
                confirm current timings with the club before your first visit.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
