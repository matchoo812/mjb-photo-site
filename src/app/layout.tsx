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
      <body className={`${lora.variable} ${oswald.variable} antialiased`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          <div className='flex flex-col justify-between min-h-screen'>
            <Navbar />
            <main className='w-11/12 max-w-[1500px] mx-auto pt-3 pb-10'>
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
