import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import NavBar from "@/Components/NavBar";
import Hero from "@/Components/Hero";
import ChooseUs from "@/Components/ChooseUs";
import WorkOut from "@/Components/WorkOut";
import Services from "@/Components/Services";
import Level from "@/Components/Level";
import Training from "@/Components/Training";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fitness Gym",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NavBar />
        {children}
        <Hero />
        <ChooseUs />
        <WorkOut />
        <Services />
        <Level />
        <Training />
        </body>
    </html>
  );
}
