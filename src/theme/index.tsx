import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          width: "400px",
          margin: "auto",
          padding: "4%",
          borderRadius: "15px",
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
