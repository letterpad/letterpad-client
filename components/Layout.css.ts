import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
interface IHeaderProps {
  bg?: string;
}
export const StyledHeader = styled.header<IHeaderProps>`
  background: url(${p => p.bg}) #090a0b no-repeat 50%;
  position: relative;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-size: cover;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: 10;
    display: block;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: 10;
    display: block;
    bottom: 0;
    background: rgba(0, 0, 0, 0.18);
  }

  &:after {
    bottom: auto;
    height: 80px;
    background: linear-gradient(rgba(0, 0, 0, 0.1), transparent);
  }

  .site-header-content {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 10vw 4vw;
    min-height: 200px;
    max-height: 450px;
    text-align: center;
  }

  .site-title {
    z-index: 10;
    margin: 0;
    padding: 0;
    font-size: 3.8rem;
    font-weight: 700;
  }

  .site-logo {
    max-height: 45px;
  }

  .site-description {
    z-index: 10;
    margin: 0;
    padding: 5px 0;
    font-size: 2.2rem;
    font-weight: 300;
    letter-spacing: 0.5px;
    opacity: 0.8;
  }

  @media (min-width: 900px) {
    .home-template .site-nav {
      position: relative;
      top: -70px;
    }
  }
  @media (max-width: 700px) {
    padding-right: 0;
    padding-left: 0;
  }
`;

interface INavProps {
  displayInlineLogo: boolean;
}

export const Navigation = styled.nav<INavProps>`
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 300;
  justify-content: space-between;
  align-items: baseline;
  height: 40px;
  font-size: 1.2rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  @media (min-width: 900px) {
    position: relative;
    ${p => (!p.displayInlineLogo ? `top: -70px;` : "")}
  }

  .site-nav-left {
    display: flex;
    align-items: center;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    margin-right: 10px;
    ${p => (!p.displayInlineLogo ? `padding-bottom: 80px;` : "")}
    letter-spacing: 0.4px;
    white-space: nowrap;
    &::-webkit-scrollbar {
      width: 1px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: transparent;
    }
    @media (max-width: 700px) {
      margin-right: 0;
      padding-left: 4vw;
    }

    .site-nav-logo {
      -ms-flex-negative: 0;
      flex-shrink: 0;
      display: block;
      margin-right: 24px;
      padding: 11px 0;
      color: #fff;
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
      margin: 0 0 0 -12px;
      padding: 0;
      list-style: none;
      font-size: 1.2rem;
      align-items: center;
      li {
        padding: 0;
        text-transform: uppercase;
        a {
          padding: 10px 12px;
          color: #fff;
          opacity: 0.8;
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
      color: #fff;
      opacity: 0.8;

      svg {
        height: 1.5rem;
        path {
          fill: #fff;
        }
      }
    }
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 10vw 4vw;
  max-height: 450px;
  text-align: center;
`;

export const Main = styled.main`
  z-index: 100;
  flex-grow: 1;
  padding: 0 4vw;
`;

export const Footer = styled.footer`
  position: relative;
  padding-top: 20px;
  padding-bottom: 60px;
  color: #fff;
  background: #000;
  padding-bottom: 20px !important;

  .site-footer-content {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
    font-size: 1.3rem;
    @media (max-width: 650px) {
      flex-direction: column;
    }
    a {
      color: hsla(0, 0%, 100%, 0.7);
    }
    .copyright {
      line-height: 1.3em;
      span {
        font-size: 0.8em;
        color: #555;
      }
    }
    .subscribe {
      @media (max-width: 650px) {
        margin: 8px 0px;
      }
      input {
        color: #eee;
        border: 1px solid #555;
        padding: 4px;
        margin-right: 2px;
        outline: none;
        border-radius: 4px;
        background: transparent;
        font-size: 1.2rem;
        cursor: pointer;
        &[type="text"] {
          width: 150px;
        }
      }
    }
    .site-footer-nav {
      display: -ms-flexbox;
      display: flex;
      a {
        position: relative;
        margin-left: 20px;
      }
    }
  }
`;
