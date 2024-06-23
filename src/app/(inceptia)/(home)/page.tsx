import { Paper } from "@mui/material";
import React from "react";
import Hero from "./components/hero";
import Partners from "./components/partners";
import Conversations from "./components/conversations";
import Business from "./components/business";

const Homepage = () => {
  return (
    <>
      <Paper
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Hero />
        <Business />
        <Conversations />
        <Partners />
      </Paper>
    </>
  );
};

export default Homepage;
