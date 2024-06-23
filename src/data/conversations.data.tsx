import React, { ReactNode } from "react";

import NotesIcon from "@mui/icons-material/Notes";
import CallIcon from "@mui/icons-material/Call";
import ChatIcon from "@mui/icons-material/Chat";

interface Data {
  title: string;
  description: string;
  icon?: ReactNode;
}

export const data: Data[] = [
  {
    title: "Voz",
    description:
      "Interactúa con los deudores de manera efectiva mediante mensajes de voz automatizados.",
    icon: <CallIcon />,
  },
  {
    title: "Texto",
    description:
      "Envía mensajes de texto automatizados para recordatorios de pago y comunicaciones eficientes.",
    icon: <NotesIcon />,
  },
  {
    title: "Chat",
    description:
      "Utiliza chatbots para gestionar consultas de clientes y negociaciones de pagos de manera instantánea.",
    icon: <ChatIcon />,
  },
];
