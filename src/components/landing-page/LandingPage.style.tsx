import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  overflow-y: hidden; // hide vertical scroll
  overflow-x: hidden; // hide horizontal scroll
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  min-height: calc(100vh - 65px);
`;

export const BgTop = styled.div`
  z-index: -5;
  svg {
    position: absolute;
    top: 0;
    right: 0;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

export const BgMid = styled.div`
  z-index: -5;
  svg {
    position: absolute;
    top: 400px;
    left: 0;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

export const BgLow = styled.div`
  z-index: -5;
  svg {
    z-index: -1;
    position: absolute;
    top: 700px;
    right: 0;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column; //  row | row-reverse | column | column-reverse;
  flex-wrap: wrap; //  nowrap | wrap | wrap-reverse

  justify-content: space-around; //  flex-start | flex-end | center | space-between | space-around | space-evenly
  align-items: center; //  stretch | flex-start | flex-end | center | baseline | first baseline | last baseline
  align-content: center; //  flex-start | flex-end | center | space-between | space-around | space-evenly | stretch

  width: 100%;
  margin-top: 250px;

  @media (max-width: 900px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 20px;

    margin-top: 50px;
  }
`;

export const HeroWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: space-around;
  align-items: center;
  align-content: center;

  width: 100%;
  margin-top: 300px;

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
export const Quote = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 32px;
  gap: 40px;
  margin-bottom: 100px;

  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  line-height: 41px;
  letter-spacing: 0.25px;

  color: #de8667;

  span {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    margin-top: -30px;

    color: #000000;
  }

  @media (max-width: 900px) {
    margin-bottom: auto;
  }
`;

export const MostUpvoated = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 100px;

  @media (max-width: 900px) {
    margin-bottom: 0;
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

export const HeroTittle = styled.div`
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
    a {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      align-self: flex-start;
    }
  }
`;

export const FeturedQuotes = styled.div`
  position: relative;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;

  @media (max-width: 900px) {
    margin-left: 0;
    max-width: 350px;
  }
`;

export const FeturedTop = styled.div`
  position: relative;
  z-index: 2;
  order: 1;
  margin: -60px 0 -60px 0;

  transform: scale(0.9);

  -webkit-filter: blur(1.5px);
  -moz-filter: blur(1.5px);
  -o-filter: blur(1.5px);
  -ms-filter: blur(1.5px);
  filter: blur(1.5px);
`;

export const FeturedMid = styled.div`
  position: relative;
  z-index: 3;
  order: 2;
  //margin-top: 25%;
`;

export const FeturedBottom = styled.div`
  position: relative;
  z-index: 1;
  order: 3;
  margin: -60px 0 -60px 0;

  transform: scale(0.9);

  -webkit-filter: blur(1.5px);
  -moz-filter: blur(1.5px);
  -o-filter: blur(1.5px);
  -ms-filter: blur(1.5px);
  filter: blur(1.5px);
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
  color: #ffffff;

  cursor: pointer;

  :hover {
    border-bottom: 5px solid #e59967;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const SloganWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 150px;

  @media (max-width: 900px) {
    margin: 20px;
  }
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
