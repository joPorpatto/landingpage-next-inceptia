"use client";

import { Box, Button, Container, Grid, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
const MyCustomButton = dynamic(() => import("@/components/button/Button"), {
  ssr: false,
});

const Hero = () => {
  return (
    <Box
      id="hero"
      sx={{
        position: "relative",
        pt: 4,
        pb: { xs: 8, md: 10 },
      }}
    >
      <Container maxWidth="lg">
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
                  Potencia tu negocio con IA para Chat y Voz
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
                <MyCustomButton href="/contact" variant="contained">
                  {"Probar DEMO"}
                </MyCustomButton>
                {/* <MyCustomButton href="/contact" variant="outlined">
                  Solicitar DEMO
                </MyCustomButton> */}
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
        <Box sx={{ my: 4, py: 3, px: 7, borderRadius: 4 }}>
          <Grid container spacing={2}>
            {exps.map((item) => (
              <Grid key={item.value} item xs={12} md={4}>
                <ExpItem item={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;

interface Exp {
  label: string;
  value: string;
}
interface ExpItemProps {
  item: Exp;
}

const exps: Array<Exp> = [
  {
    label: "Gestionando eficiencias de hasta ",
    value: "65%",
  },
  {
    label:
      "Escenarios de llamadas de voz y conversaciones naturales, actualmenten en producción",
    value: "30+",
  },
  {
    label: "Otra cosa mas para poner",
    value: "10+",
  },
];

const ExpItem: FC<ExpItemProps> = ({ item }: any) => {
  const { value, label } = item;
  return (
    <Box sx={{ textAlign: "center", mb: { xs: 1, md: 0 } }}>
      <Typography
        sx={{
          // color: "secondary.main",
          // mb: { xs: 1, md: 2 },
          fontSize: { xs: 34, md: 44 },
          fontWeight: "bold",
        }}
      >
        {value}
      </Typography>
      <Typography color="text.secondary" variant="h5">
        {label}
      </Typography>
    </Box>
  );
};
