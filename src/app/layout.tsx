import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/Components/NavBar";
import Hero from "@/Components/Hero";

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
        </body>
    </html>
  );
}
