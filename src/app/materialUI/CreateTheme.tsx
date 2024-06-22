"use client";

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React, { useMemo, useState } from "react";
import { Layout, Main } from "./style";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export default function CreateTheme({
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
          <Main id="main" role="main">
            {children}
          </Main>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Layout>
  );
}
