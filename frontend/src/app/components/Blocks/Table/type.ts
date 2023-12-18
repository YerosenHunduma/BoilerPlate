import {
  BackgroundColorProps,
  BorderProps,
  BorderRadiusProps,
  LayoutProps,
  SpaceProps,
  ColorProps,
} from 'styled-system';

export interface TableProps
  extends BackgroundColorProps,
    SpaceProps,
    LayoutProps,
    BorderProps,
    BorderRadiusProps {}
export interface PaginationsProps
  extends BackgroundColorProps,
    BorderProps,
    BorderRadiusProps,
    LayoutProps,
    SpaceProps,
    ColorProps {}
