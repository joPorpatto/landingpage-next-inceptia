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
} from "@mui/material";
import NextLink from "next/link";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { ColorModeContext } from "@/app/(inceptia)/layout";
import MenuIcon from "@mui/icons-material/Menu";
import { usePathname } from "next/navigation";

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
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        color={theme.palette.mode === "dark" ? "primary" : "transparent"}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            INCEPTIA
          </Typography>
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
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {/* <nav> */}
            <Link
              href="/home"
              component={NextLink}
              sx={{
                p: 1,
                color: "gray.600",
                "&:hover": {
                  transparent: ".1",
                },
                ...("/home" === pathName && {
                  color: "blue",
                }),
              }}
            >
              home
            </Link>
            <Link
              href="/about"
              component={NextLink}
              sx={{
                p: 1,
                color: "gray.600",
                "&:hover": {
                  transparent: ".1",
                },
                ...("/about" === pathName && {
                  color: "blue",
                }),
              }}
            >
              about
            </Link>
            <Link
              href="/contact"
              component={NextLink}
              sx={{
                p: 1,
                color: "gray.600",
                "&:hover": {
                  transparent: ".1",
                },
                ...("/contact" === pathName && {
                  color: "blue",
                }),
              }}
            >
              contact
            </Link>
            {/* </nav> */}
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
          </Drawer>
          {/* <Navbar items={MenuItems} /> */}
        </Toolbar>
        {/* <HamburgerMenu items={MenuItems} open={open} setOpen={setDrawerOpen} sx={{ display: { xs: 'flex', sm: 'none' } }} /> */}
      </AppBar>
    </Box>
  );
};

export default Navbar;
