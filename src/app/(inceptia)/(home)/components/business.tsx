import { Box, CardContent, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { data } from "@/data/process.data";

const Business = () => {
  return (
    <Box
      id="hero"
      sx={{
        position: "relative",
        pt: 1,
        pb: { xs: 8, md: 10 },
        mt: 1,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{
            fontSize: { xs: 32, md: 48 },
            // letterSpacing: 1.5,
            fontWeight: "bold",
            lineHeight: 1.2,
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            marginBottom: 2,
          }}
        >
          Automatización de procesos
        </Typography>

        <Typography
          sx={{
            color: "text.secondary",
            lineHeight: 1.6,
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            mb: 2,
            px: { md: 16 },
          }}
        >
          {
            "Libera a tus agentes de tareas repetitivas y permite que se concentren en interacciones de mayor valor."
          }
        </Typography>
        <Grid container spacing={6} sx={{ pt: 6 }}>
          {data.map(({ title, description, icon }, index) => (
            <Grid key={String(index)} item xs={12} md={6} lg={3}>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    mb: 2,
                    color: "primary.dark",
                    borderRadius: "50%",
                    height: 48,
                    width: 48,
                    "& svg": {
                      fontSize: 36,
                    },
                  }}
                >
                  {icon}
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { xs: 16, md: 24 },
                    fontWeight: "bold",
                    mb: 1,
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  sx={{
                    lineHeight: 1.3,
                    color: "text.secondary",
                  }}
                  variant="subtitle1"
                >
                  {description}
                </Typography>
              </CardContent>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Business;
