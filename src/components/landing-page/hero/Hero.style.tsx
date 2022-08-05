import styled from "styled-components";

/* Hero */
export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const BgTop = styled.div`
  //  Testing if the background image posinioning is working like this
  /*
  position: absolute;

  margin-top: 500px;
*/
  // End of testing

  z-index: -1;
  width: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: flex-start;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const BgMid = styled.div`
  //  Testing if the background image posinioning is working like this
  /*
  position: absolute;
  margin-top: 1500px;
*/
  // End of testing

  z-index: -1;
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const BgLow = styled.div`
  //  Testing if the background image posinioning is working like this
  /*
  position: absolute;

  margin-top: 2500px;
*/
  // End of testing

  z-index: -1;
  width: 100%;
  //
  margin-top: -350px;

  display: flex;
  justify-content: flex-end;
  align-items: flex-start;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  //  Testing if the background image posinioning is working like this
  /*
  position: absolute;

  margin-top: 700px;
*/
  // End of testing

  //
  position: relative;

  display: flex;
  flex-direction: row; //  row | row-reverse | column | column-reverse;
  flex-wrap: wrap; //  nowrap | wrap | wrap-reverse

  justify-content: space-around; //  flex-start | flex-end | center | space-between | space-around | space-evenly
  align-items: center; //  stretch | flex-start | flex-end | center | baseline | first baseline | last baseline
  align-content: center; //  flex-start | flex-end | center | space-between | space-around | space-evenly | stretch

  width: 100%;
  //
  margin-top: -3000px;

  @media (max-width: 900px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 100px;

    margin-top: -50px;
  }
`;

export const Tittle = styled.div`
  width: 35%;
  position: relative;
  h1 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 300;
    font-size: 98px;
    line-height: 90px;
    letter-spacing: -1.5px;
    color: #000000;
    & span {
      color: #e59967;
    }
  }
  h5 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
  }
  @media (max-width: 900px) {
    margin-top: 100px;
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 20px;

    h1 {
      max-width: 350px;
      font-family: "Raleway";
      font-style: normal;
      font-weight: 400;
      font-size: 35px;
      line-height: 41px;
      letter-spacing: 0.25px;
      color: #000000;
      & span {
        color: #e59967;
      }
    }
    h5 {
      max-width: 350px;
      font-family: "Raleway";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 28px;
      color: #000000;
    }
  }
`;

export const FeturedQuotes = styled.div`
  position: relative;
  @media (max-width: 900px) {
    margin-left: 0;
    max-width: 350px;
  }
`;

export const FeturedFront = styled.div`
  position: relative;
  z-index: 3;

  margin-top: 50px;

  @media (max-width: 900px) {
    margin-left: 0;
    margin-top: 50px;
  }
`;

export const FeturedMid = styled.div`
  position: relative;
  z-index: 2;

  margin-top: -230px;

  transform: scale(0.9);

  -webkit-filter: blur(2px);
  -moz-filter: blur(2px);
  -o-filter: blur(2px);
  -ms-filter: blur(2px);
  filter: blur(2px);

  @media (max-width: 900px) {
    margin-left: 0;
    margin-top: -240px;
  }
`;

export const FeturedBack = styled.div`
  position: relative;
  z-index: 1;

  margin-top: 70px;

  transform: scale(0.9);

  -webkit-filter: blur(2px);
  -moz-filter: blur(2px);
  -o-filter: blur(2px);
  -ms-filter: blur(2px);
  filter: blur(2px);

  @media (max-width: 900px) {
    margin-left: 0;
    margin-top: 70px;
  }
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: flex-start;

  padding: 8px 16px;
  gap: 10px;
  width: 120px;
  height: 40px;
  margin-top: 20px;

  border-radius: 32px;
  border-width: 2px;
  border-style: solid;
  border-color: #e59967;

  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  flex: none;
  flex-grow: 0;
  padding: 0px;

  background: linear-gradient(257.39deg, #efb467 0%, #de8667 100%);
  // Text color
  color: #ffffff;

  :hover {
    border-bottom: 5px solid #e59967;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const SloganWrapper = styled.div`
  //  Testing if the background image posinioning is working like this
  /*
  position: absolute;

  margin-top: 1800px;
*/
  // End of testing

  display: flex;
  justify-content: center;
  //
  position: relative;
  //margin: 150px 0;
  //
  margin-top: -2000px;
  //
  @media (max-width: 900px) {
    margin: 20px;
  }

  width: 100%;
`;
export const Slogan = styled.div`
  position: relative;
  width: 703px;
  height: 150px;
  text-align: center;
  h2 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 300;
    font-size: 61px;
    line-height: 72px;
    letter-spacing: -0.5px;
    color: #000000;
    & span {
      color: #e59967;
    }
  }
  @media (max-width: 900px) {
    padding: 20px;
    margin-top: 40px;
    h2 {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 400;
      font-size: 35px;
      line-height: 41px;
      text-align: center;
      letter-spacing: 0.25px;
      color: #000000;
      & span {
        color: #e59967;
      }
    }
  }
`;