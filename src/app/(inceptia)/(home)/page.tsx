import { Paper } from "@mui/material";
import React from "react";
import Hero from "./components/hero";
import HomeOurMentors from "./components/mentors";

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
        <HomeOurMentors />
      </Paper>
    </>
  );
};

export default Homepage;
