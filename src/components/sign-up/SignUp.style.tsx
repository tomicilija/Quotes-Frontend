import styled from "styled-components";

/* Hero */
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

export const SignUpFormWrapper = styled.div`
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

export const SignUpHeader = styled.div`
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
  h5 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
  }
`;

export const SignUpForm = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const SignUpFormSection = styled.div`
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

  a {
    width: 100%;
  }
`;

export const TwoInRow = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
`;

export const SigninText = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  justify-content: space-between;
  align-content: flex-end;
  align-items: flex-end;
  width: 100%;

  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  span {
    color: #efb467;
  }
`;
