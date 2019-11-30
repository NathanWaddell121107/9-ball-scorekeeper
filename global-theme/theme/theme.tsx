import * as React from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import Reset from "../reset";
import defaultTheme from "./default";

export interface Props {
  /**
   * The theme you want to use with the provider.
   *
   * @default DefaultTheme
   */
  theme?: DefaultTheme;
}

export const Theme: React.FC<Props> = ({ theme = defaultTheme, ...props }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Reset />
        {props.children}
      </>
    </ThemeProvider>
  );
};

Theme.displayName = "Theme";

export default Theme;
