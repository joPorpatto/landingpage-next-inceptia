import * as React from "react";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import { styled } from "@mui/system";

export default function MaxHeightTextarea() {
  const blue = {
    100: "#DAECFF",
    200: "#b6daff",
    400: "#3399FF",
    500: "#007FFF",
    600: "#0072E5",
    900: "#003A75",
  };

  const grey = {
    50: "#F3F6F9",
    100: "#E5EAF2",
    200: "#DAE2ED",
    300: "#C7D0DD",
    400: "#B0B8C4",
    500: "#9DA8B7",
    600: "#6B7A90",
    700: "#434D5B",
    800: "#303740",
    900: "#1C2025",
  };

  const Textarea = styled(BaseTextareaAutosize)(
    ({ theme }) => `
    box-sizing: border-box;
    max-width: 100%;
    max-height:100px;
    font-family: 'IBM Plex Sans', sans-serif;
    width:100%;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 3px;
    color: ${theme.palette.mode === "dark" ? "white" : grey[900]};;
    background: ${theme.palette.mode === "dark" ? "transparent" : "#fff"};
    border: 1px solid ${
      theme.palette.mode === "dark" ? "#ffffff3b" : grey[400]
    };
    
&::placeholder {
      color: ${theme.palette.mode === "dark" ? "#ffffffba" : grey[700]};
      font-size:''
      opacity: 1; // Firefox workaround
    }
    

   &:hover {
      border: 1px solid  ${theme.palette.mode === "dark" ? "white" : grey[900]};
    }

    &:focus {
      border-color: ${blue[400]};
      // border:2px solid;
    }

    &:focus-visible {
      outline: 1;
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `
  );

  return (
    <Textarea
      aria-label="minimum height"
      minRows={3}
      maxRows={3}
      placeholder="Mensaje*"
    />
  );
}
