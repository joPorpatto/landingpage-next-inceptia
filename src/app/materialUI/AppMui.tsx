import React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import CreateTheme from "./CreateTheme";

export default function AppMui({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppRouterCacheProvider>
      <CreateTheme>{children}</CreateTheme>
    </AppRouterCacheProvider>
  );
}
