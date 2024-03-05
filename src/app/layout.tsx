import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "David Nguyen | KoinX FE Intern",
  description: "David Nguyen | KoinX FE Intern",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className="bg-[#EFF2F5] w-full min-h-screen">
          <Header />
          <div className="px-4">{children}</div>
        </div>
      </body>
    </html>
  );
}
