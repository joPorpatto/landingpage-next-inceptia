export interface User {
  id: number | string;
  name: string;
  photo?: string;
  professional?: string;
}

export interface Partner extends Omit<User, "professional"> {
  company?: {
    name: string;
    logo: string;
  };
}
export const data: Array<Partner> = [
  {
    id: 1,
    photo: "/assets/partners/assurant.png",
    name: "Jhon Dwirian",
  },
  {
    id: 2,
    photo: "/assets/partners/carrefour.png",
    name: "carrefour",
  },
  {
    id: 3,
    photo: "/assets/partners/bancohipotecario.png",
    name: "bancohipotecario",
  },
  {
    id: 4,
    photo: "/assets/partners/chilenaconsolidada.png",
    name: "chilenaconsolidada",
  },
  {
    id: 5,
    photo: "/assets/partners/galicia.png",
    name: "galicia",
  },
  {
    id: 6,
    photo: "/assets/partners/itau.png",
    name: "itau",
  },
  {
    id: 7,
    photo: "/assets/partners/mercadolibre.png",
    name: "mercadolibre",
  },

  {
    id: 8,
    photo: "/assets/partners/payjoy.png",
    name: "payjoy",
  },
  {
    id: 9,
    photo: "/assets/partners/peugeot.png",
    name: "peugeot",
  },
];
