import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import React, { ReactNode } from "react";
import Image from "next/image";
import { data } from "@/data/conversations.data";

const Conversations = () => {
  const theme = useTheme();
  return (
    <Box
      id="hero"
      sx={{
        position: "relative",
        pt: 4,
        pb: { xs: 8, md: 10 },
        mt: 1,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            borderRadius: 4,
            backgroundColor:
              theme.palette.mode === "dark"
                ? theme.palette.grey[900]
                : theme.palette.grey[100],
            px: 4,
            py: 4,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} sx={{ pr: { md: 2 } }}>
              <Box
                sx={{
                  borderRadius: 4, // Fully rounded corners
                  overflow: "hidden", // Ensures the content respects the border radius
                  // width: 150,
                  height: { sx: 200, md: 550 },
                }}
              >
                <Image
                  src="/assets/imagePHONE.jpg"
                  alt="Descripción de la imagen"
                  layout="responsive" // Para que la imagen sea responsiva y mantenga su relación de aspecto
                  width={150}
                  height={150}
                  objectFit="cover" // Para cubrir el área disponible manteniendo la relación de aspecto
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={6} sx={{}}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  // backgroundColor: "red",
                  height: { md: 550 },
                }}
              >
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
                  Eleva la Experiencia
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
                  {
                    "Descubre cómo nuestros asistentes conversacionales pueden transformar tu forma de interactuar con clientes y usuarios."
                  }
                </Typography>

                {data.map(({ title, description, icon }, index) => (
                  <Box
                    key={index}
                    sx={{
                      py: 2,
                      height: "100%",
                      borderRadius: 4,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        mr: 3,
                        backgroundColor: "primary.main",
                        borderRadius: "50%",
                        height: 56,
                        width: 56,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "primary.contrastText",
                        "& svg": {
                          fontSize: 32,
                        },
                      }}
                    >
                      {icon}
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flex: 1,
                        flexDirection: "column",
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          fontSize: { xs: 16, md: 24 },
                          mb: 1,
                          fontWeight: "bold",

                          // color: "secondary.main",
                        }}
                      >
                        {title}
                      </Typography>
                      <Typography
                        sx={{ lineHeight: 1.3, color: "text.secondary" }}
                        variant="subtitle1"
                      >
                        {description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Conversations;
