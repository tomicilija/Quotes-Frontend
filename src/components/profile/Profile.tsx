import { useState, useEffect } from "react";
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
  CardWrapper,
  SeeMore,
  NotFound,
} from "./Profile.style";
import Masonry from "react-masonry-css";

import Card from "../card/Card";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import { ReactComponent as DefaultProfileIcon } from "../../assets/icons/user-profile-svgrepo-com.svg";
import { getUser, getUserVotes } from "../../api/UserApi";
import { getMyQuote } from "../../api/QuoteApi";
import CardGrid from "../card-grid/CardGrid";

let loaded = false;

const Profile = () => {
  const isLoggedIn = localStorage.getItem("accessToken");

  const [userId, setUserId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userQquote, setUserQquote] = useState("");
  const [userKarma, setUserKarma] = useState(0);
  const [userVotes, setUserVotes] = useState([
    { karma: 0, text: "", name: "", surname: "" },
  ]);

  if (isLoggedIn) {
    getUser(JSON.parse(isLoggedIn!))
      .then(({ name, surname, id }) => {
        setFirstName(name);
        setLastName(surname);
        setUserId(id);
      })
      .catch((e) => {
        console.log("Error: Cant get user" + e);
        //isLoggedIn = null;
        //localStorage.clear();
      });
    getMyQuote(JSON.parse(isLoggedIn!))
      .then(({ text, karma }) => {
        setUserQquote(text);
        setUserKarma(karma);
      })
      .catch((e) => {
        //console.log("Error! Cant get users quote: " + e);
      });

    // DOES NOT WORK
    if (userId) {
      getUserVotes(userId, JSON.parse(isLoggedIn!))
        .then((res) => {
          if (!loaded) {
            //console.log(res);
            setUserVotes(res);
            loaded = true;
          }
        })
        .catch((e) => {
          console.log("Error! Cant get users votes: " + e);
        });
    }
  }

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
            <Card
              quote={userQquote}
              firstName={firstName}
              lastName={lastName}
              karma={userKarma}
            />
          </Quote>
          <Likes>
            Likes
            <CardGrid quotes={userVotes} />
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
