import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;

  background: #ffffff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  border-radius: 8px;

  margin-left: 20px;
  margin-bottom: 20px;
  padding: 16px 32px 16px 16px;
  gap: 21px;
  max-width: 420px;
  min-height: 115px;

  @media (max-width: 900px) {
    max-width: 350px;
    min-height: 120px;
    border-radius: 16px;
    margin-left: 0px;
  }
`;

export const Votes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 8px;
  width: 30px;
  margin: 5px;
  text-align: center;
  margin: auto 0;
`;

export const Arrow = styled.div`
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover {
    filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.5));
  }
`;

export const VotesValue = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 19px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #000000;
`;

export const Quote = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 8px 0px;
  gap: 21px;

  @media (max-width: 900px) {
    max-width: 255px;
    min-height: 90px;
  }
`;

export const QuoteText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #000000;

  @media (max-width: 900px) {
    max-width: 255px;
    min-height: 20px;
  }
`;

export const QuoteAuthor = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;

  cursor: pointer;

  @media (max-width: 900px) {
    max-width: 255px;
    min-height: 24px;
  }
`;

export const AuthorPicture = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  img {
    width: 24px;
    height: 24px;

    background: url(.jpg);
    &:hover {
      filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.5));
    }
  }
`;

export const AuthorName = styled.div`
  width: 290px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.4px;

  color: #000000;
`;
