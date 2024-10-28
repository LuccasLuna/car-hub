import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { NavBar, Footer } from '@/components'


export const metadata: Metadata = {
  title: "Car hub",
  description: "Discover the best cars in the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
          {children}
        <Footer />
      </body>
    </html>
  );
}
