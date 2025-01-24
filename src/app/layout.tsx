import type { Metadata } from "next";
import { ThemeProvider } from "./components/ThemeProvider";
import { Lora, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/nav/Navbar";
import Footer from "./components/Footer";

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
      <body
        className={`${lora.variable} ${oswald.variable} antialiased bg-background overflow-x-clip`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          <div className='flex flex-col justify-between items-center min-h-screen bg-transparent overflow-x-clip'>
            <Navbar />
            <main className='mx-auto pb-10 bg-transparent'>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
