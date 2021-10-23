import { DefaultTheme } from "styled-components";

const breakpoints = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1200,
};

const typography = {
  fontFamily: "'Rubik', sans-serif",
};

export const themeDark: DefaultTheme = {
  palette: {
    primary: {
      main: "#13A10E",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: "red",
    },
    background: {
      default: "#000",
    },
    text: {
      primary: "#ccc",
      secondary: "#111",
    },
  },
  typography: typography,
  breakpoints,
};

export const themeLight: DefaultTheme = {
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#9c27b0",
    },
    error: {
      main: "#d32f2f",
    },
    background: {
      default: "#eee",
    },
    text: {
      primary: "#111",
      secondary: "#777",
    },
  },
  typography: typography,
  breakpoints,
};
