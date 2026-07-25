import type { Metadata } from "next";
import { Bebas_Neue, Oswald, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { site } from "@/lib/site";

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | ${site.location}`,
    template: `%s | ${site.shortName}`,
  },
  description:
    "Traditional Shotokan Karate academy in Sheikhupura, Punjab. Professional karate instruction for kids, teens, adults and women — discipline, confidence, self-defense and fitness.",
  keywords: [
    "Shotokan Karate",
    "Karate Sheikhupura",
    "Self Defense Pakistan",
    "Roaring Tigers",
    "Martial Arts",
    "Kids Karate",
  ],
  openGraph: {
    title: site.name,
    description:
      "Traditional Shotokan Karate academy in Sheikhupura, Punjab, Pakistan.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebas.variable} ${oswald.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-ink text-offwhite">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
