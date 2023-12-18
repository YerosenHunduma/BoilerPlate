import styled from 'styled-components';
import {
  compose,
  borderRadius,
  space,
  layout,
  border,
  variant,
} from 'styled-system';
import { theme } from 'styles/theme';
import { ButtonProps } from './types';

const Button = styled.button<ButtonProps>`
  outline: none;
  border: none;
  &:disabled {
    cursor: not-allowed;
  }
  &:hover {
    opacity: 0.8;
  }
  ${compose(
    layout,
    space,
    borderRadius,
    border,
    variant({
      variants: {
        outline: {
          border: `1px solid ${theme.colors.black[0]}`,
          background: 'transparent',
          height: '50px',
          width: ['200px', '400px', '600px'],
        },
        contained: {
          height: '50px',
          width: ['200px', '400px', '600px'],
          backgroundColor: 'grey',
        },
      },
    }),
  )}
`;

export default Button;
