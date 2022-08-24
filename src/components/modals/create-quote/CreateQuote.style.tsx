import styled from "styled-components";

//Backgorund
export const Container = styled.div`
  position: absolute;
  width: 110%;
  height: 500%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: -10%;

  @media (max-width: 900px) {
    width: 110%;
    margin-left: -13%;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  width: 600px;
  min-height: 400px;
  margin-top: 80vh;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  gap: 16px;

  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;

  z-index: 10;
  border-radius: 16px;

  form {
    width: 100%;
  }

  @media (max-width: 900px) {
    width: 80%;
    height: auto;
    max-width: auto;
    margin: 80vh auto 0 auto;
  }
`;

export const SettingsHeader = styled.div`
  position: relative;
  width: 100%;
  text-align: left;

  h1 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 35px;
    line-height: 41px;
    letter-spacing: 0.25px;

    margin-bottom: 10px;

    color: #000000;
    & span {
      color: #e59967;
    }
  }

  h3 {
    margin-top: 20px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #e59967;
  }

  h5 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
  }
`;

export const SettingsForm = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const SettingsSection = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;

  textarea {
    display: flex;
    width: 100%;
    height: 150px;
    flex-direction: row;
    align-items: flex-start;
    padding: 16px 24px;
    gap: 8px;

    background: #ffffff;
    border: 2px solid #de8667;
    border-radius: 16px;

    font-family: "Raleway";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;

    resize: none;
  }

  button {
    display: flex;
    width: 140px;
    height: 40px;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding: 10px 16px;
    margin-top: 20px;

    background: linear-gradient(257.39deg, #efb467 0%, #de8667 100%);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 32px;
    border: none;

    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #ffffff;

    cursor: pointer;
  }

  p {
    display: flex;
    width: 55px;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding: 10px 16px;
    margin-top: 20px;

    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #322d38;

    cursor: pointer;
  }
  
  @media (max-width: 900px) {
    flex-direction: column;
    button:nth-child(2){
      margin-top: 0px;
    }
    
  }
`;

export const TwoInRow = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
`;
