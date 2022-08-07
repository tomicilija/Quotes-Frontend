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
} from "./Profile.style";
import Masonry from "react-masonry-css";

import Card from "../landing-page/card/Card";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import { ReactComponent as DefaultProfileIcon } from "../../assets/icons/user-profile-svgrepo-com.svg";


const breakpointColumnsObj = {
  default: 3,
  1340: 2,
  900: 1,
};

const Profile = () => {
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
      <Background />
      <BackgroundW />
      <ProfileBanner>
        <ProfilePicture>
          <ProfilePictureicon>
            <DefaultProfileIcon />
          </ProfilePictureicon>
        </ProfilePicture>
        <ProfileInfo>
          <ProfileName>John Doe</ProfileName>
          <ProfileKarma>
            Quotastic Karma
            <p>100</p>
          </ProfileKarma>
        </ProfileInfo>
      </ProfileBanner>
      <Quote>
        Quote
        <Card />
      </Quote>
      <Likes>
        Likes
        <CardWrapper>
          {/* Show only 4 cards on mobile & 9 on desktop */}
          {isDesktop ? (
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
            >
              {[...Array(6)].map((_, i) => (
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

          <SeeMore>Load more</SeeMore>
        </CardWrapper>
      </Likes>
    </Container>
  );
};

export default Profile;
