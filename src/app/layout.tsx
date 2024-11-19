import type { Metadata } from "next";
import { ThemeProvider } from "./components/ThemeProvider";
import { Lora, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/nav/Navbar";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Matt Ballard",
  description: "mattjballard.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${lora.variable} ${oswald.variable} antialiased`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          <Navbar />
          <main className='w-11/12 max-w-[1500px] mx-auto py-3'>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
