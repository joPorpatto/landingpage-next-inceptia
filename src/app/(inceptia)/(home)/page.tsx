import { Box, Link, Paper, Typography } from "@mui/material";
import React from "react";
import NextLink from "next/link";
import Form from "@/components/form/Form";
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
        {/* <Box sx={{ maxWidth: "1200px", width: "100%", marginTop: "100px" }}> */}
        {/* <Box
            sx={
              {
                // width: "100%",
                // display: "flex",
                // flexDirection: "column",
                // alignItems: "center",
              }
            }
          > */}
        {/* </Box> */}
        {/* </Box> */}
        <Hero />
        <HomeOurMentors />
      </Paper>
    </>
  );
};

export default Homepage;
