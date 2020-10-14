import styled from "styled-components";

export const Article = styled.article`
  display: flex;
  flex: 1 1 300px;
  flex-direction: column;
  overflow: hidden;
  margin: 0 20px 40px;
  min-height: 300px;
  background: #fff 50%;
  background-size: cover;
  border-radius: 5px;
  box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.06),
    1px 3px 8px rgba(39, 44, 49, 0.03);
  transition: all 0.5s ease;
  @media (max-width: 650px) {
    margin: 0 20px 5vw;
  }
  .post-card-image-link {
    position: relative;
    display: block;
    overflow: hidden;
    border-radius: 5px 5px 0 0;
    .post-card-image {
      width: auto;
      height: 200px;
      background: #c5d2d9 no-repeat 50%;
      background-size: cover;
    }
  }
  .post-card-content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .post-card-content-top {
      padding: 25px 25px 25px;
      .post-card-category {
        text-transform: uppercase;
        font-size: 1.2rem;
        .category {
          margin-right: 10px;
          color: #8c8a8a;
        }
      }
      .post-card-content-link {
        position: relative;
        display: block;

        color: #15171a;

        .post-card-title {
          margin-top: 0;
        }
      }
    }
    .post-card-meta {
      padding: 0 25px 25px;
      display: flex;
      justify-content: space-between;
      > div {
        display: flex;
        justify-content: center;
        svg {
          width: 20px;
        }
      }
      .author-profile-image {
        margin-right: 5px;
        width: 25px;
        height: 25px;
        border-radius: 100%;
        object-fit: cover;
      }
    }
  }

  @media (min-width: 795px) {
    &:nth-child(6n + 1):not(.no-image) {
      flex: 1 1 100%;
      -ms-flex-direction: row;
      flex-direction: row;
      p {
        font-size: 1.8rem;
        line-height: 1.55em;
      }
      .post-card-title {
        font-size: 2.6rem;
      }
      .post-card-image-link {
        position: relative;
        flex: 1 1 auto;
        border-radius: 5px 0 0 5px;

        .post-card-image {
          position: absolute;
          width: 100%;
          height: 100%;
        }
      }
      .post-card-content {
        flex: 0 1 357px;
        .post-card-content-top {
          padding: 30px 40px 0;
        }
        .post-card-meta {
          padding: 0 40px 30px;
        }
      }
    }
  }
`;
