import css from "styled-jsx/css";

export const layoutStyles = css.global`
  .layout {
    min-height: 100vh;
    background: var(--color-bg-2);
  }
  main {
    z-index: 100;
    flex-grow: 1;
  }
  .container-fixed {
    margin: 0 auto;
    max-width: var(--layout-width-lg);
    width: 100%;
  }
  .container-fixed-narrow {
    margin: 0 auto;
    max-width: var(--layout-width-md);
    width: 100%;
  }
  .container-wrapper {
    position: relative;
    padding: 0 var(--space-lg);
    z-index: 1;
    @media (max-width: 767px) {
      padding: 0 var(--space-md);
    }
  }
  @media (max-width: 767px) {
    .page-home main.container-wrapper,
    .page-tag main.container-wrapper {
      padding: 0px;
    }
  }
`;
