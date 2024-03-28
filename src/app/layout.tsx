import type { Metadata } from "next";
import { Overpass } from "next/font/google";
import "./globals.css";
import Filters from "@/components/Filters";
// import Navbar from "@/components/Navbar";
// import Landing from "@/components/Landing";
// import AnimeContainer from "@/components/AnimeContainer";

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
      <body className={overpass.className} style={{backgroundColor: "#EDF1F5"}}>
        {children}</body>
    </html>
  );
}
