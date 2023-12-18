import {
  BackgroundColorProps,
  BorderProps,
  BorderRadiusProps,
  GridAreaProps,
  GridGapProps,
  GridProps,
  GridTemplateColumnsProps,
  GridTemplateRowsProps,
  LayoutProps,
  SpaceProps,
  GridColumnProps,
  BackgroundProps,
} from 'styled-system';
export interface CardProps
  extends BackgroundColorProps,
    BackgroundProps,
    SpaceProps,
    LayoutProps,
    BorderProps,
    BorderRadiusProps,
    GridProps,
    GridGapProps,
    GridAreaProps,
    GridTemplateColumnsProps,
    GridTemplateRowsProps,
    GridColumnProps {
  gridColumn?: string;
  background?: any;
}
