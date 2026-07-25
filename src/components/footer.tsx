import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line/60 bg-black">
      <div className="container-rt py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt={site.name}
                width={52}
                height={52}
                className="h-12 w-12 object-contain"
              />
              <div>
                <p className="font-display text-xl uppercase leading-none">
                  Roaring <span className="text-tiger">Tigers</span>
                </p>
                <p className="font-heading text-[0.65rem] uppercase tracking-[0.2em] text-offwhite/50">
                  Shotokan Karate Club
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm font-heading text-sm uppercase tracking-[0.15em] text-offwhite/50">
              {site.tagline}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-offwhite/45">
              A traditional Shotokan Karate academy building disciplined,
              confident and physically fit individuals in {site.location}.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-xs uppercase tracking-[0.25em] text-tiger">
              Explore
            </h4>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-offwhite/60 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xs uppercase tracking-[0.25em] text-tiger">
              Get in Touch
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-offwhite/60">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-tiger" />
                <span>{site.address.lines.join(", ")}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-tiger" />
                <span className="flex flex-col">
                  {site.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/-/g, "")}`}
                      className="transition-colors hover:text-white"
                    >
                      {p}
                    </a>
                  ))}
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-tiger" />
                <a
                  href={`mailto:${site.email}`}
                  className="break-all transition-colors hover:text-white"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line/50 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-offwhite/40">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-xs text-offwhite/40">{site.location}</p>
        </div>
      </div>
    </footer>
  );
}
