import { useDarkMode } from 'react-native-dynamic';

enum Palette {
  black = '#000000',
  blackMedium = '#1D1D1D',
  blackLight = '#303030',

  blueLight = '#257FA1',
  blueDark = '#413E4E',

  grayLight = '#C4C4C4',
  grayDark = '#303030',

  white = '#FFFFFF',
  transparent = 'transparent',
}

export const colors = {
  black: Palette.black,
  transparent: Palette.transparent,
  blue: Palette.blueLight,
  backgroundPrimary: Palette.white,
  backgroundSecondary: Palette.grayLight,
  textPrimary: Palette.blackMedium,
  textSecondary: Palette.grayLight,
  textInputBackground: Palette.white,
  white: Palette.white,
};

export type ColorTypes = keyof typeof colors;

export const darkModeColors: {
  [key in keyof typeof colors]: Palette;
} = {
  ...colors,
  blue: Palette.blueDark,
  backgroundPrimary: Palette.blackMedium,
  backgroundSecondary: Palette.blackLight,
  textPrimary: Palette.white,
  textSecondary: Palette.blackMedium,
  textInputBackground: Palette.blackLight,
};

export const useColor = (key: keyof typeof colors): string => {
  const isDarkMode = useDarkMode();

  return isDarkMode ? darkModeColors[key] : colors[key];
};
