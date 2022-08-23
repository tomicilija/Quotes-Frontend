import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 50px;

  position: relative;
  top: 15%;

  .my-masonry-grid {
    display: flex;
    width: auto;
  }

  @media (max-width: 900px) {
  }
`;

export const NotFound = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  flex-direction: column;
  width: 100%;
  h1 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 41px;
    letter-spacing: 0.25px;
    text-align: center;
    margin: 30px 0 10px 0;
    color: #e59967;
  }
  p {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #000000;
  }
`;

