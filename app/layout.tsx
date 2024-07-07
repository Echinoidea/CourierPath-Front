import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

import { Assistant } from "next/font/google";
import Navmenu from "@/components/custom/navmenu";

const assistant = Assistant({weight: ["200", "300", "400"], subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Courier Tracker",
  description: "Analyze and track your food delivery work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${assistant.className}`}>
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
