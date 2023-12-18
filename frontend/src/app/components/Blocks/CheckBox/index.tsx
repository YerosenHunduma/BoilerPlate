import styled from 'styled-components';
import { theme } from 'styles/theme';
import { CheckboxProps } from './types';
import {
  border,
  borderRadius,
  compose,
  layout,
  space,
  flexbox,
  flex,
} from 'styled-system';

export const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
`;

const CheckboxInput = styled.input<CheckboxProps>`
  appearance: none;
  outline: none;

  cursor: pointer;
  &:checked {
    background-color: ${theme.colors.primary};
    border-color: ${theme.colors.primary};
  }

  &:focus {
    border-color: ${theme.colors.primary};
  }

  &:disabled {
    cursor: not-allowed;
  }

  ${compose(borderRadius, space, layout, border)}
`;

export default CheckboxInput;
