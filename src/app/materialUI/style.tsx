import { styled } from "@mui/material/styles";
import MuiContainer from "@mui/material/Container";

export const Layout = styled(MuiContainer)`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.palette.background.default};
`;

export const Main = styled("main")`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
