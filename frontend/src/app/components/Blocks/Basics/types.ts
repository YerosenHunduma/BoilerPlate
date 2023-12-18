import {
  FlexboxProps,
  SpaceProps,
  ColorProps,
  LayoutProps,
  GridProps,
  BackgroundProps,
  BorderProps,
  PositionProps,
  ShadowProps,
  GridGapProps,
  GridAreaProps,
  GridTemplateColumnsProps,
  GridTemplateRowsProps,
  gridRowGap,
} from 'styled-system';

// Box Props
export interface BoxProps
  extends SpaceProps,
    ColorProps,
    FlexboxProps,
    LayoutProps,
    GridProps,
    BackgroundProps,
    BorderProps,
    PositionProps,
    ShadowProps {}

//grid props
export interface GridPropss
  extends GridProps,
    GridGapProps,
    GridAreaProps,
    GridTemplateColumnsProps,
    GridTemplateRowsProps {
  gridColumn?: string;
}

// Flex Box Props
export interface FlexProps extends FlexboxProps {}

type GlassBackgroundVariants = 'light' | 'dark';

export interface GlassBackgroundProps extends BoxProps, FlexProps {
  variant?: GlassBackgroundVariants;

  blurIndex?: number;
}

export interface GradientBackgroundProps extends BoxProps, FlexProps {}
