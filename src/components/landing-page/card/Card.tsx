import {
  Container,
  Votes,
  UpArrow,
  DownArrow,
  VotesValue,
  Quote,
  QuoteAuthor,
  QuoteText,
  AuthorName,
  AuthorPicture,
} from "./Card.style";

/* Background Image */
import { ReactComponent as Upvote } from "../../../assets/arrows/UpVote.svg";
import { ReactComponent as DownVote } from "../../../assets/arrows/DownVote.svg";

/* Profile Image Todo */
import { ReactComponent as ProfilePicture } from "./Location/image.svg";

const Card = () => {
  return (
    <Container>
      <Votes>
        <UpArrow>
          <Upvote />
        </UpArrow>
        <VotesValue>274</VotesValue>
        <DownArrow>
          <DownVote />
        </DownArrow>
      </Votes>
      <Quote>
        <QuoteText>
          <p>
            Lorem ipsum dolor sit amet conse tetur adipisicing elit. Quisquam,
            quidem. 
          </p>
        </QuoteText>
        <QuoteAuthor>
          <AuthorPicture>
            {/*<ProfilePicture />*/}
            <img src="https://picsum.photos/50/50" alt="avatar" />
          </AuthorPicture>
          <AuthorName>
            <p>Author John Doe</p>
          </AuthorName>
        </QuoteAuthor>
      </Quote>
    </Container>
  );
};

export default Card;
