import { css, FlattenSimpleInterpolation } from "styled-components";
import { breakpoints } from "../style/breakpoints";

interface CSSByBreakpoint {
  [key: string]: FlattenSimpleInterpolation;
}
// interface CSSByBreakpoint {
//   xs?: ThemedCssFunction<DefaultTheme>;
//   sm?: ThemedCssFunction<DefaultTheme>;
//   md?: ThemedCssFunction<DefaultTheme>;
//   lg?: ThemedCssFunction<DefaultTheme>;
//   xl?: ThemedCssFunction<DefaultTheme>;
// }

export default function cssByMediaScreen(cssByBreakpoints: CSSByBreakpoint) {
  const breakpointKeys = Object.keys(cssByBreakpoints);

  return breakpointKeys.map(
    (breakpointKey) => css`
      @media screen and (min-width: ${breakpoints[breakpointKey]}px) {
        ${cssByBreakpoints[breakpointKey]}
      }
    `
  );
}
