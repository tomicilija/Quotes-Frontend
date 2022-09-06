import { useState, useEffect, useContext } from "react";
import {
  Container,
  BgTop,
  BgMid,
  BgLow,
  Wrapper,
  HeroWrapper,
  Quote,
  MostUpvoated,
  Tittle,
  HeroTittle,
  FeturedQuotes,
  FeturedTop,
  FeturedMid,
  FeturedBottom,
  SloganWrapper,
  Slogan,
  Button,
  SeeMore,
} from "./LandingPage.style";
import Card from "../../components/card/Card";
import CardGrid from "../../components/card-grid/CardGrid";
import { Link } from "react-router-dom";
import { getMostUpvoatedQuotes, getMostRecentQuotes } from "../../api/QuoteApi";
import { ReactComponent as BackgroundTop } from "../../assets/background/vectorTop.svg";
import { ReactComponent as BackgroundMid } from "../../assets/background/vectorMid.svg";
import { ReactComponent as BackgroundLow } from "../../assets/background/vectorLow.svg";
import { UpdateContext } from "../../utils/UpdateContext";
import { QuoteResponse } from "../../interfaces/QuoteInterfaces";

// One version of landing page can be shown to anyone, logged in user sees different version, same for mobile users

const quote = {
  userid: "",
  karma: 0,
  text: "",
  name: "",
  surname: "",
};

