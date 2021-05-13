import styled from "styled-components";

export const StyledPost = styled.div`
  .post-full {
    position: relative;
    z-index: 50;
    .separator {
      margin: 0px 10px;
    }
    .tags-wrapper {
      margin-top: 20px;
      .tag a {
        color: var(--color-primary);
        margin-right: 8px;
        text-transform: lowercase;
      }
    }
    .post-full-header {
      margin: 0 auto;
      padding: 6vw 3vw 3vw;
      max-width: 1040px;
      text-align: center;
      .post-full-meta {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.4rem;
        font-weight: 600;
        text-transform: uppercase;
        margin-bottom: 20px;
        color: var(--color-text-dull);
        @media (max-width: 500px) {
          font-size: 1.2rem;
          line-height: 1.3em;
        }
      }
      .post-full-title {
        margin: 0;
        font-weight: 500;
        color: var(--color-text);
        @media (max-width: 500px) {
          font-size: 2.9rem;
        }
      }
    }

    .post-full-image {
      /* margin: 0 -8vw -165px; */
      height: 700px;
      border-radius: 5px;
      width: 100%;
      max-width: 100vw;
      object-fit: cover;
      @media (max-width: 1170px) {
        margin: 0 -4vw -100px;
        border-radius: 0;
        width: 100vw;
        /* margin: 0 -4vw 4vw -4vw; */
      }
      @media (max-width: 800px) {
        height: 400px;
      }
      @media (max-width: 500px) {
        height: 350px;
        margin: 0 -4vw 4vw -4vw;
      }
    }

    .post-full-footer {
      -ms-flex-pack: justify;
      justify-content: space-between;
      margin: 0 auto;
      padding: 3vw 0 6vw;
      max-width: 840px;
      display: flex;
    }
  }
`;

export const FloatingHeader = styled.div`
  visibility: hidden;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  height: 60px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  background: hsla(0, 0%, 100%, 0.95);
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  transform: translate3d(0, -120%, 0);
  > div {
    display: flex;
    align-items: center;
  }
  &.floating-active {
    visibility: visible;
    transition: all 0.5s cubic-bezier(0.22, 1, 0.27, 1);
    transform: translateZ(0);
  }
  .floating-header-divider {
    margin: 0 5px;
    line-height: 1em;
  }
  .floating-header-title {
    -ms-flex: 1;
    flex: 1;
    overflow: hidden;
    margin: 0;
    color: var(--color-text);
    font-size: 1.6rem;
    line-height: 1.3em;
    font-weight: 700;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .floating-header-logo {
    overflow: hidden;
    margin: 0 0 0 20px;
    font-size: 1.6rem;
    line-height: 1em;
    text-overflow: ellipsis;
    white-space: nowrap;
    img {
      margin: 0 10px 0 0;
      max-height: 20px;
    }
    a {
      display: flex;
      align-items: center;
      color: var(--color-text);
      line-height: 1.1em;
      font-weight: 700;
    }
  }
  .progress-bar {
    position: fixed;
    top: 58px;
  }
`;
