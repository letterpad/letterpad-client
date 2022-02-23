import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html
        lang="en"
        dir="ltr"
        style={{ colorScheme: "dark" }}
        className="dark"
      >
        <Head>
          <meta charSet="utf-8" />
          {/* PWA primary color */}
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js"
            async
          />
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.27.0/prism.min.js"
            async
          />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-19390409-3"
          ></script>

          <script src="/js/tiny-modal.min.js" async />
        </Head>
        <body className="dark:bg-gray-900 dark:text-slate-300">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
