import styled from '@emotion/native';
import {
  color,
  space,
  typography,
  textStyle,
  ColorProps,
  SpaceProps,
  TextStyleProps,
  TypographyProps,
} from 'styled-system';

import { colors } from '../../styles';

interface TextProps {}

type ComponentProps = TextProps & ColorProps & SpaceProps & TextStyleProps & TypographyProps;

/**
 * This is our primitive Text component with styled-system props applied
 */
export const Text = styled.Text<ComponentProps>`
  ${space};
  ${color};
  ${typography};
  ${textStyle};
`;

Text.defaultProps = {
  color: colors.black,
  fontSize: 3,
};
