import styled, {createGlobalStyle} from 'styled-components';
import {
    compose,
    space,
    SpaceProps,
    layout,
    LayoutProps,
    textStyle,
    TextStyleProps,
    typography,
    TypographyProps,
    position,
    PositionProps,
    color as colorSystem,
    ColorProps
} from 'styled-system';

export const styledProps = compose(
    layout,
    position,
    space,
    textStyle,
    typography,
    colorSystem,
    position
);

export interface StyledProps
    extends TypographyProps,
        ColorProps,
        LayoutProps,
        SpaceProps,
        TextStyleProps,
        PositionProps,
        TypographyProps {}

const color = (key: any) => (props: any) => props.theme.colors[key];

export const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    * {
        box-sizing: border-box;
    }
    body {
        background-color: ${(_) => _.theme.colors.bg};
        color: ${(_) => _.theme.colors.fg};
        font-family: ${(_) => _.theme.fonts.copy};
        font-size: 16px;
        line-height: 1.5;
        font-weight: 300;
    }
    strong {font-weight: bold};
    em {font-style: italic};
`;

export const List = styled.ul`
    ${space}
    padding-left: 1.5rem;
    list-style: disc;
`;

export const OrderedList = styled.ol`
    ${space}
    padding-left: 1.5rem;
    list-style: decimal;
`;

export const Label = styled.span`
    color: ${(_) => _.theme.colors.comment};
`;

export const Input = styled.input`
    background-color: ${(p) => p.theme.colors.black};
    color: ${(p) => p.theme.colors.fg};
    border: none;
    font-size: inherit;
    font-family: inherit;
    display: block;
    width: 100%;
`;

export const Quote = styled.blockquote`
    font-style: italic;
    overflow: hidden;
    position: relative;
    padding-left: 1.2em;
    padding-top: 1.2em;
    margin: 1em 0;
    color: ${color('purple')};
    &:before {
        content: '>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>';
        position: absolute;
        left: 0;
        white-space: pre;
        top: -2px;
    }
`;

export const Button = styled.button`
    ${textStyle}
    ${typography}
    ${space}
    ${colorSystem}
    -webkit-appearance: none;
    border: none;
    margin: 0;
    padding: 0;
    overflow: visible;
    color: inherit;
    font: inherit;
    background-color: ${color('yellow')};
    color: ${color('bg')};
    ${(p) => `padding: 0 ${p.theme.space[1]}px;`}
    cursor: pointer;
`;

export const Image = styled('img')({}, layout);
