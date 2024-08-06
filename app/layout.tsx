"use client"
import { useEffect } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import FlareCursor from "@/pages/customcursor";
import Lenis from "@studio-freight/lenis";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(() => {
    console.log("Initializing Lenis");
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      console.log("Destroying Lenis");
      lenis.destroy();
    };
  }, []);


  return (
    <html lang="en">
      <head>
        <title>Santanu M | Game Dev</title>
        <link rel="icon" href="./favicon.ico" sizes="16x16" />
      </head>

      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <FlareCursor />
      </body>
    </html>
  );
}
