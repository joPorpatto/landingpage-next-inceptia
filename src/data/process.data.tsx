import React, { ReactNode } from "react";
import ChatIcon from "@mui/icons-material/Chat";
import DevicesIcon from "@mui/icons-material/Devices";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CallSplitIcon from "@mui/icons-material/CallSplit";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import SpeakerIcon from "@mui/icons-material/Speaker";

interface Data {
  title: string;
  description: string;
  icon?: ReactNode;
}

export const data = [
  {
    title: "Conversaciones Naturales",
    description:
      "Mantén un diálogo fluido y natural con nuestros asistentes conversacionales.",
    icon: <ChatIcon />,
  },
  {
    title: "Gestión Omnicanal",
    description:
      "Administra todos tus canales de comunicación desde una sola plataforma.",
    icon: <DevicesIcon />,
  },
  {
    title: "Disponibilidad 24/7",
    description:
      "Ofrece atención continua sin interrupciones, todos los días del año.",
    icon: <AccessTimeIcon />,
  },
  {
    title: "Manejo de Inbound y Outbound",
    description:
      "Gestiona tanto las consultas entrantes como las salientes de manera efectiva.",
    icon: <CallSplitIcon />,
  },
  {
    title: "Escalación Inteligente",
    description:
      "Deriva automáticamente las consultas más complejas a agentes humanos.",
    icon: <ContactSupportIcon />,
  },
  {
    title: "Implementación Rápida",
    description: "Pon en marcha la solución en pocos días.",
    icon: <FlashOnIcon />,
  },
  {
    title: "Plataforma Unificada",
    description:
      "Centraliza todas tus herramientas y datos en una única plataforma.",
    icon: <DevicesIcon />,
  },
  {
    title: "Voces Personalizadas",
    description: "Elige entre distintas voces para adaptarse mejor a tu marca.",
    icon: <SpeakerIcon />,
  },
];
