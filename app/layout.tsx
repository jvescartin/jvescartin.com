import type { Metadata } from "next";
import {Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans-3",
});

export const metadata: Metadata = {
  title: "jvescartin.com",
  description: "A blog about me, tech, and entrepreneurship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${sourceSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
