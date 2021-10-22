import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      primary: {
        main: string;
      }
      secondary: {
        main: string;
      }
      error: {
        main: string;
      }
      background: {
        default: string;
      }
      text: {
        primary: string;
        secondary: string;
      }
    };
    typography: {
      fontFamily: string;
    }
    breakpoints: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    }
  }
}