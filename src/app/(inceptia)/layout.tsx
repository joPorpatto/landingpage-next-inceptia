import { Footer } from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import React from "react";
import AppMui from "../materialUI/AppMui";
import "slick-carousel/slick/slick.css";
import "@/styles/react-slick.css";
import "@/styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppMui>
      <Navbar />
      {children}
      <Footer />
    </AppMui>
  );
}
