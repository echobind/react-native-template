import { createTheme } from '@shopify/restyle';
import { buttonVariants } from './buttonVariants';
import { colors, darkModeColors } from './colors';
import { textVariants } from './textVariants';
import { spacing } from './spacing';
import { breakpoints } from './breakpoints';

const theme = {
  borderRadii: {
    none: 0,
    xs: 2,
    sm: 4,
    md: 8,
    lg: 16,
    rounded: 50,
  },
  breakpoints,
  buttonVariants,
  colors,
  shadowRadii: {
    none: 0,
    xs: 2,
    sm: 4,
    md: 8,
    lg: 16,
  },
  spacing,
  textVariants,
  navigation: {
    colors: {
      background: colors.backgroundPrimary,
      border: colors.backgroundSecondary,
      card: colors.backgroundSecondary,
      notification: colors.backgroundSecondary,
      primary: colors.white,
      text: colors.white,
    },
    dark: false,
  },
};

export const lightModeTheme = createTheme(theme);

export const darkModeTheme = createTheme({
  ...theme,
  colors: darkModeColors,
  navigation: {
    colors: {
      background: colors.backgroundPrimary,
      border: colors.backgroundSecondary,
      card: colors.backgroundSecondary,
      notification: colors.backgroundSecondary,
      primary: colors.white,
      text: colors.white,
    },
    dark: true,
  },
});

export * from './buttonVariants';
export * from './colors';
export * from './textVariants';
export * from './spacing';
export * from './breakpoints';

export type Theme = typeof theme;

export default theme;
