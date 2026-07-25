import { ImageResponse } from "next/og";
import { OgCard } from "@/components/og-card";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(<OgCard />, { ...size });
}
