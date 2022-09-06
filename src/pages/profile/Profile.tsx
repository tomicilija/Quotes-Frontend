import { useState, useEffect, useContext } from "react";
import {
  Container,
  Background,
  BackgroundW,
  ProfileBanner,
  ProfilePicture,
  ProfilePictureicon,
  ProfileInfo,
  ProfileName,
  ProfileKarma,
  Quote,
  Likes,
  SeeMore,
  NotFound,
} from "./Profile.style";
import Card from "../../components/card/Card";
import CardGrid from "../../components/card-grid/CardGrid";
import { Link, useParams } from "react-router-dom";
import { ReactComponent as DefaultProfileIcon } from "../../assets/icons/user-profile-svgrepo-com.svg";
import { getSignedInUser, getUserById, getUserVotes } from "../../api/UserApi";
import { getMyQuote, getUserQuote } from "../../api/QuoteApi";
import { UpdateContext } from "../../utils/UpdateContext";
import { QuoteResponse } from "../../interfaces/QuoteInterfaces";

// On profile page user quote, karma, and liked quotes is displayed

const Profile = () => {
  const isLoggedIn = localStorage.getItem("accessToken");
  const [userid, setUserId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userQquote, setUserQquote] = useState("");
  const [userKarma, setUserKarma] = useState(0);
  const [userVotes, setUserVotes] = useState<QuoteResponse[]>([]);
  const [userHasLikes, setUserHasLikes] = useState(false);
  const [showedQuotesDesktop, setShowedQuotesDesktop] = useState(9);
  const [showedQuotesMobile, setShowedQuotesMobile] = useState(4);
  const [isThreeCollumnSizeGrid, setIsThreeCollumnSizeGrid] = useState(window.innerWidth > 1340);
  const { updated } = useContext(UpdateContext);
  const { id } = useParams();

  /*
   * Profile page shows profile of logged in user when clicked on profile icon in navbar
   * or profile of other usr when clicked on name on quote card
   * 
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

  const loadQuotesDesktop = () => {
    setShowedQuotesDesktop((prevValue) => prevValue + 9);
  };

  const loadQuotesMobile = () => {
    setShowedQuotesMobile((prevValue) => prevValue + 4);
  };

  useEffect(() => {
    if (isLoggedIn) {
      if (id){
        (async () => {
          const response = await getUserById(id, JSON.parse(isLoggedIn));
          setFirstName(response.name);
          setLastName(response.surname);
          setUserId(response.id);
        })().catch((e) => {
          console.log("Error: Cant get user. \n" + e);
          window.location.href = "/";
        });
  
        (async () => {
          const response = await getUserQuote(id);
          setUserQquote(response.text);
          setUserKarma(response.karma);
        })().catch((e) => {
          console.log("Error! Cant get users quote. \n" + e);
        });
      } else{
        (async () => {
          const response = await getSignedInUser(JSON.parse(isLoggedIn));
          setFirstName(response.name);
          setLastName(response.surname);
          setUserId(response.id);
        })().catch((e) => {
          console.log("Error: Cant get user. \n" + e);
        });
  
        (async () => {
          const response = await getMyQuote(JSON.parse(isLoggedIn));
          setUserQquote(response.text);
          setUserKarma(response.karma);
        })().catch((e) => {
          console.log("Error! Cant get users quote. \n" + e);
        });
      }

      if (userid) {
        (async () => {
          const response = await getUserVotes(userid, JSON.parse(isLoggedIn));
          if (response) {
            setUserVotes(response);
            setUserHasLikes(true);
          } else {
            setUserHasLikes(false);
            console.log("User has no likes of other posts!");
          }
        })().catch((e) => {
          console.log("Error! Cant get users votes: " + e);
        });
      }
    }
  }, [id, userid, updated, isLoggedIn]);

  return (
    <Container>
      {isLoggedIn ? (
        <>
          <Background />
          <BackgroundW />
          <ProfileBanner>
            <ProfilePicture>
              <ProfilePictureicon>
                <DefaultProfileIcon />
              </ProfilePictureicon>
            </ProfilePicture>
            <ProfileInfo>
              <ProfileName>
                {firstName} {lastName}
              </ProfileName>
              <ProfileKarma>
                Quotastic Karma
                <p>{userKarma}</p>
              </ProfileKarma>
            </ProfileInfo>
          </ProfileBanner>
          <Quote>
            Quote
            {userQquote ? (
              <Card
                userid={userid}
                quote={userQquote}
                firstName={firstName}
                lastName={lastName}
                karma={userKarma}
              />
            ) : (
              <p>
                Are you feeling <span>inspired?</span> Press + icon to write a
                quote.
              </p>
            )}
          </Quote>
          <Likes>
            <h3>Likes</h3>
            {userHasLikes ? (
              <>
                {isThreeCollumnSizeGrid ? (
                  <>
                    <CardGrid
                      quotes={userVotes.slice(0, showedQuotesDesktop)}
                    />
                    <SeeMore onClick={loadQuotesDesktop}>Load more</SeeMore>
                  </>
                ) : (
                  <>
                    <CardGrid quotes={userVotes.slice(0, showedQuotesMobile)} />
                    <SeeMore onClick={loadQuotesMobile}>Load more</SeeMore>
                  </>
                )}
              </>
            ) : (
              <p>
                Do you like any quotes you see <span>here?</span> Show it by
                upvoating the <span>quote.</span>
              </p>
            )}
          </Likes>
        </>
      ) : (
        <NotFound>
          <h1>Error 402! Unauthorized</h1>
          <p>You are not logged in. Please log in to see your profile..</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            Go to homepage
          </Link>
        </NotFound>
      )}
    </Container>
  );
};

export default Profile;
