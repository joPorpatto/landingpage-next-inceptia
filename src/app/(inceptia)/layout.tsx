"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {
  Box,
  Container,
  CssBaseline,
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
import { amber, deepOrange, grey } from "@mui/material/colors";

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
        typography: {
          fontFamily: '"Inter", sans-serif', // Add Inter font here
        },
        palette: {
          mode,
          ...(mode === "light"
            ? {
                // palette values for light mode
                primary: {
                  main: "#1976d2",
                },
                secondary: {
                  main: "#f50057",
                },
              }
            : {
                // palette values for dark mode
                primary: {
                  main: "#1976d2",
                },
                secondary: {
                  main: "#f50057",
                },
              }),
        },
      }),
    [mode]
  );

  return (
    <Layout maxWidth={false} disableGutters>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
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
