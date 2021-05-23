import css from "styled-jsx/css";

export const postWrapperStyles = css`
  .post-full {
    position: relative;
    z-index: 50;
    .separator {
      margin: 0px 10px;
    }
    .tags-wrapper {
      margin-top: 20px;
      :global(.tag a) {
        color: var(--color-primary);
        margin-right: 8px;
        text-transform: lowercase;
      }
    }
    .post-full-header {
      margin: 0 auto;

      margin-top: 60px;
      padding: 20px 3vw 3vw;
      max-width: 1040px;
      text-align: center;
      .post-full-meta {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.4rem;
        font-weight: 600;
        text-transform: uppercase;
        margin-bottom: 20px;
        color: var(--color-text-dull);
        @media (max-width: 500px) {
          font-size: 1.2rem;
          line-height: 1.3em;
        }
      }
      .post-full-title {
        margin: 0;
        font-weight: 500;
        line-height: 7rem;
        color: var(--color-text);
        @media (max-width: 500px) {
          font-size: 2.9rem;
          line-height: 4rem;
        }
      }
    }

    .post-full-image {
      height: 700px;
      border-radius: 5px;
      width: 100%;
      max-width: 100vw;
      object-fit: cover;
      @media (max-width: 1170px) {
        margin: 0 -var(--space-lg) -100px;
        border-radius: 0;
        width: 100vw;
      }
      @media (max-width: 800px) {
        height: 400px;
      }
      @media (max-width: 500px) {
        height: 350px;
        margin: 0 -var(--space-lg) var(--space-lg) -var(--space-lg);
      }
    }

    .post-full-footer {
      -ms-flex-pack: justify;
      justify-content: space-between;
      margin: 0 auto;
      padding: 3vw 0 6vw;
      max-width: 840px;
      display: flex;
    }
  }
`;

