import styled from '@emotion/native';
import {
  color,
  borders,
  space,
  layout,
  flexbox,
  BorderProps,
  ColorProps,
  SpaceProps,
  FlexProps,
} from 'styled-system';

interface TouchableProps {
  /** applies "flex: 1" style **/
  fill?: boolean;
  /** applies "width: 100%" style **/
  fullWidth?: boolean;
  /** centers content both vertically and horizontally **/
  centerContent?: boolean;
}

type ComponentProps = TouchableProps & BorderProps & ColorProps & FlexProps & SpaceProps;

/**
 * This is our primitive TouchableOpacity component with styled-system props applied
 */
export const Touchable = styled.TouchableOpacity<ComponentProps>`
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
`;

Touchable.defaultProps = {};
