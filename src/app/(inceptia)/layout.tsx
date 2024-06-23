import React from "react";
import AppMui from "../materialUI/AppMui";
import "slick-carousel/slick/slick.css";
import "@/styles/react-slick.css";
import "@/styles/globals.css";
import Navbar from "@/components/ui/navbar/Navbar";
import { Footer } from "@/components/ui/footer/Footer";

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
