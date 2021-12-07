import css from "styled-jsx/css";

export const styles = css`
  .post-feed {
    display: grid;
    grid-gap: var(--space-md);
    padding: var(--space-md);
    background: var(--color-bg);
    /* @media (min-width: 900px) {
      padding-top: 0;
    } */
    position: relative;
    flex-wrap: wrap;
    grid-template-columns: repeat(3, 1fr);
    @media (max-width: 991px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 767px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
