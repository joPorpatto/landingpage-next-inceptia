// src/components/CustomButton.tsx
import * as React from "react";
import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/system";
import { purple } from "@mui/material/colors";
import Link from "next/link";

const CustomButton = styled(Button)<ButtonProps>(({ theme }) => ({
  // color: theme.palette.getContrastText(purple[500]),
  // backgroundColor: purple[500],
  borderRadius: "12px", // Esquinas más redondeadas
  textTransform: "none", // Texto en minúsculas
  padding: "8px 16px",
  fontSize: "0.875rem",
  fontWeight: 500,
  lineHeight: 1.75,
  // "&:hover": {
  //   backgroundColor: purple[700],
  // },
  // "&:focus": {
  //   boxShadow: `0 0 0 3px ${
  //     theme.palette.mode === "dark" ? "#3399FF" : "#b6daff"
  //   }`,
  // },
}));

interface CustomButtonProps extends ButtonProps {
  href: string;
  children: React.ReactNode;
}

const MyCustomButton: React.FC<CustomButtonProps> = ({
  href,
  children,
  ...props
}) => {
  return (
    <Link href={href} passHref>
      <CustomButton {...props}>{children}</CustomButton>
    </Link>
  );
};

export default MyCustomButton;
