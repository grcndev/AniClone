import type { Metadata } from "next";
import { Overpass } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Landing from "@/components/Landing";

const overpass = Overpass({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anilist",
  description: "My Anilist's clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={overpass.className}>
        <Navbar/>
        <Landing/>
        {children}</body>
    </html>
  );
}
