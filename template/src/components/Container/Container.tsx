import {
  BorderProps,
  borders,
  color,
  ColorProps,
  flexbox,
  FlexProps,
  layout,
  space,
  SpaceProps,
} from 'styled-system';
import styled from '@emotion/native';

import { margins } from '../../styles';

interface ContainerProps {
  /** applies "flex: 1" style */
  fill?: boolean;
  /** applies "width: 100%" style */
  fullWidth?: boolean;
  /** centers content both vertically and horizontally */
  centerContent?: boolean;
  /**
   * applies default horizontal screen margins.
   * decoupled from Screen component to make layout-building more flexible.
   */
  screenMargins?: boolean;
}

type ComponentProps = ContainerProps & BorderProps & ColorProps & FlexProps & SpaceProps;

/**
 * This is our primitive View component with styled-system props applied
 */
export const Container = styled.View<ComponentProps>`
  ${space};
  ${color};
  ${borders};
  ${layout};
  ${flexbox};
  ${props =>
    props.fill &&
    `
      flex: 1;
    `}
  ${props =>
    props.fullWidth &&
    `
      width: 100%;
    `}
  ${props =>
    props.centerContent &&
    `
      justifyContent: center;
      alignItems: center;
    `}
  ${props =>
    props.screenMargins &&
    `
      paddingHorizontal: ${margins.screenMargin};
    `}
`;

Container.defaultProps = {};
