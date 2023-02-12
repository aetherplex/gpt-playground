import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en" className="dark">
            <Head>
                <link
                    rel="stylesheet"
                    href="https://use.typekit.net/ssv8byt.css"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
