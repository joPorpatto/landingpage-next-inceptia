"use client";
import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Link as MuiLink,
  Link,
  useTheme,
  Box,
  IconButton,
  CssBaseline,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
  Icon,
} from "@mui/material";
import NextLink from "next/link";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import { usePathname } from "next/navigation";
import AbcIcon from "@mui/icons-material/Abc";
import ApartmentIcon from "@mui/icons-material/Apartment";
import CustomLink from "../../link/CustomLink";
import Image from "next/image";
import { ColorModeContext } from "@/app/materialUI/CreateTheme";
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}
const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

const Navbar: React.FC = (props: Props) => {
  const { window } = props;
  const theme = useTheme();
  const pathName = usePathname();

  const colorMode = useContext(ColorModeContext);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  console.log(pathName);
  return (
    <Box style={{ zIndex: "100" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        // color={theme.palette.mode === "dark" ? "primary" : "transparent"}
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: `${
            theme.palette.mode === "dark" ? "black" : "white"
          }`,
        }}
      >
        <Box sx={{ maxWidth: "1236px", width: "100%" }}>
          <Toolbar
            variant="regular"
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <Image
              src="/assets/logo.png"
              width={100}
              height={30}
              alt="Picture of the author"
            />

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <IconButton
                sx={{ ml: 1 }}
                onClick={colorMode.toggleColorMode}
                // color="inherit"
              >
                {theme.palette.mode === "dark" ? (
                  <DarkModeIcon />
                ) : (
                  <LightModeIcon />
                )}
              </IconButton>

              <CustomLink href="/" isActive={"/" === pathName}>
                Home
              </CustomLink>
              <CustomLink href="/about" isActive={"/about" === pathName}>
                About
              </CustomLink>
              <CustomLink href="/contact" isActive={"/contact" === pathName}>
                Contact
              </CustomLink>
            </Box>
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
              <IconButton
                sx={{ ml: 1 }}
                onClick={colorMode.toggleColorMode}
                // color="inherit"
              >
                {theme.palette.mode === "dark" ? (
                  <DarkModeIcon />
                ) : (
                  <LightModeIcon />
                )}
              </IconButton>
            </Drawer>
          </Toolbar>
        </Box>
      </AppBar>
    </Box>
  );
};

export default Navbar;
