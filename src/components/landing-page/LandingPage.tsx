import { useState, useEffect } from "react";
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
  CardWrapper,
  SeeMore,
  FeturedQuotes,
  FeturedFront,
  FeturedMid,
  FeturedBack,
  SloganWrapper,
  Slogan,
  Button,
} from "./LandingPage.style";
import Masonry from "react-masonry-css";
import Card from "../landing-page/card/Card";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";

/* Background Images */
import { ReactComponent as BackgroundTop } from "../../assets/background/vectorTop.svg";
import { ReactComponent as BackgroundMid } from "../../assets/background/vectorMid.svg";
import { ReactComponent as BackgroundLow } from "../../assets/background/vectorLow.svg";

const breakpointColumnsObj = {
  default: 3,
  1340: 2,
  900: 1,
};
const LandingPage = () => {
  const isLoggedIn = localStorage.getItem("accessToken");
  // Show only 4 cards on mobile & 9 on desktop
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1340);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1340);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
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
            <Card />
          </Quote>
          <MostUpvoated>
            <Tittle>
              <h4>Most upvoted quotes</h4>
              <p>
                Most upvoted quotes on the platform. Give a like to the ones you
                like to keep them saved in your profile.
              </p>
            </Tittle>
            <CardWrapper>
              {/* Show only 4 cards on mobile & 9 on desktop */}
              {isDesktop ? (
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                >
                  {[...Array(9)].map((_, i) => (
                    <Card />
                  ))}
                </Masonry>
              ) : (
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                >
                  {[...Array(4)].map((_, i) => (
                    <Card />
                  ))}
                </Masonry>
              )}
              <SeeMore>Load more</SeeMore>
            </CardWrapper>
          </MostUpvoated>
          <MostUpvoated>
            <Tittle>
              <h4>Most recent quotes</h4>
              <p>
                Recent quotes updates as soon user adds new quote. Go ahed show
                them that you seen the new quote and like the ones you like.
              </p>
            </Tittle>
            <CardWrapper>
              {/* Show only 4 cards on mobile & 9 on desktop */}
              {isDesktop ? (
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                >
                  {[...Array(9)].map((_, i) => (
                    <Card />
                  ))}
                </Masonry>
              ) : (
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                >
                  {[...Array(4)].map((_, i) => (
                    <Card />
                  ))}
                </Masonry>
              )}
              <SeeMore>Load more</SeeMore>
            </CardWrapper>
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
              <FeturedFront>
                <Card />
              </FeturedFront>
              <FeturedMid>
                <Card />
              </FeturedMid>
              <FeturedBack>
                <Card />
              </FeturedBack>
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
            <CardWrapper>
              {/* Show only 4 cards on mobile & 9 on desktop */}
              {isDesktop ? (
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                >
                  {[...Array(9)].map((_, i) => (
                    <Card />
                  ))}
                </Masonry>
              ) : (
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                >
                  {[...Array(4)].map((_, i) => (
                    <Card />
                  ))}
                </Masonry>
              )}
              <SeeMore>Load more</SeeMore>
            </CardWrapper>
          </MostUpvoated>
        </>
      )}
    </Container>
  );
};

export default LandingPage;
