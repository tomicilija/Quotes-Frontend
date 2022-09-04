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
import { ReactComponent as UpvoteBlack } from "../../assets/arrows/UpVoteBlack.svg";
import { ReactComponent as DownVoteBlack } from "../../assets/arrows/DownVoteBlack.svg";
import { ReactComponent as UpvoteOrange } from "../../assets/arrows/UpVoteOrange.svg";
import { ReactComponent as DownVoteOrange } from "../../assets/arrows/DownVoteOrange.svg";

/* Profile Image Todo */
import { ReactComponent as ProfilePicture } from "./Location/image.svg";
import {
  deleteDownvote,
  deleteUpvote,
  downvoteUser,
  getMyQuote,
  getUsersQuote,
  upvoteUser,
  voteCheck,
} from "../../api/QuoteApi";
import { useEffect, useState } from "react";

interface VoteCardProps {
  userid: string;
  karma: number;
  quote: string;
  firstName: string;
  lastName: string;
}

const Card: React.FC<VoteCardProps> = ({
  userid,
  karma,
  quote,
  firstName,
  lastName,
}) => {
  const isLoggedIn = localStorage.getItem("accessToken");
  const [quoteStatus, setQuoteStatus] = useState("");
  const [userKarma, setUserKarma] = useState(0);

  useEffect(() => {
    setUserKarma(karma);
  }, [karma]);

  useEffect(() => {
    voteCheck(userid, JSON.parse(isLoggedIn!))
      .then((text) => setQuoteStatus(text))
      .catch((e) => {
        console.log("Error: Cant get state" + e);
      });
  });

  const handleUpvote = async () => {
    if (quoteStatus === "NEUTRAL") {
      upvoteUser(userid, JSON.parse(isLoggedIn!))
        .then(() => {
          getUsersQuote(userid)
            .then((quote) => {
              setUserKarma(quote.karma);
            })
            .catch((e) => {
              console.log(e);
            });
        })
        .catch((e) => {
          console.log(e);
        });
    } else if (quoteStatus === "DOWNVOTE") {
      deleteDownvote(userid, JSON.parse(isLoggedIn!))
        .then(() => {
          upvoteUser(userid, JSON.parse(isLoggedIn!))
            .then(() => {
              getUsersQuote(userid)
                .then((quote) => {
                  setUserKarma(quote.karma);
                })
                .catch((e) => {
                  console.log(e);
                });
            })
            .catch((e) => {
              console.log(e);
            });
        })
        .then(() => {
          getUsersQuote(userid)
            .then((quote) => {
              setUserKarma(quote.karma);
            })
            .catch((e) => {
              console.log(e);
            });
        })
        .catch((e) => {
          console.log(e);
        });
    } else if (quoteStatus === "UPVOTE") {
      deleteUpvote(userid, JSON.parse(isLoggedIn!))
        .then(() => {
          getUsersQuote(userid)
            .then((quote) => {
              setUserKarma(quote.karma);
            })
            .catch((e) => {
              console.log(e);
            });
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  const handleDownvote = async () => {
    if (quoteStatus === "NEUTRAL") {
      downvoteUser(userid, JSON.parse(isLoggedIn!))
        .then(() => {
          getUsersQuote(userid)
            .then((quote) => {
              setUserKarma(quote.karma);
            })
            .catch((e) => {
              console.log(e);
            });
        })
        .catch((e) => {
          console.log(e);
        });
    } else if (quoteStatus === "UPVOTE") {
      deleteUpvote(userid, JSON.parse(isLoggedIn!))
        .then(() => {
          downvoteUser(userid, JSON.parse(isLoggedIn!))
            .then(() => {
              getUsersQuote(userid)
                .then((quote) => {
                  setUserKarma(quote.karma);
                })
                .catch((e) => {
                  console.log(e);
                });
            })
            .catch((e) => {
              console.log(e);
            });
        })
        .then(() => {
          getUsersQuote(userid)
            .then((quote) => {
              setUserKarma(quote.karma);
            })
            .catch((e) => {
              console.log(e);
            });
        })
        .catch((e) => {
          console.log(e);
        });
    } else if (quoteStatus === "DOWNVOTE") {
      deleteDownvote(userid, JSON.parse(isLoggedIn!))
        .then(() => {
          getUsersQuote(userid)
            .then((quote) => {
              setUserKarma(quote.karma);
            })
            .catch((e) => {
              console.log(e);
            });
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <Container>
      <Votes>
        <Arrow onClick={() => handleUpvote()}>
          {quoteStatus === "UPVOTE" ? <UpvoteOrange /> : <UpvoteBlack />}
        </Arrow>
        <VotesValue>{userKarma}</VotesValue>
        <Arrow onClick={() => handleDownvote()}>
          {quoteStatus === "DOWNVOTE" ? <DownVoteOrange /> : <DownVoteBlack />}
        </Arrow>
      </Votes>
      <Quote>
        <QuoteText>
          <p>{quote}</p>
        </QuoteText>
        <QuoteAuthor>
          <AuthorPicture>
            {/*<ProfilePicture />*/}
            <img src="https://picsum.photos/50/50" alt="avatar" />
          </AuthorPicture>
          <AuthorName>
            <p>
              {firstName} {lastName}
            </p>
          </AuthorName>
        </QuoteAuthor>
      </Quote>
    </Container>
  );
};

export default Card;
