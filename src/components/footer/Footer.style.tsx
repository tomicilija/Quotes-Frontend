import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  justify-content: space-between;
  align-content: flex-end;
  align-items: flex-end;
  padding: 20px 70px;
  width: 100%;

  /* Gradient */
  background: linear-gradient(257.39deg, #efb467 0%, #de8667 100%);
  /* Shadow */

  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  border-radius: 32px 32px 0px 0px;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    margin-top: 50px;

    height: 65px;
  }
`;

export const Logo = styled.div`
  width: 33px;
  height: 25px;
`;

export const Rights = styled.div`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: right;

  color: #ffffff;

  a {
    color: #ffffff;
    text-decoration: none;

    &:hover {
      color: #ffffff;
      text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
    }
  }

  @media (max-width: 900px) {
    width: 230px;
    display: flex;
    flex-direction: row;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    /* identical to box height */

    text-align: right;
  }
`;
