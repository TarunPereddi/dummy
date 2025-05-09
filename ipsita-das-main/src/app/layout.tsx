import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Poppins font with all weights
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

// Levenim MT fonts with different weights
const levenimMT = localFont({
  src: [
    {
      path: "../../public/fonts/levenim-mt-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/levenim-mt-bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-levenim-mt",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Being Beyond",
  description:
    "The Art of Fight: Turn Clash into Connection. Learn step by step emotional regulation techniques, mindset reframes and strategic communication templates to use disagreements and make your relationships stronger than ever before.",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${levenimMT.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