const LandingPage = () => {
  const isLoggedIn = localStorage.getItem("accessToken");
  const [mostLikedQuotes, setMostLikedQuotes] = useState<QuoteResponse[]>([]);
  const [recentQuotes, setRecentQuotes] = useState<QuoteResponse[]>([]);
  const [randomQuote, setRandomQuote] = useState<QuoteResponse>(quote);
  const [heroQuote1, setHeroQuote1] = useState<QuoteResponse>(quote);
  const [heroQuote2, setHeroQuote2] = useState<QuoteResponse>(quote);
  const [heroQuote3, setHeroQuote3] = useState<QuoteResponse>(quote);
  const [showedLikedQuotesDesktop, setShowedLikedQuotesDesktop] = useState(9);
  const [showedRecentQuotesDesktop, setShowedRecentQuotesDesktop] = useState(9);
  const [showedLikedQuotesMobile, setShowedLikedQuotesMobile] = useState(4);
  const [showedRecentQuotesMobile, setShowedRecentQuotesMobile] = useState(4);
  const [isThreeCollumnSizeGrid, setIsThreeCollumnSizeGrid] = useState(window.innerWidth > 1340);
  const { updated } = useContext(UpdateContext);

  /*
   * Quote cards can be shown in grid of 3, 2, or 1 columns, depending on screen width
   * 3 column grid shows max of 9 cards and lods by 9 cards
   * 2 and 1 column shows max of 4 cards, and loads by 4 cards
   */

  const updateScreenSize = () => {
    setIsThreeCollumnSizeGrid(window.innerWidth > 1340);
  };
  
  useEffect(() => {
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  });

  const loadLikedQuotesDesktop = () => {
    setShowedLikedQuotesDesktop((prevValue) => prevValue + 9);
  };

  const loadLikedQuotesMobile = () => {
    setShowedLikedQuotesMobile((prevValue) => prevValue + 4);
  };

  const loadRecentQuotesDesktop = () => {
    setShowedRecentQuotesDesktop((prevValue) => prevValue + 9);
  };

  const loadRecentQuotesMobile = () => {
    setShowedRecentQuotesMobile((prevValue) => prevValue + 4);
  };

  useEffect(() => {
    (async () => {
      const quotes = await getMostUpvoatedQuotes();
      setHeroQuote1(quotes[0]);
      setHeroQuote2(quotes[1]);
      setHeroQuote3(quotes[2]);
      setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const quotes = await getMostUpvoatedQuotes();
      setMostLikedQuotes(quotes);
    })();
    if (isLoggedIn) {
      (async () => {
        const quotes = await getMostRecentQuotes(JSON.parse(isLoggedIn));
        setRecentQuotes(quotes);
      })();
    }
  }, [updated, isLoggedIn]);

  return (
    <Container>
      <BgTop>
        <BackgroundTop />
      </BgTop>
      <BgMid>
        <BackgroundMid />
      </BgMid>
      <BgLow>
        <BackgroundLow />
      </BgLow>
      {isLoggedIn ? (
        <Wrapper>
          <Quote>
            Quote of the day
            <span>Quote of the day is randomly choosen quote.</span>
            <Card
              userid={randomQuote.userid}
              quote={randomQuote.text}
              firstName={randomQuote.name}
              lastName={randomQuote.surname}
              karma={randomQuote.karma}
            />
          </Quote>
          <MostUpvoated>
            <Tittle>
              <h4>Most upvoted quotes</h4>
              <p>
                Most upvoted quotes on the platform. Give a like to the ones you
                like to keep them saved in your profile.
              </p>
            </Tittle>
            {isThreeCollumnSizeGrid ? (
              <>
                <CardGrid
                  quotes={mostLikedQuotes.slice(0, showedLikedQuotesDesktop)}
                />
                <SeeMore onClick={loadLikedQuotesDesktop}>Load more</SeeMore>
              </>
            ) : (
              <>
                <CardGrid
                  quotes={mostLikedQuotes.slice(0, showedLikedQuotesMobile)}
                />
                <SeeMore onClick={loadLikedQuotesMobile}>Load more</SeeMore>
              </>
            )}
          </MostUpvoated>
          <MostUpvoated>
            <Tittle>
              <h4>Most recent quotes</h4>
              <p>
                Recent quotes updates as soon user adds new quote. Go ahed show
                them that you seen the new quote and like the ones you like.
              </p>
            </Tittle>
            {isThreeCollumnSizeGrid ? (
              <>
                <CardGrid
                  quotes={recentQuotes.slice(0, showedRecentQuotesDesktop)}
                />
                <SeeMore onClick={loadRecentQuotesDesktop}>Load more</SeeMore>
              </>
            ) : (
              <>
                <CardGrid
                  quotes={recentQuotes.slice(0, showedRecentQuotesMobile)}
                />
                <SeeMore onClick={loadRecentQuotesMobile}>Load more</SeeMore>
              </>
            )}
          </MostUpvoated>
        </Wrapper>
      ) : (
        <>
          <HeroWrapper>
            <HeroTittle>
              <h1>
                Welcome to <span>Quotastic</span>
              </h1>
              <h5>
                Quotastic is free online platform for you to explore the quips,
                quotes, and proverbs. Sign up and express yourself.
              </h5>
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <Button>Sign up</Button>
              </Link>
            </HeroTittle>
            <FeturedQuotes>
              <FeturedTop>
                <Card
                  userid={heroQuote2.userid}
                  quote={heroQuote2.text}
                  firstName={heroQuote2.name}
                  lastName={heroQuote2.surname}
                  karma={heroQuote2.karma}
                />
              </FeturedTop>
              <FeturedMid>
                <Card
                  userid={heroQuote1.userid}
                  quote={heroQuote1.text}
                  firstName={heroQuote1.name}
                  lastName={heroQuote1.surname}
                  karma={heroQuote1.karma}
                />
              </FeturedMid>
              <FeturedBottom>
                <Card
                  userid={heroQuote3.userid}
                  quote={heroQuote3.text}
                  firstName={heroQuote3.name}
                  lastName={heroQuote3.surname}
                  karma={heroQuote3.karma}
                />
              </FeturedBottom>
            </FeturedQuotes>
          </HeroWrapper>
          <SloganWrapper>
            <Slogan>
              <h2>
                Explore the world of <span>fantastic quotes</span>
              </h2>
            </Slogan>
          </SloganWrapper>
          <MostUpvoated>
            <Tittle>
              <h4>Most upvoted quotes</h4>
              <p>
                Most upvoted quotes on the platform. Give a like to the ones you
                like to keep them saved in your profile.
              </p>
            </Tittle>
            {isThreeCollumnSizeGrid ? (
              <CardGrid quotes={mostLikedQuotes.slice(0, 9)} />
            ) : (
              <CardGrid quotes={mostLikedQuotes.slice(0, 4)} />
            )}
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <SeeMore>Sign up to see more</SeeMore>
            </Link>
          </MostUpvoated>
        </>
      )}
    </Container>
  );
};

export default LandingPage;
