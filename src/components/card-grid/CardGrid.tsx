import { CardWrapper, NotFound } from "./CardGrid.style";
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
  quotes: {
    //userId: number,
    karma: number;
    text: string;
    name: string;
    surname: string;
  }[];
}

const CardGrid: React.FC<QuotesGridProps> = ({ quotes }) => {
  if (quotes) {
    return (
      <CardWrapper>
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
      </CardWrapper>
    );
  } else {
    /* If no quotes exist */
    return <NotFound> <h1>OOPS!</h1> <p>This is looking a little empty</p></NotFound>;
  }
};

export default CardGrid;
