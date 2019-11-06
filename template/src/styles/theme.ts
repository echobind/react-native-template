import { colors } from './colors';
import { fonts as fontFamilies, fontSizes, weights } from './fonts';
import { margins, space, radii, radius } from './margins';

export const shadows = {
  small: `5px 5px 7px ${colors.gray}`,
  large: `10px 10px 10px ${colors.gray}`,
};

export const theme = {
  colors,
  fontFamilies,
  fontSizes,
  margins,
  radii,
  radius,
  shadows,
  space,
  weights,
};

export default theme;
