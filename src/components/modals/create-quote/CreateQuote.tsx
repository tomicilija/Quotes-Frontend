import React, { FC } from "react";
import {
  Container,
  Wrapper,
  SettingsHeader,
  SettingsForm,
  SettingsSection,
  TwoInRow,
} from "./CreateQuote.style";

interface Props {
  isQuoteOpen: boolean;
  setIsQuoteOpen: (isQuoteOpen: boolean) => void;
}
const CreateQuote: FC<Props> = ({ isQuoteOpen, setIsQuoteOpen }) => {
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
                You can post one quote. You can delete it on your profile or
                edit in this window.
              </h5>
            </SettingsHeader>
            {/* <DefaultProfilePicture /> */}
            <SettingsForm>
              <SettingsSection>
                <textarea id="quote" />
              </SettingsSection>
              <SettingsSection>
                <TwoInRow>
                  <button onClick={() => setIsQuoteOpen(false)} type="submit">
                    Submit
                  </button>
                  <p onClick={() => setIsQuoteOpen(false)}>Cancel</p>
                </TwoInRow>
              </SettingsSection>
            </SettingsForm>
          </Wrapper>
        </Container>
      ) : null}
    </>
  );
};

export default CreateQuote;
