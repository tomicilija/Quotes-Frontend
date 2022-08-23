import {
  Container,
  Votes,
  Arrow,
  VotesValue,
  Quote,
  QuoteAuthor,
  QuoteText,
  AuthorName,
  AuthorPicture,
} from "./Card.style";

/* Background Image */
import { ReactComponent as Upvote } from "../../assets/arrows/UpVote.svg";
import { ReactComponent as DownVote } from "../../assets/arrows/DownVote.svg";

/* Profile Image Todo */
import { ReactComponent as ProfilePicture } from "./Location/image.svg";

interface VoteCardProps {
  //userId: number;
  karma: number;
  quote: string;
  firstName: string;
  lastName: string;
}
const Card: React.FC<VoteCardProps>  = ({
  //userId,
  karma,
  quote,
  firstName,
  lastName,
}) => {
  return (
    <Container>
      <Votes>
        <Arrow>
          <Upvote />
        </Arrow>
        <VotesValue>{karma}</VotesValue>
        <Arrow>
          <DownVote />
        </Arrow>
      </Votes>
      <Quote>
        <QuoteText>
          <p>
            {quote} 
          </p>
        </QuoteText>
        <QuoteAuthor>
          <AuthorPicture>
            {/*<ProfilePicture />*/}
            <img src="https://picsum.photos/50/50" alt="avatar" />
          </AuthorPicture>
          <AuthorName>
            <p>{firstName} {lastName}</p>
          </AuthorName>
        </QuoteAuthor>
      </Quote>
    </Container>
  );
};

export default Card;
