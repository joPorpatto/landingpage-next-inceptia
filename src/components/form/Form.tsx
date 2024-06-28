"use client";

import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import MaxHeightTextarea from "./textarea";
import { Textarea } from "@mui/joy";

const Form = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
    <Box
      sx={{
        // backgroundColor: "#ffff",
        borderRadius: 4,
        px: 3,
        py: 3,
        height: { sx: 200, md: 550 },
        transition: "0.1s linear 0s",
        boxShadow: "0px 2px 24px 2px rgba(140, 149, 159, 0.4)",
        // transform: "scale(1.08)", // Escala un 5% más grande al hacer hover
      }}
    >
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 0 }}>
        <Typography
          sx={{
            fontSize: { xs: 24, md: 32 },
            // letterSpacing: 1.5,
            fontWeight: "bold",
            lineHeight: 1.2,
            display: "flex",
            justifyContent: "center",
            // textAlign: "center",
            marginBottom: 2, // Aquí defines el espacio entre el título y el slider
          }}
        >
          Contactanos
        </Typography>

        <Typography
          sx={{
            color: "text.secondary",
            lineHeight: 1.6,
            display: "flex",
            justifyContent: "center",
            // textAlign: "center",
            mb: 2,
            // px: { md: 8 }, // Aplica padding solo en pantallas medianas y más grandes
            // width: "80%",
          }}
        >
          {"¿Cómo podemos ayudarte?"}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              autoComplete="given-name"
              name="name"
              required
              fullWidth
              id="name"
              label="Name"
              autoFocus
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Phone"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            {/* <Textarea minRows={2} size="lg" /> */}
            <Box>
              <MaxHeightTextarea />
            </Box>
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2, width: "100%" }}
        >
          Enviar
        </Button>
        {/* <Grid container justifyContent="flex-end">
          <Grid item></Grid>
        </Grid> */}
      </Box>
    </Box>
  );
};

export default Form;
