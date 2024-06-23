"use client";

import React from "react";
import { Box, Container, Fade, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { MyCustomButton } from "@/components/ui/button";
import HeroItem, { exps } from "./heroItem";

const Hero = () => {
  return (
    <Box
      id="hero"
      sx={{
        position: "relative",
        pt: 4,
        pb: { xs: 8, md: 10 },
        mt: 12,
      }}
    >
      <Container maxWidth="lg">
        <Fade in={true} timeout={2000}>
          <Grid
            container
            spacing={0}
            sx={{ flexDirection: { xs: "column", md: "unset" } }}
          >
            <Grid item xs={12} md={7}>
              <Box
                sx={{
                  textAlign: { xs: "center", md: "left" },
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ mb: 3 }}>
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
                    Potencia tu negocio con{" "}
                    <Box component="span" sx={{ color: "primary.main" }}>
                      IA
                    </Box>{" "}
                    para Chat y Voz
                  </Typography>
                </Box>
                <Box sx={{ mb: 4, width: { xs: "100%", md: "70%" } }}>
                  <Typography sx={{ color: "text.secondary", lineHeight: 1.6 }}>
                    {
                      "Descubre cómo nuestra plataforma integrada de Chatbots y Asistentes de Voz basados en Inteligencia Artificial puede transformar la manera en que interactúas con tus clientes y optimizar la eficiencia de tu equipo."
                    }
                  </Typography>
                </Box>

                <Box sx={{ "& button": { mr: 2 } }}>
                  <MyCustomButton href="/" variant="outlined">
                    Solicitar DEMO
                  </MyCustomButton>
                  <MyCustomButton href="/contact" variant="contained">
                    {"Probar DEMO"}
                  </MyCustomButton>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={5} sx={{ position: "relative" }}>
              <Box sx={{ lineHeight: 0 }}>
                <Image
                  src="/assets/hero.png"
                  width={500}
                  height={500}
                  alt="Hero img"
                />
              </Box>
            </Grid>
          </Grid>
        </Fade>
        <Box sx={{ my: 4, py: 3, px: 7, borderRadius: 4 }}>
          <Grid container spacing={2}>
            {exps.map((item) => (
              <Grid key={item.value} item xs={12} md={3}>
                <HeroItem item={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
