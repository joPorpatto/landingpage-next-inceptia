import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Box, Button, Grid, Paper } from "@mui/material";

export const Footer = () => {
  return (
    <Paper>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          paddingTop: "1rem",
          paddingBottom: "1rem",
        }}
      >
        <Container maxWidth="lg">
          <Grid container direction="column" alignItems="center">
            <Grid item xs={12}>
              <Typography variant="h5">inceptia</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography color="textSecondary" variant="subtitle1">
                Inceptia Copyright ©2024 Todos los derechos reservados |
                Politica de Privacidad | Terminos y Condiciones
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Paper>
  );
};
