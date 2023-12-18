import {
  BorderProps,
  BorderRadiusProps,
  LayoutProps,
  SpaceProps,
  BackgroundProps,
  FontSizeProps,
  ResponsiveValue,
  TLengthStyledSystem,
  Width,
  Theme,
} from 'styled-system';

export interface InputProps
  extends SpaceProps,
    LayoutProps,
    BorderProps,
    BorderRadiusProps,
    BackgroundProps,
    FontSizeProps {
  width: ((string | number) &
        ResponsiveValue<
          Width<TLengthStyledSystem>,
          Required<Theme<TLengthStyledSystem>>
        >)
    | undefined;
}
