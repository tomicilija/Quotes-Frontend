import { Container, Tittle, CardWrapper, SeeMore } from "./CardGrid.style";
import Masonry from "react-masonry-css";
import Card from "../card/Card";
import { useState, useEffect } from "react";

const breakpointColumnsObj = {
  default: 3,
  1340: 2,
  900: 1,
};

const CardGrid = () => {
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
      <Tittle>
        <h4>Most upvoted quotes</h4>
        <p>
          Most upvoted quotes on the platform. Sign up or login to like the
          quotes and keep them saved in your profile
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

        <SeeMore>Sign up to see more</SeeMore>
      </CardWrapper>
    </Container>
  );
};

export default CardGrid;
