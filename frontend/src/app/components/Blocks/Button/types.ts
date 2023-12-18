import {
  BackgroundColorProps,
  BorderProps,
  BorderRadiusProps,
  LayoutProps,
  SpaceProps,
} from 'styled-system';

export type ButtonVariants = 'outline' | 'contained';

export interface ButtonProps
  extends BorderRadiusProps,
    BackgroundColorProps,
    SpaceProps,
    LayoutProps,
    BorderProps {
  variant: ButtonVariants;
}
