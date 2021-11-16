import css from "styled-jsx/css";

export const globalStyles = css.global`
  body,
  html {
    overflow-x: hidden;
    word-break: break-word;
    margin: 0;
  }
  html {
    overflow-y: scroll;
    font-size: 62.5%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    box-sizing: border-box;
    font-family: sans-serif;
  }

  body {
    font-family: var(--font-sans-serif);
    font-size: var(--text-lg);
    line-height: var(--text-lg);
    font-weight: 400;
    font-style: normal;
    letter-spacing: 0;
    text-rendering: optimizeLegibility;
    background: var(--color-bg);
    color: var(--color-text);
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
    line-height: 1.6;
    font-weight: 700;
    text-rendering: optimizeLegibility;
    font-family: var(--font-serif);
  }

  h1 {
    margin-bottom: var(--space-lg);
    font-size: var(--text-xxl);
    font-weight: 700;
  }

  h2 {
    margin-bottom: var(--space-md);
    font-size: var(--text-xl);
  }

  h2 {
    margin-bottom: var(--space-sm);
    font-size: var(--text-lg);
  }

  blockquote,
  dl,
  ol,
  p,
  ul {
    margin-bottom: var(--space-sm);
    margin-left: 0;
    margin-right: 0;
  }

  article,
  aside,
  footer,
  header,
  nav,
  section {
    display: block;
  }
`;
