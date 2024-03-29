import Document, {Html, Head, Main, NextScript} from 'next/document';

export default class MyDocument extends Document {
    render() {
        const url = 'https://boardgameonepagers.com/';
        const img = `${url}bgop-og.png`;
        const title = 'Board Game One Pagers';
        const description = 'Board game rules, but just enough to remember how to play.';
        return (
            <Html>
                <Head>
                    <meta name="title" content={title} />
                    <meta name="description" content={description} />

                    <meta property="og:type" content="website" />
                    <meta property="og:url" content={url} />
                    <meta property="og:title" content={title} />
                    <meta property="og:description" content={description} />
                    <meta property="og:image" content={img} />

                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:url" content={url} />
                    <meta property="twitter:title" content={title} />
                    <meta property="twitter:description" content={description} />
                    <meta property="twitter:image" content={img} />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin="anonymous"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500;800&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body className="font-light text-gray-700">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
