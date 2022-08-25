import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  overflow-x: hidden;
  width: 100%;
  min-height: calc(100vh - 65px);

  gap: 50px;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start; //  flex-start | flex-end | center | space-between | space-around | space-evenly
  align-items: center;
`;

export const Background = styled.div`
  position: absolute;
  z-index: -1;
  height: 461px;
  //height: 35vh;
  left: 0px;
  right: 0px;
  top: 0px;

  background: linear-gradient(257.39deg, #efb467 0%, #de8667 100%);

  @media (max-width: 900px) {
    //display: none;
    height: 425px;
  }
`;

export const BackgroundW = styled.div`
  position: absolute;
  z-index: -1;
  height: 300px;
  width: 120%;
  left: -10%;
  right: 0px;
  top: 330px;

  background: white;

  border-radius: 100% 100% 0 0;

  @media (max-width: 900px) {
    height: 100px;
  }
`;

export const ProfileBanner = styled.div`
  position: relative;
  width: 100%;
  margin-top: 120px;
  gap: 24px;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  justify-content: flex-start;
  align-items: center;
  align-content: center;

  @media (max-width: 900px) {
  }
`;

export const ProfilePicture = styled.div`
  height: 70px;
  width: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #ffffff;
  border-radius: 60px;
  border: none;
  @media (max-width: 900px) {
  }
`;

export const ProfilePictureicon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 50px;
  width: 50px;
  margin-top: -10px;
  border: none;
  @media (max-width: 900px) {
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 24px;
  @media (max-width: 900px) {
  }
`;

export const ProfileName = styled.div`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  line-height: 41px;
  /* identical to box height */

  color: #ffffff;

  text-align: center;
  letter-spacing: 0.25px;
  @media (max-width: 900px) {
  }
`;

export const ProfileKarma = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 32px;
  gap: 10px;

  background: #ffffff;
  /* Shadow */

  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  border-radius: 16px;

  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  text-align: center;
  p {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
  }
  @media (max-width: 900px) {
  }
`;

export const Quote = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 32px;
  gap: 10px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;

  color: #de8667;
  p {
    font-size: 15px;
    color: black;
  }
  span {
    color: #de8667;
  }

  @media (max-width: 900px) {
  }
`;

export const Likes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 32px;

  h3 {
    width: 100%;
    align-items: flex-start;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
  }

  p {
    margin: 10px;
    font-size: 15px;
    color: black;
  }
  span {
    color: #de8667;
  }
  @media (max-width: 900px) {
    padding: 0 0 0 10px;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  position: relative;

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

export const NotFound = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  flex-direction: column;
  width: 100%;
  height: 60vh;
  h1 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 35px;
    line-height: 41px;
    letter-spacing: 0.25px;
    text-align: center;
    margin: 20px;
    color: #e59967;
  }
  p {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    margin: 20px;
    color: #000000;
  }
  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: auto;
    h1 {
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
