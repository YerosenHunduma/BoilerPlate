import styled from 'styled-components';
import {
  space,
  color,
  layout,
  grid,
  background,
  border,
  position,
  shadow,
  compose,
  gridGap,
  gridRowGap,
  gridColumnGap,
  gridColumn,
} from 'styled-system';
import { Box } from './Box';
import { GridPropss } from './types';

export const Grid = styled(Box)<GridPropss>`
  display: grid;
  ${compose(
    space,
    color,
    layout,
    grid,
    background,
    border,
    position,
    shadow,
    compose,
    gridGap,
    gridRowGap,
    gridColumnGap,
    gridColumn,
  )};
`;
