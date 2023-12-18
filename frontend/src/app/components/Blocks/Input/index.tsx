import styled from 'styled-components';
import { theme } from 'styles/theme';
import { InputProps } from './types';
import {
  compose,
  borderRadius,
  space,
  layout,
  border,
  background,
  fontSize,
} from 'styled-system';
const Input = styled.input<InputProps>`
  outline: none;
  &:focus {
    border-color: ${theme.colors.primary};
  }

  &:disabled {
    cursor: not-allowed;
  }
  ${compose(borderRadius, space, layout, border, background, fontSize)}
`;

export default Input;
