import css from "styled-jsx/css";

export const styles = css.scope`
  .post-feed {
    display: flex;
    @media (min-width: 0px) {
      margin-top: -70px;
      padding-top: 0;
    }
    position: relative;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin: 0 -20px;
  }
  .tag-banner {
    height: 250px;
    background: var(--color-bg-2);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 -60px 110px;
    font-size: var(--text-md);

    @media(max-width: 767px) {
      margin-bottom: 0px;
    }
  }
`;
