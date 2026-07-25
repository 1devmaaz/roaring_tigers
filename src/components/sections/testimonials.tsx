"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Quote, ArrowLeft, ArrowRight, Star } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { testimonials } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selected, setSelected] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();

    const id = setInterval(() => emblaApi.scrollNext(), 6000);
    return () => {
      emblaApi.off("select", onSelect);
      clearInterval(id);
    };
  }, [emblaApi]);

  return (
    <section className="section bg-surface-2">
      <div className="container-rt">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              What Our <span className="text-tiger">Community</span> Says
            </>
          }
          align="center"
        />

        <div className="mt-14 overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t, i) => (
              <div key={i} className="min-w-0 shrink-0 grow-0 basis-full px-2">
                <figure className="mx-auto max-w-3xl rounded-2xl border border-line/70 bg-surface p-8 text-center md:p-12">
                  <Quote className="mx-auto size-10 text-tiger/70" />
                  <div className="mt-5 flex justify-center gap-1">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star
                        key={s}
                        className="size-4 fill-gold text-gold"
                      />
                    ))}
                  </div>
                  <blockquote className="mt-6 font-heading text-xl leading-relaxed text-offwhite/90 md:text-2xl">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 font-heading text-sm uppercase tracking-[0.2em] text-tiger">
                    {t.author}
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            onClick={scrollPrev}
            aria-label="Previous"
            className="grid size-11 place-items-center rounded-md border border-line text-white transition-colors hover:border-tiger hover:text-tiger"
          >
            <ArrowLeft className="size-5" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  selected === i ? "w-8 bg-tiger" : "w-2.5 bg-line"
                )}
              />
            ))}
          </div>
          <button
            onClick={scrollNext}
            aria-label="Next"
            className="grid size-11 place-items-center rounded-md border border-line text-white transition-colors hover:border-tiger hover:text-tiger"
          >
            <ArrowRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
