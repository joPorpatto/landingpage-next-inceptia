import { Link } from "@mui/material";
import React from "react";
import NextLink from "next/link";
import dynamic from "next/dynamic";
const DynamicHomeOurMentors = dynamic(
  () => import("@/app/(inceptia)/(home)/components/mentors")
);

const page = () => {
  return <DynamicHomeOurMentors />;
};

export default page;
