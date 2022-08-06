import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  overflow-x: hidden;
  width: 100%;
  height: 100vh;
  margin-bottom: -65px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 900px) {
    margin: -103px 0;
  }
`;

export const Background = styled.div`
  position: absolute;
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
