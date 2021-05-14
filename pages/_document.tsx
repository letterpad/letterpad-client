import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" dir="ltr">
        <Head>
          <meta charSet="utf-8" />
          {/* PWA primary color */}

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Fira+Code:400|Rubik:wght@300|Libre+Baskerville:400,400i,700,700i&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            async
            src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.0/lazysizes.min.js"
          ></script>
        </body>
      </Html>
    );
  }
}
