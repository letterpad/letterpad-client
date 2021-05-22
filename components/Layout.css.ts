import css from "styled-jsx/css";

export const themeVars = css.global`
  :root {
    --color-primary: #2188ff;
    --color-text: #24292e;
    --color-text-dull: #768390;
    --color-border: #e0e0e0;
    --color-bg: #fefefe;
    --color-bg-2: #f0f0f0;
    --color-post-bg: #f0f0f0;
    --color-pre-bg: #e1e1e1;
    --color-pre-fg: #cdd9e5;
    --font-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    --font-serif: "Georgia", serif;
    --font-mono: monospace;
    --font-light: 100;
    --font-normal: 400;
    --font-bold: 700;
    --font-heavy: 800;
    --xlarge: 1680px;
    --large: 1280px;
    --medium: 980px;
    --small: 740px;
    --xsmall: 480px;
    --height: 4rem;
    --margin: 2rem;
    --radius: 0.5rem;
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --color-primary: #539bf5;
      --color-text: #adbac7;
      --color-text-dull: #aeaeae;
      --color-border: #444c56;
      --color-bg: #1e2228;
      --color-bg-2: rgba(205, 217, 229, 0.15);
      --color-post-bg: rgba(9, 11, 13, 0.8);
      --color-pre-bg: #2d333b;
      --color-pre-fg: #cdd9e5;
    }
  }
`;

export const layoutStyles = () => {
  return css.global`
    .theme-casper {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    main {
      z-index: 100;
      flex-grow: 1;
      padding: 0 4vw;
      margin-bottom: 40px;
    }
  `;
};

export const footerStyles = css.global`
  .site-footer {
    position: fixed;
    padding-top: 20px;
    color: var(--color-text-dull);
    background: #000;
    padding: 20px !important;
    bottom: 0px;
    width: 100vw;
    z-index: 9;

    .site-footer-content {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      font-size: 1.3rem;
      @media (max-width: 650px) {
        flex-direction: column;
      }
      a {
        color: hsla(0, 0%, 100%, 0.7);
      }
      .copyright {
        line-height: 1.3em;
        width: 100%;
        text-align: center;
        span {
          font-size: 0.8em;
          color: var(--color-text-dull);
        }
      }
      .subscribe {
        @media (max-width: 650px) {
          margin: 8px 0px;
        }
        input {
          color: #eee;
          border: 1px solid #555;
          padding: 4px;
          margin-right: 2px;
          outline: none;
          border-radius: 4px;
          background: transparent;
          font-size: 1.2rem;
          cursor: pointer;
          &[type="text"] {
            width: 150px;
          }
        }
      }
      .site-footer-nav {
        display: flex;
        a {
          position: relative;
          margin-left: 20px;
        }
      }
    }
  }
`;
