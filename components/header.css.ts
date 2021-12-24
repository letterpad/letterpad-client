import css from "styled-jsx/css";

export const navigationStyles = () => {
  return css`
    .site-nav {
      display: flex;
      justify-content: space-between;
      position: relative;
      z-index: 300;
      justify-content: space-between;
      align-items: baseline;
      height: 40px;
      font-size: var(--text-sm);

      :global(&.logo-hide .site-nav-logo) {
        display: none;
      }
      :global(&.logo-inline) {
        @media (min-width: 900px) {
          position: relative;
        }
      }

      .site-nav-left {
        display: flex;
        align-items: center;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        margin-right: 10px;
        letter-spacing: 0.4px;
        white-space: nowrap;
        margin-left: var(--margin);
        &::-webkit-scrollbar {
          width: 1px;
        }

        &::-webkit-scrollbar-track {
          background: transparent;
        }

        &::-webkit-scrollbar-thumb {
          background-color: transparent;
        }
        /* @media (max-width: 1040px) {
          margin-right: 0;
          padding-left: var(--space-lg);
        } */

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
          padding: 0;
          list-style: none;
          align-items: center;
          li {
            padding: 0;
            text-transform: uppercase;
            :global(a) {
              padding: var(--space-sm);
              padding-left: 0;
              color: var(--color-nav-link);
              opacity: 0.8;
              font-weight: 600;
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
