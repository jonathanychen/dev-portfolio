import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const font = Manrope({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jonathan Chen",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          font.className +
          " overscroll-none min-h-screen flex flex-col items-center justify-between relative m-10"
        }
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
