import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      primary: {
        main: string;
        contrastText: string;
      };
      secondary: {
        main: string;
        contrastText: string;
      };
      error: {
        main: string;
        contrastText: string;
      };
      warning: {
        main: string;
        contrastText: string;
      };
      info: {
        main: string;
        contrastText: string;
      };
      success: {
        main: string;
        contrastText: string;
      };
      background: {
        default: string;
      };
      text: {
        primary: string;
        secondary: string;
        disabled: string;
      };
    };
    typography: {
      fontFamily: string;
    };
    breakpoints: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
  }
}