export const postStyles = css.global`
  .post-full-content {
    position: relative;
    margin: 0 auto;
    padding: 70px 180px 0;
    min-height: 230px;
    font-weight: 300;
    font-size: 1.8rem;
    line-height: 1.6em;
    background: var(--color-bg);
    margin-bottom: 60px;
    &:before {
      left: -5px;
      transform: rotate(-5deg);
      content: "";
      position: absolute;
      top: 15px;
      z-index: -1;
      display: block;
      width: 20px;
      height: 200px;
      background: rgba(39, 44, 49, 0.15);
      filter: blur(5px);
    }
    &:after {
      content: "";
      position: absolute;
      top: 15px;
      z-index: -1;
      display: block;
      width: 20px;
      height: 200px;
      background: rgba(39, 44, 49, 0.15);
      filter: blur(5px);
      right: -5px;
      transform: rotate(5deg);
    }
    :global(blockquote) {
      margin-top: 1.5em;
      padding: 0 1em;
      border-left: 3px solid var(--color-primary);
      blockquote {
        padding-right: 0px;
      }
      p {
        margin: 0 0 1em;
        color: inherit;
        font-size: inherit;
        line-height: inherit;
        font-size: 95%;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
    dl {
      min-width: 100%;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      min-width: 100%;
      color: var(--color-text);
      font-family: "Libre Baskerville", serif;
    }
    :global(h1) {
      margin-top: 1.95em;
      margin-bottom: -0.28em;
      font-size: 4.6rem;
      font-weight: 400;
      + p {
        margin-top: 2.6rem;
      }
    }
    h2 {
      margin-top: 1.6em;
      margin-bottom: -0.21em;
      font-size: 3.6rem;
      font-weight: 400;
      + p {
        margin-top: 2.6rem;
      }
    }
    h3 {
      margin-top: 1.2em;
      margin-bottom: -0.11em;
      font-size: 2.8rem;
      font-weight: 400;
    }
    h4 {
      margin-top: 1em;
      margin-bottom: -0.1em;
      font-size: 2.2rem;
      font-weight: 400;
    }
    h5 {
      margin-top: 0.8em;
      margin-bottom: -0.05em;
      border: 0;
      font-size: 1.8rem;
      line-height: 1.35em;
      font-weight: 400;
    }
    h6 {
      margin-top: 0.8em;
      margin-bottom: -0.02em;
      font-size: 1.6rem;
      font-weight: 400;
    }
    ol {
      min-width: 100%;
    }
    p {
      min-width: 100%;
      margin-top: 0.86em;
      margin-bottom: -0.46em;
    }
    pre {
      overflow-x: auto;
      margin: 1.5em 0 3em;
      padding: 20px;
      max-width: 100%;
      border: 1px solid var(--color-border);
      color: #e5eff5;
      font-size: 1.4rem;
      line-height: 1.5em;
      background: #0e0f11;
      border-radius: 5px;
      code {
        padding: 0;
        font-size: inherit;
        line-height: inherit;
        background: transparent;
        * {
          color: inherit;
        }
      }
    }
    pre[class*="language-"] {
      margin: 4rem 0;
      font-family: "Fira Code", monospace;
    }
    ul,
    ol {
      margin-top: 2.5rem;
    }
    li {
      word-break: break-word;
      p {
        margin: 0;
      }
      &:first-child {
        margin-top: 0;
      }
    }
    figure {
      margin: auto -15px;
      margin-top: 1.9rem;
      margin-bottom: 1.9rem;
    }
    a {
      color: var(--color-primary);
      box-shadow: inset 0 -1px 0 var(--color-primary);
      &:hover {
        color: var(--color-primary);
        text-decoration: none;
      }
    }
    em {
      color: var(--color-text);
    }
    strong {
      color: var(--color-text);
    }
    small {
      display: inline-block;
      line-height: 1.6em;
    }
    img {
      display: block;
      margin: 1.5em auto;
      max-width: 100%;
      width: auto;
      max-height: 500px;
      + {
        br {
          + {
            small {
              display: block;
              margin-top: -3em;
              margin-bottom: 1.5em;
            }
          }
        }
      }
    }
    figcaption {
      font-size: 1.2rem;
      text-align: center;
      margin-top: -28px;
      margin-bottom: 20px;
      font-style: italic;
    }
    video {
      display: block;
      margin: 1.5em auto;
      max-width: 1040px;
      width: 100%;
    }
    img[src$="#full"] {
      max-width: none;
      width: 100vw;
    }
    iframe {
      margin: 0 auto;
      margin-top: 2.5rem;
    }
    code {
      padding: 0 5px 2px;
      font-size: 0.8em;
      line-height: 1em;
      font-weight: 400 !important;
      background: var(--color-bg-2);
      border-radius: 3px;
    }
    .fluid-width-video-wrapper {
      margin: 1.5em 0 3em;
    }
    hr {
      padding-top: 3.2em;
      margin: 16px 0px;
      border: none;
      &:after {
        content: "...";
        font-size: 16px;
        zoom: 3;
        margin-top: -20px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    table {
      display: inline-block;
      overflow-x: auto;
      margin: 0.5em 0 2.5em;
      max-width: 100%;
      width: 100%;
      border-spacing: 0;
      border-collapse: collapse;
      font-size: 1.6rem;
      white-space: nowrap;
      vertical-align: top;
      -webkit-overflow-scrolling: touch;
      background-attachment: scroll, scroll;
      background-size: 10px 100%, 10px 100%;
      background-repeat: no-repeat;
      td {
        &:first-child {
          background-size: 20px 100%;
          background-repeat: no-repeat;
        }
        &:last-child {
          background-position: 100% 0;
          background-size: 20px 100%;
          background-repeat: no-repeat;
        }
        padding: 6px 12px;
        border: 1px solid var(--color-border);
      }
      th {
        font-size: 1.2rem;
        font-weight: 700;
        letter-spacing: 0.2px;
        text-align: left;
        text-transform: uppercase;
        padding: 6px 12px;
        border: 1px solid var(--color-border);
        width: 100%;
      }
    }

    .no-image {
      .post-full-content {
        padding-top: 0;
        &:after {
          display: none;
        }
        &:before {
          display: none;
        }
      }
    }
    .footnotes {
      min-width: 100%;
      font-size: 1.5rem;
      p {
        margin: 0;
      }
    }
    .post-full-comments {
      min-width: 100%;
    }
    ol {
      padding-left: 2em;
      ol {
        margin-bottom: 0;
        margin-top: 0;
      }
      ul {
        margin-bottom: 0;
        margin-top: 0;
      }
    }
    ul {
      padding-left: 2em;
      ol {
        margin-bottom: 0;
        margin-top: 0;
      }
      ul {
        margin-bottom: 0;
        margin-top: 0;
      }
    }
    li {
      word-wrap: break-all;
      > p {
        margin-top: 8px;
      }
    }

    .footnotes-sep {
      margin-bottom: 30px;
    }
    .footnote-backref {
      color: var(--color-primary) !important;
      font-size: 1.2rem;
      font-weight: 700;
      text-decoration: none !important;
      box-shadow: none !important;
    }
    @media (max-width: 1170px) {
      padding: 5vw 7vw 0;
    }
    @media (max-width: 800px) {
      font-size: 1.7rem;
    }
    @media (max-width: 1040px) {
      img {
        width: 100%;
        object-fit: contain;
        height: auto;
      }
      video {
        width: 100%;
        object-fit: contain;
        height: auto;
      }
    }
    @media (max-width: 500px) {
      h1 {
        font-size: 2.8rem;
        + p {
          margin-top: 1.6rem;
        }
      }
      h2 {
        font-size: 2.6rem;
        + p {
          margin-top: 1.6rem;
        }
      }
      h3 {
        font-size: 2.2rem;
      }
      h4 {
        font-size: 2.2rem;
      }
      h5 {
        padding: 0 0 0.5em;
        font-size: 2.2rem;
      }
      h6 {
        font-size: 2rem;
      }
      padding: 0;
      &:after {
        display: none;
      }
      &:before {
        display: none;
      }

      .post-full-meta {
        font-size: 1.2rem;
        line-height: 1.3em;
      }
      .post-full-title {
        font-size: 2.9rem;
        line-height: 4rem;
      }
      .post-full-image {
        margin-bottom: var(--space-lg);
        height: 350px;
      }
    }
    @media (min-width: 1180px) {
      h5 {
        max-width: 1060px;
        width: 100vw;
      }
    }

    .post-content {
      margin-bottom: 80px;
    }

    code[class*="language-"],
    pre[class*="language-"] {
      color: #f8f8f2;
      background: none;
      text-shadow: 0 1px rgba(0, 0, 0, 0.3);
      font-family: "Fira Code", monospace;
      text-align: left;
      white-space: pre;
      word-spacing: normal;
      word-break: normal;
      word-wrap: normal;
      line-height: 1.5;
      -moz-tab-size: 4;
      -o-tab-size: 4;
      tab-size: 4;
      font-size: 1.2rem;
      hyphens: none;
    }

    /* Code blocks */
    pre[class*="language-"] {
      padding: 1em;
      margin: 4em 0;
      overflow: auto;
      border-radius: 0.3em;
      @media (width: 700px) {
        margin: 2em 0;
      }
    }

    :not(pre) > code[class*="language-"],
    pre[class*="language-"] {
      background: #282a36;
    }

    /* Inline code */
    :not(pre) > code[class*="language-"] {
      padding: 0.1em;
      border-radius: 0.3em;
      white-space: normal;
    }

    .token.comment,
    .token.prolog,
    .token.doctype,
    .token.cdata {
      color: #6272a4;
    }

    .token.punctuation {
      color: #f8f8f2;
    }

    .namespace {
      opacity: 0.7;
    }

    .token.property,
    .token.tag,
    .token.constant,
    .token.symbol,
    .token.deleted {
      color: #ff79c6;
    }

    .token.boolean,
    .token.number {
      color: #bd93f9;
    }

    .token.selector,
    .token.attr-name,
    .token.string,
    .token.char,
    .token.builtin,
    .token.inserted {
      color: #50fa7b;
    }

    .token.operator,
    .token.entity,
    .token.url,
    .language-css .token.string,
    .style .token.string,
    .token.variable {
      color: #f8f8f2;
    }

    .token.atrule,
    .token.attr-value,
    .token.function,
    .token.class-name {
      color: #f1fa8c;
    }

    .token.keyword {
      color: #8be9fd;
    }

    .token.regex,
    .token.important {
      color: #ffb86c;
    }

    .token.important,
    .token.bold {
      font-weight: bold;
    }

    .token.italic {
      font-style: italic;
    }

    .token.entity {
      cursor: help;
    }
  }
`;
