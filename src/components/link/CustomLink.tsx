// CustomLink.js
import React from "react";
import { styled } from "@mui/system";
import Link from "next/link";

const BaseLinkStyles = {
  textDecoration: "none",
  color: "inherit",
  padding: "0 12px",
  "&:hover": {
    color: "#0070f3",
  },
  "&.active": {
    color: "#005cbf",
  },
};

const CustomLink = styled(({ isActive, ...props }: any) => <Link {...props} />)(
  ({ theme, isActive }) => ({
    ...BaseLinkStyles,
    color: isActive ? "#005cbf" : theme.palette.secondary.main,
  })
);

export default CustomLink;
