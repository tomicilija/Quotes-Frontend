import styled from "styled-components";

/* Navigation */
export const Container = styled.div`
  z-index: 1;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;

  padding: 50px 70px;
  width: 100%;

  @media (max-width: 900px) {
    position: relative;
    padding: 30px 35px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
    background-color: white;
  }
`;

export const Logo = styled.div`
  width: 20%;
  max-width: 120px;
  min-width: 120px;
  height: 2rem;
  cursor: pointer;

  &.showLogo {
    display: flex;
  }
  &.hideLogo {
    display: none;
  }
  &.white {
    display: flex;
  }
  &.black {
    display: none;
  }

  @media (max-width: 900px) {
    justify-content: flex-end;

    &.white {
      display: none;
    }
    &.black {
      display: flex;

      &.hideLogo {
        display: none;
      }
    }
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 900px) {
    padding: 22px;
    border-radius: 1rem;
    overflow: hidden;
    flex-direction: column;
    transition: max-height 0.3s ease-in;
    width: 100%;

    &.showMenuNav {
      display: flex;
    }
    &.hideMenuNav {
      display: none;
    }
  }
`;

export const ButtonWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 32px;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 0px;
    width: 100%;
  }

  .signup {
    background: linear-gradient(257.39deg, #efb467 0%, #de8667 100%);
    color: #ffffff;
  }
  .login {
    background: #ffffff;
    color: #efb467;
  }
  a {
    width: 100%;
  }
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 10px;
  width: 120px;
  height: 40px;

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

  cursor: pointer;

  :hover {
    border-bottom: 5px solid #e59967;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 900px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    width: 100%;
    margin-top: 20px;
  }
`;

export const Home = styled.div`
  display: none;
  padding: 0px;

  cursor: pointer;
  p {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;

    color: #322d38;
  }
  @media (max-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const BurgerMenu = styled.div`
  display: none;
  flex-direction: column;
  align-items: flex-start;
  padding: 4px 2px;
  gap: 5px;
  cursor: pointer;

  span {
    width: 25px;
    height: 2px;
    background: linear-gradient(257.39deg, #efb467 0%, #de8667 100%);
    transition: all 0.15s linear;
    transform-origin: 2.5px;
    &.burger {
      display: flex;
    }
    &.xmark {
      :first-child {
        transform: rotate(45deg);
      }

      :nth-child(2) {
        opacity: 0;
        transform: translateX(20px);
      }

      :nth-child(3) {
        transform: rotate(-45deg);
      }
    }
  }
  @media (max-width: 900px) {
    display: flex;
  }
`;

export const AddMobile = styled.div`
  display: none;
  @media (max-width: 900px) {
    width: 50px;
    display: flex;

    &.showButton {
      display: flex;
    }
    &.hideButton {
      display: none;
    }
  }
`;

export const ButtonLoggedin = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;

  background: #ffffff;
  border-radius: 60px;
  border: none;

  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);

  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  flex: none;
  cursor: pointer;

  div {
    height: 140%;
  }

  @media (max-width: 900px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    width: 100%;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

export const ButtonP = styled.button`
  width: 25px;
  height: 25px;

  background: #ffffff;
  border: none;

  cursor: pointer;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const MobileLink = styled.div`
  display: none;
  padding: 0px;

  cursor: pointer;
  p {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;

    color: #322d38;
    span {
      color: #de8667;
    }
  }

  @media (max-width: 900px) {
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const DesktopLink = styled.div`
  display: flex;
  padding: 0px;
  p {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
    cursor: pointer;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;
