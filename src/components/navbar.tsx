"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-line/60 bg-ink/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="container-rt flex h-20 items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt={site.name}
            width={48}
            height={48}
            className="h-11 w-11 object-contain"
            priority
          />
          <span className="hidden font-display text-xl leading-none uppercase tracking-wide sm:block">
            Roaring <span className="text-tiger">Tigers</span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-heading text-sm uppercase tracking-wide text-offwhite/70 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="#contact">
            <Button variant="secondary" size="sm">
              Book a Free Trial
            </Button>
          </a>
          <a href="#join">
            <Button variant="primary" size="sm">
              Join Today
            </Button>
          </a>
        </div>

        <button
          className="grid h-11 w-11 place-items-center rounded-md border border-line text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="border-t border-line/60 bg-ink/95 backdrop-blur-md lg:hidden"
          >
            <ul className="container-rt flex flex-col py-4">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-line/40 py-3 font-heading text-lg uppercase tracking-wide text-offwhite/80"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="mt-4 flex flex-col gap-3">
                <a href="#contact" onClick={() => setOpen(false)}>
                  <Button variant="secondary" size="md" className="w-full">
                    Book a Free Trial
                  </Button>
                </a>
                <a href="#join" onClick={() => setOpen(false)}>
                  <Button variant="primary" size="md" className="w-full">
                    Join Today
                  </Button>
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
