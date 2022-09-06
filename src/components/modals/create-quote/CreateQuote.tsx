import { FC, useContext, useState, useEffect } from "react";
import {
  Container,
  Wrapper,
  SettingsHeader,
  SettingsForm,
  SettingsSection,
  TwoInRow,
} from "./CreateQuote.style";
import {
  deleteMyQuote,
  getMyQuote,
  postMyQuote,
  updateMyQuote,
} from "../../../api/QuoteApi";
import { AxiosError } from "axios";
import { UpdateContext } from "../../../utils/UpdateContext";
import { CreateQuoteProps } from "../../../interfaces/QuoteInterfaces";

// Adding, updating, and deleteing quote from loggedin user using modal, that overlays whole page

const CreateQuote: FC<CreateQuoteProps> = ({ isQuoteOpen, setIsQuoteOpen }) => {
  const isLoggedIn = localStorage.getItem("accessToken");
  const [userQuote, setUserQuote] = useState("");
  const [newUserQuote, setNewUserQuote] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [quoteDoesExist, setQuoteDoesExist] = useState(false);
  const { updated, setUpdated } = useContext(UpdateContext);

  useEffect(() => {
    (async () => {
      const response = await getMyQuote(JSON.parse(isLoggedIn!));
      setUserQuote(response.text);
    })().catch((error: AxiosError) => {
      if (error.response?.status === 404) setQuoteDoesExist(true);
    });
  }, [isLoggedIn]);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault(); // To prevent refreshing the page on form submit
    if (quoteDoesExist) {
      (async () => {
        await postMyQuote(newUserQuote, JSON.parse(isLoggedIn!));
        setUpdated(!updated);
        setIsQuoteOpen(false);
      })().catch((err) => {
        setErrorMessage(err.response.data.message);
      });
    } else {
      (async () => {
        await updateMyQuote(newUserQuote, JSON.parse(isLoggedIn!));
        setUpdated(!updated);
        setIsQuoteOpen(false);
      })().catch((err) => {
        setErrorMessage(err.response.data.message);
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
              <h3>{errorMessage}</h3>
            </SettingsHeader>
            {/* <DefaultProfilePicture /> */}
            <form onSubmit={handleSubmit}>
              <SettingsForm>
                <SettingsSection>
                  <textarea
                    id="quote"
                    placeholder={userQuote}
                    value={newUserQuote}
                    maxLength={350}
                    required
                    onChange={(e) => setNewUserQuote(e.target.value)}
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
