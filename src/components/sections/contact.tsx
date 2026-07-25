"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, Mail, CheckCircle2, Send } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { site, programs } from "@/lib/site";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z
    .string()
    .min(7, "Please enter a valid phone number")
    .regex(/^[0-9+\-\s()]+$/, "Only numbers and + - ( ) are allowed"),
  email: z.string().email("Please enter a valid email").or(z.literal("")),
  program: z.string().min(1, "Please select a program"),
  message: z.string().min(5, "Tell us a little about what you're looking for"),
});

type FormValues = z.infer<typeof schema>;

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "", email: "", program: "", message: "" },
  });

  const onSubmit = async (data: FormValues) => {
    // No backend wired up — simulate a submission.
    await new Promise((r) => setTimeout(r, 800));
    console.log("Enquiry submitted:", data);
    setSubmitted(true);
    reset();
  };

  return (
    <section id="contact" className="section bg-surface-2">
      <div className="container-rt">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Ready to <span className="text-tiger">Begin?</span>
            </>
          }
          description="Reach out to book a free trial, ask a question or enroll. We'll get back to you as soon as we can."
          align="center"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.3fr]">
          {/* Contact info */}
          <div className="space-y-4">
            <Reveal>
              <InfoCard
                icon={<MapPin className="size-5" />}
                title="Visit the Dojo"
              >
                <address className="not-italic leading-relaxed text-offwhite/70">
                  {site.address.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </InfoCard>
            </Reveal>

            <Reveal delay={0.05}>
              <InfoCard icon={<Phone className="size-5" />} title="Call Us">
                <div className="space-y-1.5">
                  {site.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/-/g, "")}`}
                      className="block text-offwhite/70 transition-colors hover:text-tiger"
                    >
                      {p}
                    </a>
                  ))}
                </div>
              </InfoCard>
            </Reveal>

            <Reveal delay={0.1}>
              <InfoCard icon={<Mail className="size-5" />} title="Email">
                <a
                  href={`mailto:${site.email}`}
                  className="break-all text-offwhite/70 transition-colors hover:text-tiger"
                >
                  {site.email}
                </a>
              </InfoCard>
            </Reveal>

            <p className="px-1 text-xs text-offwhite/40">
              All contact details are from publicly available listings.
            </p>
          </div>

          {/* Form */}
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-line/70 bg-surface p-7 md:p-9">
              {submitted ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <CheckCircle2 className="size-16 text-gold" />
                  <h3 className="font-display mt-5 text-3xl uppercase">
                    Message Sent
                  </h3>
                  <p className="mt-3 max-w-sm text-offwhite/60">
                    Thank you for reaching out. Our team will contact you
                    shortly to arrange your visit.
                  </p>
                  <Button
                    variant="secondary"
                    size="md"
                    className="mt-7"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="grid gap-5 sm:grid-cols-2"
                  noValidate
                >
                  <Field label="Full Name" error={errors.name?.message}>
                    <input
                      {...register("name")}
                      placeholder="e.g. Ali Raza"
                      className={inputCls}
                    />
                  </Field>

                  <Field label="Phone Number" error={errors.phone?.message}>
                    <input
                      {...register("phone")}
                      placeholder="03xx-xxxxxxx"
                      inputMode="tel"
                      className={inputCls}
                    />
                  </Field>

                  <Field
                    label="Email (optional)"
                    error={errors.email?.message}
                  >
                    <input
                      {...register("email")}
                      placeholder="you@example.com"
                      className={inputCls}
                    />
                  </Field>

                  <Field label="Program" error={errors.program?.message}>
                    <select
                      {...register("program")}
                      className={cn(inputCls, "appearance-none")}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a program
                      </option>
                      {programs.map((p) => (
                        <option key={p.title} value={p.title}>
                          {p.title}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <div className="sm:col-span-2">
                    <Field label="Message" error={errors.message?.message}>
                      <textarea
                        {...register("message")}
                        rows={4}
                        placeholder="Tell us who's joining and any questions you have…"
                        className={cn(inputCls, "resize-none")}
                      />
                    </Field>
                  </div>

                  <div className="sm:col-span-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending…" : "Send Message"}
                      {!isSubmitting && <Send />}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const inputCls =
  "w-full rounded-lg border border-line bg-ink px-4 py-3 text-sm text-offwhite placeholder:text-offwhite/35 outline-none transition-colors focus:border-tiger";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="font-heading mb-2 block text-xs uppercase tracking-widest text-offwhite/60">
        {label}
      </span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-tiger">{error}</span>}
    </label>
  );
}

function InfoCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 rounded-xl border border-line/70 bg-surface p-6">
      <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-tiger/15 text-tiger">
        {icon}
      </span>
      <div>
        <h3 className="font-heading text-sm uppercase tracking-widest text-offwhite/90">
          {title}
        </h3>
        <div className="mt-2 text-sm">{children}</div>
      </div>
    </div>
  );
}
