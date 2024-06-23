import React, { FC } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface Props {
  item: any;
}

const PartnerCardItem: FC<Props> = ({ item }) => {
  return (
    <Box
      sx={{
        px: 1.5,
        py: 5,
      }}
    >
      <Box
        sx={{
          p: 2,
          backgroundColor: "#ffff",
          borderRadius: 4,
          px: 1.5,
          py: 5,
          transition: "0.1s linear 0s",
          "&:hover": {
            boxShadow: "0px 8px 24px 0px rgba(140, 149, 159, 0.2)",
            transform: "scale(1.08)", // Escala un 5% más grande al hacer hover
          },
        }}
      >
        <Box
          sx={{
            lineHeight: 0,
            // overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1",
            borderRadius: 3,
            // height: 100,
            // mb: 2,
            // p: "4",
            p: 3,
            position: "relative", // Añadido para controlar posición relativa
          }}
        >
          <Image
            src={item.photo as string}
            alt="Descripción de la imagen"
            layout="responsive" // Para que la imagen sea responsiva y mantenga su relación de aspecto
            width={150}
            height={150}
            objectFit="cover" // Para cubrir el área disponible manteniendo la relación de aspecto
            className="rounded" // Para aplicar bordes redondeados
          />
        </Box>
      </Box>
    </Box>
  );
};
export default PartnerCardItem;
