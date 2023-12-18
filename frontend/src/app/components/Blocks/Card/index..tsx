import styled from 'styled-components';
import { theme } from 'styles/theme';
import { CardProps } from './types';
import {
  compose,
  borderRadius,
  space,
  layout,
  border,
  background,
  gridGap,
  gridRowGap,
  gridColumnGap,
  gridColumn,
} from 'styled-system';

const Card = styled.div<CardProps>`
  outline: none;
  color: ${theme.colors.white};
  ${compose(
    borderRadius,
    space,
    layout,
    border,
    background,
    gridGap,
    gridRowGap,
    gridColumnGap,
    gridColumn,
  )};
`;

export default Card;
