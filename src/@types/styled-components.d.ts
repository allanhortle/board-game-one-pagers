import 'styled-components';
import {CSSObject} from 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        //breakpoints: {sm: string; md: string; lg: string; xl: string; xxl: string};
        //borders: {
        //outline: string;
        //};
        fonts: {
            copy: string;
        };
        //fontSizes: Array<number>;
        //fontWeights: {
        //regular: number;
        //bold: number;
        //heavy: number;
        //};
        //lineHeights: number[];
        space: number[];
        textStyles: {
            heading1: any;
            heading2: any;
            heading3: any;
            em: any;
            strong: any;
        };
        colors: {
            bg: string;
            blue: string;
            purple: string;
            comment: string;
            fg: string;
            black: string;
        };
    }
}
