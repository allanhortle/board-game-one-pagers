import type {AppProps} from 'next/app';
import {LightTheme} from '../components/Theme';
import {GlobalStyle} from '../components/Affordance';
import {ThemeProvider} from 'styled-components';

export default function App({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider theme={LightTheme}>
            <GlobalStyle />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
