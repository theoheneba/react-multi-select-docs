import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
    text: {
      primary: "#333333",
      secondary: "#666666",
    },
  },
  typography: {
    fontFamily: 'Roboto, "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      marginBottom: "1rem",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
      marginTop: "2rem",
      marginBottom: "1rem",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    code: {
      fontFamily: '"Fira Code", "Roboto Mono", monospace',
      fontSize: "0.9em",
      backgroundColor: "#f0f0f0",
      padding: "0.2em 0.4em",
      borderRadius: "3px",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
})

export default theme

