"use client";

import { Fade, Link, Typography } from "@mui/material";
import React, { useState } from "react";
import NextLink from "next/link";

const Page = () => {
  return (
    <Fade in={true} timeout={2000}>
      <div>
        <div style={{ height: "300px" }}></div>
        <Typography
          component="h2"
          sx={{
            position: "relative",
            fontSize: { xs: 40, md: 72 },
            // letterSpacing: 1.5,
            fontWeight: "bold",
            lineHeight: 1.2,
          }}
        >
          Potencia tu negocio con IA para Chat y Voz
        </Typography>
      </div>
    </Fade>
  );
};

export default Page;
