import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";
import { CssBaseline } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "@/styles/globals.css";
import "@/styles/react-slick.css";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inceptia WEB",
  description: "Inteligencia artificial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CssBaseline />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
