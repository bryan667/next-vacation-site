import type { Metadata } from "next";
import { Caveat, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Luxury Travel Philippines & Asia Pacific | Celestia Pacific",
  description:
    "Celestia Pacific offers bespoke luxury travel experiences across the Philippines and Asia Pacific. Private island resorts, curated itineraries, yacht charters, and exclusive escapes tailored for discerning travelers.",
  keywords: [
    "Luxury travel Philippines",
    "Asia Pacific luxury tours",
    "Private island resorts Philippines",
    "Luxury vacation packages Asia",
    "Bespoke travel Philippines",
    "High-end travel Asia Pacific"
  ],
  openGraph: {
    title: "Celestia Pacific | Luxury Travel Philippines & Asia Pacific",
    description:
      "Exclusive luxury travel experiences in the Philippines and Asia Pacific. Private islands, five-star resorts, and curated bespoke journeys.",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${caveat.variable} bg-ocean-depth text-paper-white antialiased [font-family:var(--font-montserrat)] leading-[1.6] overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
