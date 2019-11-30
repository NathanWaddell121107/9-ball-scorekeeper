import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  background: {
    primary: {
      contrast: "#3c3c3c",
      light: "#ffffff",
      main: "#ffffff"
    },
    secondary: {
      contrast: "#80a7ba",
      light: "#f2f6f8",
      main: "#f2f6f8"
    }
  },
  button: {
    background: "#ffffff",
    borderColor: "#e1e1e1",
    borderRadius: "0.25rem",
    borderStyle: "solid",
    borderWidth: "0.0625rem",
    fontSize: "1rem",
    margin: "0.125rem",
    padding: "0.625rem 1rem"
  },
  drawer: {
    background: {
      contrast: "#ffffff",
      light: "#80a7ba",
      main: "#0c2d3d"
    },
    title: "#225771"
  },
  hyperlink: {
    color: {
      light: "#0084c1",
      main: "#28bafd"
    },
    decoration: "none"
  },
  iconButton: {
    background: "transparent",
    borderColor: "transparent",
    borderRadius: "0.25rem",
    borderStyle: "solid",
    borderWidth: "0",
    fontSize: "0",
    margin: "0",
    padding: "0.5rem"
  },
  input: {
    background: "#ffffff",
    borderColor: "#e1e1e1",
    borderRadius: "0.25rem",
    borderStyle: "solid",
    borderWidth: "0.0625rem",
    fontSize: "1rem",
    margin: "0.125rem",
    padding: "0.625rem"
  },
  palette: {
    danger: {
      contrast: "#ffffff",
      light: "#fff1f1",
      main: "#ff0505"
    },
    primary: {
      contrast: "#ffffff",
      light: "#c7eeff",
      main: "#28bafd"
    },
    primaryDark: {
      contrast: "#ffffff",
      light: "#28bafd",
      main: "#0775ac"
    },
    secondary: {
      contrast: "#ffffff",
      light: "#e1e1e4",
      main: "#a0a0a0"
    },
    success: {
      contrast: "#ffffff",
      light: "#33ffe6",
      main: "#00d5b3"
    },
    text: {
      disabled: "#a0a0a0",
      hint: "#3c3c3c",
      primary: "#3c3c3c",
      secondary: "#a0a0a0"
    }
  },
  separator: {
    color: "#80a7ba",
    style: "solid",
    width: "0.0625rem"
  },
  tabs: {
    fontSize: "1rem",
    fontWeight: 300
  },
  typography: {
    fontFamily: '"Mukta Vaani", sans-serif',
    fontSize: "16px"
  },
  viewerOverlay: {
    background: "rgba(0, 0, 0, 0.6)",
    borderRadius: "4px",
    color: "#ffffff"
  }
};

export default theme;
