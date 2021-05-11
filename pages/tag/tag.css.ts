import styled from "styled-components";

export const Container = styled.div`
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
`;
