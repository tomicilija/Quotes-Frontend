import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  //  Testing if the background image posinioning is working like this
  /*
  margin-top: 1100px;
*/
  // End of testing

  //
  margin-top: -750px;

  @media (max-width: 900px) {
    margin-top: 0px;
  }
`;

export const Tittle = styled.div`
  position: relative;
  width: 100%;
  h4 {
    width: 350px;
    height: 41px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 35px;
    line-height: 41px;
    letter-spacing: 0.25px;
    text-align: center;
    margin: auto;
    color: #e59967;
  }
  p {
    width: 540px;
    height: 38px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    margin: auto;
    color: #000000;
  }
  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 50px;
    h4 {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 28px;
      text-align: center;
      color: #e59967;
    }
    p {
      width: 300px;
      font-family: "Raleway";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
    }
  }
`;

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

export const SeeMore = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 50px;

  width: 200px;
  height: 40px;

  background: #ffffff;
  /* Orange */

  border: 2px solid #de8667;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 32px;

  /* P desktop */

  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  text-align: center;

  /* Orange */

  color: #de8667;
  cursor: pointer;

  :hover {
    border-bottom: 5px solid #e59967;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  }
`;
