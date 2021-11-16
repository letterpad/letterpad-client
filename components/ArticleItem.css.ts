import css from "styled-jsx/css";

export const styles = css`
  .post {
    display: flex;
    flex: 1 1 300px;
    flex-direction: column;
    overflow: hidden;
    min-height: 300px;
    background: var(--color-post-bg);
    background-size: cover;
    border-radius: 5px;
    box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.06),
      1px 3px 8px rgba(39, 44, 49, 0.03);
    transition: all 0.5s ease;

    .post-card-image-link {
      position: relative;
      display: block;
      overflow: hidden;
      border-radius: var(--radius) var(--radius) 0 0;

      .post-card-image {
        width: 100%;
        height: 200px;
        object-fit: cover;
      }
    }

    &.without-cover-image {
      min-height: 150px;
    }
    .post-card-content {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .post-card-content-top {
        padding: var(--space-md);

        .post-card-content-link {
          position: relative;
          display: block;
          color: var(--color-text);

          .post-card-title {
            margin-top: 0;
          }
        }
      }
      .post-card-meta {
        padding: var(--space-md);
        padding-top: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        > div {
          display: flex;
          justify-content: center;
          :global(svg) {
            width: 18px;
            fill: var(--color-border);
            margin-right: 4px;
          }
        }
        .author-profile-image {
          width: var(--space-md);
          height: var(--space-md);
          border-radius: 100%;
          object-fit: cover;
        }
      }
    }
    &.without-cover-image {
      .post-card-content {
        flex: 1 !important;
      }
    }
    @media (min-width: 767px) {
      &.home:nth-child(7n + 1) {
        grid-column: 1 / span 3;
        flex-direction: row;
        p {
          font-size: var(--text-md);
          line-height: var(--text-lg);
        }

        .post-card-image-link {
          position: relative;
          flex: 1 1 auto;
          border-radius: var(--radius) 0 0 var(--radius);

          .post-card-image {
            position: absolute;
            width: 100%;
            height: 100%;
          }
        }

        .post-card-content {
          flex: 0 1 360px;
          .post-card-content-top {
            padding: var(--space-md);

            .post-card-title {
              font-size: var(--text-xl);
            }
          }
          .post-card-meta {
            padding: var(--space-md);
            padding-top: 0px;
          }
        }
      }
    }
  }
`;
