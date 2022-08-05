import {
  Container,
  BgTop,
  BgMid,
  BgLow,
  Wrapper,
  Tittle,
  FeturedQuotes,
  FeturedFront,
  FeturedMid,
  FeturedBack,
  SloganWrapper,
  Slogan,
  Button,
} from "./Hero.style";

import Card from "../card/Card";

/* Background Images */
import { ReactComponent as BackgroundTop } from "../../../assets/background/vectorTop.svg";
import { ReactComponent as BackgroundMid } from "../../../assets/background/vectorMid.svg";
import { ReactComponent as BackgroundLow } from "../../../assets/background/vectorLow.svg";

const Hero = () => {
  return (
    <Container>
    {/* TODO Solve for mobile */}
      <BgTop>
        <BackgroundTop />
      </BgTop>
      <BgMid>
        <BackgroundMid />
      </BgMid>
      <BgLow>
        <BackgroundLow />
      </BgLow>
      <Wrapper>
        <Tittle>
          <h1>
            Welcome to <span>Quotastic</span>
          </h1>
          <h5>
            Quotastic is free online platform for you to explore the quips,
            quotes, and proverbs. Sign up and express yourself.
          </h5>
          <Button>Sign up</Button>
        </Tittle>
        {/* TODO Maybe solve with  CSS Grid */}
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
      </Wrapper>
      <SloganWrapper>
        <Slogan>
          <h2>
            Explore the world of <span>fantastic quotes</span>
          </h2>
        </Slogan>
      </SloganWrapper>
    </Container>
  );
};

export default Hero;
