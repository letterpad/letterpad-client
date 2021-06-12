import css from "styled-jsx/css";

export const footerStyles = css.global`
  .site-footer {
    color: var(--color-text-dull);
    background: var(--color-pre-bg);
    padding: 20px 20px !important;
    margin-top: var(--space-xxl);
    .site-footer-content {
      display: flex;
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
        text-align: left;
        flex: 1;
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
        flex: 1;
        justify-content: flex-end;
        a {
          position: relative;
          margin-left: 20px;
        }
      }
    }
  }
`;
