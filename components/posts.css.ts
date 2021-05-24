import css from "styled-jsx/css";

export const styles = css.scope`
  .post-feed {
    display: flex;
    @media (min-width: 900px) {
      padding-top: 0;
    }
    position: relative;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-top: var(--space-md);
  }
`;
