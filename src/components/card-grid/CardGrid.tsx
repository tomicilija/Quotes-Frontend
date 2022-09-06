import { CardWrapper, NotFound } from "./CardGrid.style";
import Masonry from "react-masonry-css";
import Card from "../card/Card";
import { GridProps } from "../../interfaces/QuoteInterfaces";

// Recives array of quotes and arranges them into collumns

const CardGrid: React.FC<GridProps> = ({ quotes }) => {
  let breakpointColumnsObj;
  if (quotes.length < 3) {
    breakpointColumnsObj = {
      default: quotes.length,
      1340: quotes.length,
      900: 1,
    };
  } else {
    breakpointColumnsObj = {
      default: 3,
      1340: 2,
      900: 1,
    };
  }

  if (quotes) {
    return (
      <CardWrapper>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
        >
          {quotes.map((value) => (
            <Card
              userid={value.userid}
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
    return (
      <NotFound>
        <h1>OOPS!</h1> <p>This is looking a little empty</p>
      </NotFound>
    );
  }
};

export default CardGrid;
