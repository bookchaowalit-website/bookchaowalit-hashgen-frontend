import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
export const metadata: Metadata = { title: "Hash Generator | Bookchaowalit", description: "Generate SHA fingerprints locally with the Web Crypto API.", metadataBase: new URL("https://bookchaowalit.com"), robots: { index: true, follow: true } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>
  {/* THESIS: Hashing is a measurement instrument; the interface should make source, algorithm, and fingerprint legible as one operation.
OWN-WORLD: A late-night developer laboratory: graphite blue-black bench, calibration ticks, acid-lime signal, fixed-width readouts.
STORY: Set the specimen, select the digest family, run the instrument, then take the immutable reading.
FIRST VIEWPORT: Algorithm strip, source text, connector, and hexadecimal output form one bench.
FORM: Source textarea is the specimen tray; algorithm buttons are the selector; Generate and Copy are instrument controls; direction seed ccfe8a52.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance */}
  <Analytics /><SpeedInsights />{children}</body></html>; }
