"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {
  Box,
  Container,
  IconButton,
  Link,
  ThemeProvider,
  Typography,
  createTheme,
  useTheme,
} from "@mui/material";
import React, { createContext, useContext, useMemo, useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { Layout, Main } from "./style";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <Layout maxWidth={false} disableGutters>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Main id="main" role="main">
            {children}
          </Main>
          <Footer />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Layout>
  );
}
