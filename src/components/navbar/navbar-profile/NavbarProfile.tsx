import { useState } from "react";
import {
  Container,
  Logo,
  Menu,
  ButtonWrapper,
  Button,
  ButtonP,
  MobileLink,
  DesktopLink,
  BurgerMenu,
  AddMobile,
} from "./NavbarProfile.style";

import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import { ReactComponent as LogoIcon } from "../../../assets/icons/navbar-logo.svg";
import { ReactComponent as LogoIconWhite } from "../../../assets/icons/navbar-logo-white.svg";

import { ReactComponent as RightArrow } from "../../../assets/arrows/RightArrow.svg";
import { ReactComponent as RightArrowOrange } from "../../../assets/arrows/RightArrow-orange.svg";
import { ReactComponent as DefaultProfileIcon } from "../../../assets/icons/profile.svg";
import { ReactComponent as DefaultProfileIcon1 } from "../../../assets/icons/user-profile-svgrepo-com.svg";
import { ReactComponent as AddPicture } from "../../../assets/icons/add.svg";
import ProfileSettings from "../../modals/profile-settings/ProfileSettings";
import CreateQuote from "../../modals/create-quote/CreateQuote";

const Navbar = () => {
  // burger menu state
  const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);

  // add quote state
  const [isQuoteOpen, setIsQuoteOpen] = useState<boolean>(false);

  // settings state
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);

  const openQuoteModal = () => {
    setIsQuoteOpen((prev) => !prev);
  };

  const openSettingsModal = () => {
    setIsSettingsOpen((prev) => !prev);
  };

  return (
    <Container>
      <BurgerMenu
        onClick={() => setIsBurgerOpen((isBurgerOpen) => !isBurgerOpen)}
      >
        <span className={isBurgerOpen ? "xmark" : "burger"}></span>
        <span className={isBurgerOpen ? "xmark" : "burger"}></span>
        <span className={isBurgerOpen ? "xmark" : "burger"}></span>
      </BurgerMenu>
      <Logo className={isBurgerOpen ? "black hideLogo" : "black showLogo"}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <LogoIcon />
        </Link>
      </Logo>
      <Logo className={isBurgerOpen ? "white hideLogo" : "white showLogo"}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <LogoIconWhite />
        </Link>
      </Logo>
      <AddMobile
        onClick={openQuoteModal}
        className={isBurgerOpen ? "hideButton" : "showButton"}
      >
        <AddPicture />
      </AddMobile>
      <Menu className={isBurgerOpen ? "showMenuNav" : "hideMenuNav"}>
        <ButtonWrapper>
          <Link to="/" style={{ textDecoration: "none" }}>
            <MobileLink>
              <DefaultProfileIcon />
              <p>John Scott</p>
            </MobileLink>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <MobileLink>
              <p>Home</p>
              <RightArrow />
            </MobileLink>
          </Link>
          {/* // To make styling work */}
          <a>
            <MobileLink onClick={openSettingsModal}>
              <p>Settings</p>
              <RightArrow />
            </MobileLink>
          </a>
          <Link to="/" style={{ textDecoration: "none" }}>
            <MobileLink>
              <p>
                <span>Logout</span>
              </p>
              <RightArrowOrange />
            </MobileLink>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <DesktopLink>
              <p>Home</p>
            </DesktopLink>
          </Link>
          <DesktopLink onClick={openSettingsModal}>
            <p>Settings</p>
          </DesktopLink>
          <Link to="/" style={{ textDecoration: "none" }}>
            <DesktopLink>
              <p>Logout</p>
            </DesktopLink>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button>
              <ButtonP>
                <DefaultProfileIcon1 />
              </ButtonP>
            </Button>
          </Link>
          <Button onClick={openQuoteModal}>
            <AddPicture />
          </Button>
        </ButtonWrapper>
      </Menu>
      <ProfileSettings
        isSettingsOpen={isSettingsOpen}
        setIsSettingsOpen={setIsSettingsOpen}
      />
      <CreateQuote isQuoteOpen={isQuoteOpen} setIsQuoteOpen={setIsQuoteOpen} />
    </Container>
  );
};

export default Navbar;
