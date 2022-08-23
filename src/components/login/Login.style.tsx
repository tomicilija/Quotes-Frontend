import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  margin-bottom: -65px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    margin: -103px 0;
  }
`;

export const Background = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const LoginFormWrapper = styled.div`
  position: relative;
  width: 420px;
  //min-height: 750px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 16px;

  @media (max-width: 900px) {
    height: 600px;
    width: 100%;
    padding: 0 15px;
    max-width: 420px;
  }
`;

export const LoginHeader = styled.div`
  position: relative;
  width: 100%;
  text-align: center;

  h1 {
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
  
  h3 {
    margin-top: 20px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #e59967;;
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

export const LoginForm = styled.div`
  position: relative;
  width: 420px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  @media (max-width: 900px) {
    width: 80vw;
  }
`;

export const LoginFormSection = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  label {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    padding: 0px 8px 0px 0px;
    gap: 10px;

    font-family: "Raleway";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
  }

  input {
    display: flex;
    width: 100%;
    height: 40px;
    flex-direction: row;
    align-items: center;
    padding: 8px 30px 8px 24px;
    gap: 8px;

    background: #ffffff;
    border: 2px solid #de8667;
    border-radius: 32px;

    font-family: "Raleway";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
  }

  button {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;

    background: #ffffff;
    border: 2px solid #de8667;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 32px;

    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #de8667;

    cursor: pointer;
  }

  a {
    width: 100%;
  }
`;
