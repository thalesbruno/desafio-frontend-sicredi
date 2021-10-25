import { DefaultTheme } from "styled-components";

const typography = {
  fontFamily: "'Rubik', sans-serif",
};

export const themeDark: DefaultTheme = {
  palette: {
    primary: {
      main: "#90caf9",
      contrastText: "rgba(0,0,0,0.87)",
    },
    secondary: {
      main: "#cd93d8",
      contrastText: "rgba(0,0,0,0.87)",
    },
    error: {
      main: "#f44336",
      contrastText: "#fff",
    },
    warning: {
      main: "#ffa726",
      contrastText: "rgba(0,0,0,0.87)",
    },
    info: {
      main: "#29b6f6",
      contrastText: "rgba(0,0,0,0.87)",
    },
    success: {
      main: "#66bb6a",
      contrastText: "rgba(0,0,0,0.87)",
    },
    background: {
      default: "#212121",
      auxiliary: "#424242",
    },
    text: {
      primary: "#aaa",
      secondary: "#111",
      disabled: "rgba(255,255,255,0.5)",
    },
  },
  typography: typography,
};

export const themeLight: DefaultTheme = {
  palette: {
    primary: {
      main: "#1976d2",
      contrastText: "#fff",
    },
    secondary: {
      main: "#9c27b0",
      contrastText: "#fff",
    },
    error: {
      main: "#d32f2f",
      contrastText: "#fff",
    },
    warning: {
      main: "#ed6c02",
      contrastText: "#fff",
    },
    info: {
      main: "#0288d1",
      contrastText: "#fff",
    },
    success: {
      main: "#2e7d32",
      contrastText: "#fff",
    },
    background: {
      default: "#f5f5f5",
      auxiliary: "#fff",
    },
    text: {
      primary: "#111",
      secondary: "#777",
      disabled: "rgba(0,0,0,0.38)",
    },
  },
  typography: typography,
};
