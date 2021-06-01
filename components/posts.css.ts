import css from "styled-jsx/css";

export const styles = css.scope`
  .post-feed {
    display: grid;
    grid-gap: var(--space-md);
    @media (min-width: 900px) {
      padding-top: 0;
    }
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
