"use client";
import { Box, Typography } from "@mui/material";
import { FC } from "react";

interface Exp {
  label: string;
  value: string;
}
interface ExpItemProps {
  item: Exp;
}

export const exps: Array<Exp> = [
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
    value: "100%",
  },
  {
    label: "Otra cosa mas para poner",
    value: "300k",
  },
];

const HeroItem: FC<ExpItemProps> = ({ item }) => {
  const { value, label } = item;
  return (
    <Box sx={{ textAlign: "center", mb: { xs: 1, md: 0 } }}>
      <Typography
        sx={{
          fontSize: { xs: 24, md: 36 },
          fontWeight: "bold",
        }}
      >
        {value}
      </Typography>
      <Typography
        sx={{
          color: "text.secondary",
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};
export default HeroItem;
