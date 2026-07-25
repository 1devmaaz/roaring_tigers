import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <div
            className={cn(
              "flex items-center gap-3",
              align === "center" && "justify-center"
            )}
          >
            <span className="accent-line" />
            <span className="font-heading text-xs uppercase tracking-[0.25em] text-tiger">
              {eyebrow}
            </span>
          </div>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="font-display mt-4 text-4xl leading-[0.95] uppercase sm:text-5xl md:text-6xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="mt-5 text-base leading-relaxed text-offwhite/60 md:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
