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
}

export const themeDark: DefaultTheme = {
  palette: {
    primary: {
      main: '#13A10E',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: "red",
    },
    background: {
      default: '#000',
    },
    text: {
      primary: '#ccc',
      secondary: '#111',
    },
  },
  typography: typography,
  breakpoints,
}

export const themeLight: DefaultTheme = {
  palette: {
    primary: {
      main: '#5E2750',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: "red",
    },
    background: {
      default: '#EEEDEB',
    },
    text: {
      primary: '#111',
      secondary: '#ccc',
    },
  },
  typography: typography,
  breakpoints,
}