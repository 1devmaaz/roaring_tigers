"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, ImageIcon } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { galleryCategories } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: false,
  });
  const [selected, setSelected] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section id="gallery" className="section bg-ink">
      <div className="container-rt">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Gallery"
            title={
              <>
                Inside the <span className="text-tiger">Dojo</span>
              </>
            }
            description="A glimpse of training, kata, kumite and the moments that define our students."
          />
          <div className="flex gap-3">
            <button
              onClick={scrollPrev}
              aria-label="Previous"
              className="grid size-12 place-items-center rounded-md border border-line text-white transition-colors hover:border-tiger hover:text-tiger"
            >
              <ArrowLeft className="size-5" />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next"
              className="grid size-12 place-items-center rounded-md border border-line text-white transition-colors hover:border-tiger hover:text-tiger"
            >
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 overflow-hidden" ref={emblaRef}>
        <div className="container-rt flex gap-5">
          {galleryCategories.map((cat, i) => (
            <div
              key={cat.id}
              className="min-w-0 shrink-0 grow-0 basis-[85%] sm:basis-[55%] lg:basis-[38%]"
            >
              <article className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-line/70">
                <Image
                  src="/images/banner.jpeg"
                  alt={cat.title}
                  fill
                  sizes="(max-width: 640px) 85vw, 40vw"
                  className={cn(
                    "object-cover transition-all duration-700 group-hover:scale-105",
                    i % 2 === 0 ? "object-left" : "object-right"
                  )}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <div className="absolute inset-0 bg-tiger/0 transition-colors duration-500 group-hover:bg-tiger/10" />

                <div className="absolute left-5 top-5 grid size-11 place-items-center rounded-md border border-white/20 bg-ink/50 text-tiger backdrop-blur-sm">
                  <ImageIcon className="size-5" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="font-heading text-xs uppercase tracking-[0.25em] text-tiger">
                    0{i + 1}
                  </span>
                  <h3 className="font-display mt-1 text-3xl uppercase leading-none">
                    {cat.title}
                  </h3>
                  <p className="mt-2 max-h-0 overflow-hidden text-sm text-offwhite/70 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
                    {cat.desc}
                  </p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="container-rt mt-8 flex items-center justify-center gap-2">
        {galleryCategories.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              selected === i ? "w-8 bg-tiger" : "w-2.5 bg-line hover:bg-offwhite/40"
            )}
          />
        ))}
      </div>

      {/* Facilities note */}
      <div className="container-rt mt-16">
        <FacilitiesBar />
      </div>
    </section>
  );
}

function FacilitiesBar() {
  const items = [
    "Spacious dojo",
    "Professional instructors",
    "Family-friendly environment",
    "Morning & evening classes",
  ];
  return (
    <div className="grid gap-px overflow-hidden rounded-xl border border-line/70 bg-line/70 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div
          key={item}
          className="bg-surface px-6 py-8 text-center transition-colors hover:bg-surface/60"
        >
          <p className="font-heading text-sm uppercase tracking-wide text-offwhite/85">
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}
