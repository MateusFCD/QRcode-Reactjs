import { createTheme, Box } from "@mui/material";
import styled from "styled-components";

export const theme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          width: "400px",
          margin: "10% auto",
          padding: "2%",
          borderRadius: "15px",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        },
      },
    },
  },
  palette: {
    background: {
      default: "hsl(212, 45%, 89%)",
    },
    text: {
      primary: "#000000",
      secondary: "hsl(220, 15%, 55%)",
    },
  },
});

export const LayoutIMG = styled.div`
  img {
    width: 350px;
    height: 350px;
    object-fit: cover;
    object-position: center;
    border-radius: 15px;
    margin: auto;
  }
`;

export const LayoutText = styled.div`
  h2 {
    font-size: 1.75rem;
    font-family: "Outfit", sans-serif;
  }
  p {
    color: hsl(218, 44%, 22%);
    font-size: 1.3rem;
    font-family: "Outfit", sans-serif;
    line-height: 25px;
  }
`;
