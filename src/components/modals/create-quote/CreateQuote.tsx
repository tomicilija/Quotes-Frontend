import React, { FC } from "react";
import {
  Container,
  Wrapper,
  SettingsHeader,
  SettingsForm,
  SettingsSection,
  TwoInRow,
} from "./CreateQuote.style";

import { useState, useEffect } from "react";
import {
  deleteMyQuote,
  getMyQuote,
  postMyQuote,
  updateMyQuote,
} from "../../../api/QuoteApi";
import { AxiosError } from "axios";

interface Props {
  isQuoteOpen: boolean;
  setIsQuoteOpen: (isQuoteOpen: boolean) => void;
}

const CreateQuote: FC<Props> = ({ isQuoteOpen, setIsQuoteOpen }) => {
  const isLoggedIn = localStorage.getItem("accessToken");

  const [userQquote, setUserQquote] = useState("");
  const [newUserQquote, setNewUserQquote] = useState("");
  const [isNew, setIsNew] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getMyQuote(JSON.parse(isLoggedIn!))
      .then(({ text }) => setUserQquote(text))
      .catch((error: AxiosError) => {
        if (error.response?.status === 404) setIsNew(true);
      });
  });

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (isNew) {
      postMyQuote(newUserQquote, JSON.parse(isLoggedIn!))
        .then(() => {
          setIsQuoteOpen(false);
        })
        .catch((err) => {
          console.log(err);
          setErrorMessage(err.message);
        });
    } else {
      updateMyQuote(newUserQquote, JSON.parse(isLoggedIn!))
        .then(() => {
          setIsQuoteOpen(false);
        })
        .catch((err) => {
          console.log(err);
          setErrorMessage(err.message);
        });
    }
  };

  const deleteQuote = async () => {
    deleteMyQuote(JSON.parse(isLoggedIn!))
      .then(() => {
        setIsQuoteOpen(false);
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(err.message);
      });
  };

  return (
    <>
      {isQuoteOpen ? (
        <Container>
          <Wrapper>
            <SettingsHeader>
              <h1>
                Are you feeling <span>inspired?</span>
              </h1>
              <h5>
                You can post one quote. You can alse delete the quote or edit in
                this window.
              </h5>
              <h3>{ErrorMessage}</h3>
            </SettingsHeader>
            {/* <DefaultProfilePicture /> */}
            <form onSubmit={handleSubmit}>
              <SettingsForm>
                <SettingsSection>
                  <textarea
                    id="quote"
                    placeholder={userQquote}
                    value={newUserQquote}
                    maxLength={350}
                    required
                    onChange={(e) => setNewUserQquote(e.target.value)}
                  />
                </SettingsSection>
                <SettingsSection>
                  <TwoInRow>
                    <button type="submit">Submit</button>
                    <p onClick={() => setIsQuoteOpen(false)}>Cancel</p>
                  </TwoInRow>
                  <button onClick={deleteQuote}>Delete Quote</button>
                </SettingsSection>
              </SettingsForm>
            </form>
          </Wrapper>
        </Container>
      ) : null}
    </>
  );
};

export default CreateQuote;
