import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/Sidebar";
import { Providers } from "../components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Dashboard",
  description: "SaaS dashboard UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
  <body className="bg-gray-100 dark:bg-gray-900">
    <Providers>
      <div className="flex min-h-screen">

        <Sidebar />

        <main className="flex-1 p-8 max-w-7xl mx-auto w-full">
          {children}
        </main>

      </div>
    </Providers>
  </body>
</html>
  );
}