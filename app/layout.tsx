import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";

import "./globals.css";

const monstserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chat Fusion",
  description:
    "Bringing Conversations to Life with Chat Fusion: Connect, Communicate, Create",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={monstserrat.className}>{children}</body>
    </html>
  );
}
