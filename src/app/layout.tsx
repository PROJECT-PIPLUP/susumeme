import type { Metadata } from "next";
import { Lobster } from "next/font/google";
import "./globals.css";

const lobster = Lobster({weight: "400", subsets: ["latin"]});

export const metadata: Metadata = {
  title: "susume.me",
  description: "susume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lobster.className}>{children}</body>
    </html>
  );
}
