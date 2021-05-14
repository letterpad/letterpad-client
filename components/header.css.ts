import css from "styled-jsx/css";

export const headerStyles = (bg) => {
  return css.global`
    .site-header {
      background: url(${bg}) var(--color-bg-2) no-repeat 50%;
      position: relative;
      padding-top: 12px;
      padding-bottom: 12px;
      background-size: cover;

      &:after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        z-index: 10;
        display: block;
      }

      &:before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        z-index: 10;
        display: block;
        bottom: 0;
        background: rgba(0, 0, 0, 0.18);
      }

      &:after {
        bottom: auto;
        height: 80px;
        background: linear-gradient(rgba(0, 0, 0, 0.1), transparent);
      }

      :global(.site-header-content) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10vw 4vw;
        min-height: 200px;
        max-height: 450px;
        text-align: center;
      }
      :global(.no-banner) {
        display: none;
      }
      .site-title {
        z-index: 10;
        margin: 0;
        padding: 0;
        font-size: 3.8rem;
        font-weight: 700;
      }

      .site-logo {
        max-height: 45px;
      }

      .site-description {
        z-index: 10;
        margin: 0;
        padding: 5px 0;
        font-size: 2.2rem;
        font-weight: 300;
        letter-spacing: 0.5px;
        opacity: 0.8;
      }

      @media (min-width: 900px) {
        :global(.home-template .site-nav) {
          position: relative;
          top: -70px;
        }
      }
      @media (max-width: 700px) {
        padding-right: 0;
        padding-left: 0;
      }
    }
  `;
};

export const navigationStyles = (displayInlineLogo) => {
  return css.scope`
    .site-nav {
      display: flex;
      justify-content: space-between;
      position: relative;
      z-index: 300;
      justify-content: space-between;
      align-items: baseline;
      height: 40px;
      font-size: 1.2rem;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

        :global(&.logo-hide .site-nav-logo) {
          display: none;
        }
        :global(&.logo-inline) {
          @media (min-width: 900px) {
            position: relative;
            top:-70px;
          }
        }
      

      .site-nav-left {
        display: flex;
        align-items: center;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        margin-right: 10px;
        padding-bottom: ${!displayInlineLogo ? "80px" : ""};
        letter-spacing: 0.4px;
        white-space: nowrap;
        &::-webkit-scrollbar {
          width: 1px;
        }

        &::-webkit-scrollbar-track {
          background: transparent;
        }

        &::-webkit-scrollbar-thumb {
          background-color: transparent;
        }
        @media (max-width: 700px) {
          margin-right: 0;
          padding-left: 4vw;
        }

        :global(.site-nav-logo) {
          -ms-flex-negative: 0;
          flex-shrink: 0;
          display: block;
          margin-right: 24px;
          padding: 11px 0;
          color: var(--color-primary);
          font-size: 1.7rem;
          line-height: 1em;
          font-weight: 700;
          letter-spacing: -0.5px;

          img {
            display: block;
            width: auto;
            height: 21px;
          }
        }
        ul.nav {
          display: flex;
          margin: 0 0 0 -12px;
          padding: 0;
          list-style: none;
          font-size: 1.2rem;
          align-items: center;
          li {
            padding: 0;
            text-transform: uppercase;
           :global(a) {
              padding: 10px 12px;
              color: var(--color-text);
              opacity: 0.8;
            }
          }
        }
      }

      .site-nav-right,
      .social-links {
        flex-shrink: 0;
        display: flex;
        align-items: center;

        .social-link {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          padding: 10px;
          color: var(--color-text);
          opacity: 0.8;

          svg {
            height: 1.5rem;
            path {
              fill: #fff;
            }
          }
        }
      }
    }
  `;
};
