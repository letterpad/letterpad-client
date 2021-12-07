import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" dir="ltr">
        <Head>
          <meta charSet="utf-8" />
          {/* PWA primary color */}
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js"
            async
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Fira+Code:400|Rubik:wght@300|Libre+Baskerville:400,400i,700,700i&display=swap"
          />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-19390409-3"
          ></script>
          <script src="/js/tiny-modal.min.js" async />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
