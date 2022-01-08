import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" dir="ltr" className="">
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
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/prism-themes@1.9.0/themes/prism-vsc-dark-plus.min.css"
          />

          <script src="/js/tiny-modal.min.js" async />
        </Head>
        <body className="dark:bg-gray-800 dark:text-slate-300">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
