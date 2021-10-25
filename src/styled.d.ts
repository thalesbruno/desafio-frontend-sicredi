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
        auxiliary: string;
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
  }
}
