import { Container, Background, BackgroundW } from "./Profile.style";

import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import { ReactComponent as Backgroundimg } from "../../assets/background/vectorProfile.svg";
import { ReactComponent as DefaultProfilePicture } from "../../assets/DefaultProfilePicture.svg";

const profile = () => {
  return (
    <Container>
      <Background />
      <BackgroundW />
    </Container>
  );
};

export default profile;
