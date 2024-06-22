import { Box, Link, Paper } from "@mui/material";
import React from "react";
import NextLink from "next/link";
import Form from "@/components/form/Form";

const page = () => {
  return (
    <Paper
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        p: "0 24",
      }}
    >
      <Box sx={{ maxWidth: "1200px", width: "100%", marginTop: "100px" }}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Form />
        </Box>
      </Box>
    </Paper>
  );
};

export default page;
