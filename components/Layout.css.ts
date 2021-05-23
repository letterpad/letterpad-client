import css from "styled-jsx/css";

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
