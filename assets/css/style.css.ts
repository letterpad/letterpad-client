import { css } from "styled-jsx/css";

export const globalStyles = css.global`
  body,
  html {
    overflow-x: hidden;
    word-break: break-word;
  }
  html {
    overflow-y: scroll;
    font-size: 62.5%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    box-sizing: border-box;
    font-family: sans-serif;
  }
  .layout {
    min-height: 100vh;
    background: var(--color-bg);
    color: var(--color-text);
  }

  body {
    color: #3c484e;
    font-family: "Rubik", sans-serif;
    font-size: 1.5rem;
    line-height: 1.6em;
    font-weight: 400;
    font-style: normal;
    letter-spacing: 0;
    text-rendering: optimizeLegibility;
    background: #fff;
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
    line-height: 1.15;
    font-weight: 700;
    text-rendering: optimizeLegibility;
    font-family: "Libre Baskerville", serif;
  }

  h1 {
    margin: 0 0 0.5em;
    font-size: 5rem;
    font-weight: 700;
  }

  h2 {
    margin: 1.5em 0 0.5em;
    font-size: 2rem;
  }

  blockquote,
  dl,
  ol,
  p,
  ul {
    margin: 0 0 1.5em;
  }
  .inner {
    margin: 0 auto;
    max-width: 1040px;
    width: 100%;
  }
  .outer {
    position: relative;
    padding: 0 4vw;
    z-index: 1;
  }

  /* normalize */
  /*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */
  html {
    line-height: 1.15;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  body {
    margin: 0;
  }
  article,
  aside,
  footer,
  header,
  nav,
  section {
    display: block;
  }

  main {
    z-index: 100;
    flex-grow: 1;
    padding: 0 4vw;
    margin-bottom: 40px;
  }
`;
