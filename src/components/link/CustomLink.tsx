// CustomLink.js
import React from "react";
import { styled } from "@mui/system";
import Link from "next/link";

const BaseLinkStyles = ({ theme, isActive }: any) => ({
  textDecoration: "none",
  color: isActive ? theme.palette.primary.dark : theme.palette.text.primary,
  padding: "0 12px",
  "&:hover": {
    color: isActive ? theme.palette.primary.dark : theme.palette.primary.light,
  },
});

const CustomLink = styled(({ isActive, ...props }: any) => <Link {...props} />)(
  ({ theme, isActive }) => ({
    ...BaseLinkStyles({ theme, isActive }),
  })
);

export default CustomLink;
