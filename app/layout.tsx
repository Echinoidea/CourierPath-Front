import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Navmenu from "@/components/custom/navmenu";

import { Assistant, Nunito, Sarabun, Montserrat, Poppins, Raleway, Hind} from "next/font/google";
import Head from "next/head";
const sarabun = Sarabun({weight: ['100'], subsets: ['latin']})

const montserrat = Montserrat({weight: ['100' , '200'], subsets: ['latin']})
const poppins = Hind({weight: ['300', '400'], subsets: ['latin']})

export const metadata: Metadata = {
  title: "CourierPath",
  description: "Analyze and track your food delivery work",
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navmenu/>
          <div className="p-4">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
