import type { Metadata } from "next";
import {Inter, Space_Grotesk} from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";

const inter = Inter({
    variable: "--font-inter",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

const spaceGrotesk = Space_Grotesk({
    variable: "--font-space-grotesk",
    weight: ["300", "400", "500", "600", "700"]
})

export const metadata: Metadata = {
  title: "Jakush",
  description: "The personal website of Jakub Šulc (aka Jakush). Projects, experience, and background.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
          className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
