import { createTheme } from '@shopify/restyle';
import { colors } from './colors';
import { spacing } from './spacing';
import { textVariants } from './textVariants';

export const theme = createTheme({
  colors,
  spacing,
  textVariants,
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
});

export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors'];
