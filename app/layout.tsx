import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "CAR STYLE | Premium Car Detailing & Washing Services",
  description: "CAR STYLE offers professional car care that keeps your vehicle looking pristine. Premium washing, detailing, and protection services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}


