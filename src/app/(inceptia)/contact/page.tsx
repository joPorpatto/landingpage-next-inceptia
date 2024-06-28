import { Box, Container, Grid, Link, Paper, Typography } from "@mui/material";
import React from "react";
import NextLink from "next/link";
import Form from "@/components/form/Form";
import Image from "next/image";

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
              px: 4,
              py: 4,
              mt: 4,
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
                    src="/assets/mapa.png"
                    alt="Descripción de la imagen"
                    layout="responsive" // Para que la imagen sea responsiva y mantenga su relación de aspecto
                    width={150}
                    height={150}
                    objectFit="cover" // Para cubrir el área disponible manteniendo la relación de aspecto
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6} sx={{}}>
                <Form />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Paper>
  );
};

export default page;
