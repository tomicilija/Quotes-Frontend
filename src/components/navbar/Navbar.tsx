import { useState } from "react";
import {
  Container,
  Logo,
  Menu,
  Home,
  ButtonWrapper,
  Button,
  ButtonLoggedin,
  ButtonP,
  MobileLink,
  DesktopLink,
  BurgerMenu,
  AddMobile,
} from "./Navbar.style";

import { useLocation, Link } from "react-router-dom";
import { ReactComponent as LogoIcon } from "../../assets/icons/navbar-logo.svg";
import { ReactComponent as LogoIconWhite } from "../../assets/icons/navbar-logo-white.svg";

import { ReactComponent as RightArrow } from "../../assets/arrows/RightArrow.svg";
import { ReactComponent as RightArrowOrange } from "../../assets/arrows/RightArrow-orange.svg";
import { ReactComponent as DefaultProfileIcon } from "../../assets/icons/profile.svg";
import { ReactComponent as DefaultProfileIcon1 } from "../../assets/icons/user-profile-svgrepo-com.svg";
import { ReactComponent as AddPicture } from "../../assets/icons/add.svg";
import ProfileSettings from "../modals/profile-settings/ProfileSettings";
import CreateQuote from "../modals/create-quote/CreateQuote";

const Navbar = () => {
  const isLoggedIn = localStorage.getItem("accessToken");

  let location = useLocation();

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
      <BurgerMenu onClick={() => setIsBurgerOpen(!isBurgerOpen)}>
        <span className={isBurgerOpen ? "xmark" : "burger"}></span>
        <span className={isBurgerOpen ? "xmark" : "burger"}></span>
        <span className={isBurgerOpen ? "xmark" : "burger"}></span>
      </BurgerMenu>
      {location.pathname === "/profile" && isLoggedIn ? (
        <>
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
        </>
      ) : (
        <Logo className={isBurgerOpen ? "hideLogo" : "showLogo"}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <LogoIcon />
          </Link>
        </Logo>
      )}
      {isLoggedIn ? (
        <>
          <AddMobile
            onClick={openQuoteModal}
            className={isBurgerOpen ? "hideButton" : "showButton"}
          >
            <AddPicture />
          </AddMobile>
          <Menu className={isBurgerOpen ? "showMenuNav" : "hideMenuNav"}>
            <ButtonWrapper>
              <Link to="/profile" style={{ textDecoration: "none" }}>
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
                <MobileLink onClick={openSettingsModal}>
                  <p>Settings</p>
                  <RightArrow />
                </MobileLink>
                <MobileLink
                  onClick={() => {
                    localStorage.clear();
                    window.location.href = "/";
                  }}
                >
                  <p>
                    <span>Logout</span>
                  </p>
                  <RightArrowOrange />
                </MobileLink>
              <Link to="/" style={{ textDecoration: "none" }}>
                <DesktopLink>
                  <p>Home</p>
                </DesktopLink>
              </Link>
              <DesktopLink onClick={openSettingsModal}>
                <p>Settings</p>
              </DesktopLink>
              <DesktopLink
                onClick={() => {
                  localStorage.clear();
                  window.location.href = "/";
                }}
              >
                <p>Logout</p>
              </DesktopLink>
              <Link to="/profile" style={{ textDecoration: "none" }}>
                <ButtonLoggedin>
                  <ButtonP>
                    <DefaultProfileIcon1 />
                  </ButtonP>
                </ButtonLoggedin>
              </Link>
              <ButtonLoggedin onClick={openQuoteModal}>
                <AddPicture />
              </ButtonLoggedin>
            </ButtonWrapper>
          </Menu>
          <ProfileSettings
            isSettingsOpen={isSettingsOpen}
            setIsSettingsOpen={setIsSettingsOpen}
          />
          <CreateQuote
            isQuoteOpen={isQuoteOpen}
            setIsQuoteOpen={setIsQuoteOpen}
          />
        </>
      ) : (
        <Menu className={isBurgerOpen ? "showMenuNav" : "hideMenuNav"}>
          <ButtonWrapper>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Home onClick={() => setIsBurgerOpen(!isBurgerOpen)}>
                <p>Home</p>
                <RightArrow />
              </Home>
            </Link>
            {location.pathname === "/signup" ? (
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button className="login">Login</Button>
              </Link>
            ) : location.pathname === "/login" ? (
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <Button className="signup">Sign up</Button>
              </Link>
            ) : (
              <>
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  <Button className="signup">Sign up</Button>
                </Link>
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <Button className="login">Login</Button>
                </Link>
              </>
            )}
          </ButtonWrapper>
        </Menu>
      )}
    </Container>
  );
};

export default Navbar;
