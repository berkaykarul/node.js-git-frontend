import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const heading = Barlow_Condensed({
  variable: "--font-dd-heading",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

export const metadata: Metadata = {
  title: "YemekYol: Food, Grocery and Retail - Fast Same Day Delivery",
  description:
    "YemekYol clone — $0 delivery fee on first order. Enter an address to browse restaurants, groceries, and more.",
  icons: {
    icon: "/sites/YemekYol-com-bb18bd46/shared/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${heading.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
