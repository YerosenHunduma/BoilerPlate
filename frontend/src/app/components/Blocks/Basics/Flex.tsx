import styled from 'styled-components';
import { Box } from './Box';
import { flexbox, compose, flex } from 'styled-system';
import { FlexProps } from './types';

export const Flex = styled(Box)<FlexProps>`
  display: flex;
  ${compose(flexbox, flex)};
`;
