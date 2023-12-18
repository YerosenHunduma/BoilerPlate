import styled from 'styled-components';
import { theme } from 'styles/theme';
import { SelectorProps } from './types';
import {
  compose,
  borderRadius,
  space,
  layout,
  border,
  background,
  fontSize,
} from 'styled-system';

const Selector = styled.select<SelectorProps>`
  outline: none;
  padding: ${theme.space[2]};
  border: ${theme.borders[1]} ${theme.colors.black};
  border-radius: ${theme.radii[1]};
  background-color: ${theme.colors.secondary};
  color: ${theme.colors.black};
  transition: border-color 0.3s;
  font-size: large;
  &:focus {
    border-color: ${theme.colors.primary};
  }
  width: ${theme.space[47]};

  &:disabled {
    cursor: not-allowed;
  }

  ${compose(borderRadius, space, layout, border, background, fontSize)}
`;

export default Selector;
