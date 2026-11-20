import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import SmoothScroll from "@/components/site/smooth-scroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cortexa | AI agents that do the work",
  description:
    "Cortexa is the platform for building, testing and deploying AI agents that research, write, code and take action across your stack.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${display.variable} dark overflow-x-clip antialiased`}
    >
      <body className="overflow-x-clip bg-[#0a0a0b] text-[#f5f1e8]">
        <noscript>
          <style>{"[data-reveal],[data-reveal-stagger]>*{opacity:1!important}"}</style>
        </noscript>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
