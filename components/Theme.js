function makeTheme(colors) {
    return {
        space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
        colors,
        fonts: {
            copy: 'Roboto Mono, Menlo, sans-serif'
        },
        textStyles: {
            heading1: {
                fontSize: '3rem',
                fontWeight: 500
            },
            heading2: {
                fontSize: '2rem',
                fontWeight: '500'
            },
            heading3: {
                fontSize: '1.5rem',
                fontWeight: '500'
            },
            em: {
                fontStyle: 'italic'
            },
            strong: {
                fontWeight: 'bold'
            }
        }
    };
}

export const DarkTheme = makeTheme({
    bg: 'black',
    fg: '#fafafa',
    comment: '#6D6D6D',
    black: '#0c0c0c',
    blue: '#6699cc',
    green: '#99c794',
    yellow: '#fac863',
    white: '#fac863',
    red: '#ec5f67',
    purple: '#c594c5',
    lineHighlight: '#2e4e3a'
});

export const LightTheme = makeTheme({
    fg: '#4f424c',
    bg: '#fff',
    comment: '#a39e9b',
    black: '#ececec',
    blue: '#155bf9',
    green: '#48b685',
    yellow: '#155bf9',
    white: '#e7e9db',
    red: '#155bf9',
    purple: '#155bf9',
    lineHighlight: 'rgb(188, 217, 219)'
});
