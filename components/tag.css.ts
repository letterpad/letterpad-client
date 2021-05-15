import css from "styled-jsx/css";

export const styles = css.scope`
  .post-feed {
    display: flex;
    @media (min-width: 900px) {
      margin-top: -70px;
      padding-top: 0;
    }
    position: relative;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin: 0 -20px;
    padding: 40px 0 0;
  }
  .tag-banner {
    width: 100vw;
    height: 300px;
    background: var(--color-bg-2);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 110px;
    margin-left: -60px;
  }
`;
