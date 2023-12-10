import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/theme/tailwind-directives.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev Portfolio",
  description: "We are builders. We are makers. We are creators.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
