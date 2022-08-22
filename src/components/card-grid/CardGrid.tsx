import { Container, Tittle, CardWrapper, SeeMore } from "./CardGrid.style";
import Masonry from "react-masonry-css";
import Card from "../card/Card";
import { useState, useEffect } from "react";
import { getUser } from "../../api/UserApi";
import { getMyQuote } from "../../api/QuoteApi";

const breakpointColumnsObj = {
  default: 3,
  1340: 2,
  900: 1,
};

interface QuotesGridProps {
  quotes: 
    {
      //userId: number,
      karma: number,
      text: string,
      name: string,
      surname: string,
    }[];
}

const CardGrid: React.FC<QuotesGridProps> = ({ quotes }) => {
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
    <CardWrapper>
      {/* Show only 4 cards on mobile & 9 on desktop */}
      {isDesktop ? (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
        >
          {quotes.map((value) => (
            <Card
              quote={value.text}
              firstName={value.name}
              lastName={value.surname}
              karma={value.karma}
            />
          ))}
        </Masonry>
      ) : (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
        >
          {quotes.map((value) => (
            <Card
              quote={value.text}
              firstName={value.name}
              lastName={value.surname}
              karma={value.karma}
            />
          ))}
        </Masonry>
      )}
      <SeeMore>Load more</SeeMore>
    </CardWrapper>
  );
};

export default CardGrid;
