import {
    BorderProps,
    ColorProps,
    FlexboxProps,
    LayoutProps,
    PositionProps,
    SpaceProps,
    TextStyleProps,
    TypographyProps,
    border,
    color,
    compose,
    flexbox,
    layout,
    position,
    space,
    textStyle,
    typography
} from 'styled-system';

export default compose(border, color, flexbox, layout, position, space, textStyle, typography);

export interface StyledProps
    extends BorderProps,
        ColorProps,
        FlexboxProps,
        LayoutProps,
        PositionProps,
        SpaceProps,
        TextStyleProps,
        TypographyProps {}
