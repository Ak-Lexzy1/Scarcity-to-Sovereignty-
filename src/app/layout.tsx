import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dmsans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://scarcity-to-sovereignty.vercel.app"),
  title: {
    default: "Scarcity to Sovereignty | Money & Mindset",
    template: "%s | Scarcity to Sovereignty",
  },
  description:
    "Where scarcity thinking ends & wealth clarity starts. Practical money habits and mindset shifts for people building real financial freedom.",
  openGraph: {
    type: "website",
    siteName: "Scarcity to Sovereignty",
    title: "Scarcity to Sovereignty | Money & Mindset",
    description:
      "Where scarcity thinking ends & wealth clarity starts. Practical money habits and mindset shifts for people building real financial freedom.",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
  }
