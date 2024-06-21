import { Link } from "@mui/material";
import React from "react";
import NextLink from "next/link";

const page = () => {
  return (
    <Link href="/" color="primary" component={NextLink}>
      HOME PAGE
    </Link>
  );
};

export default page;
