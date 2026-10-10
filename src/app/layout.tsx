import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

// I chose Geist for UI text and Libre Baskerville for headings so the
// site feels warm and editorial without looking like a generic template.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const display = Libre_Baskerville({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description:
    "Fictional bakery website case study by PrismWave Studio. Demo content only; not a live business.",
  openGraph: {
    title: site.name,
    description: site.tagline,
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body
        className={`${geistSans.variable} ${display.variable} min-h-screen font-sans antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
