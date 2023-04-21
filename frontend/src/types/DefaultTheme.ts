import { DefaultTheme as StyledDefaultTheme } from 'styled-components';

export interface DefaultTheme extends StyledDefaultTheme {
  colors: {
    background: string;
    primary: string;
    secondary: string;
    textLight: string;
    backgroundCard: string;
    text: string;
    error: string;
  };
}