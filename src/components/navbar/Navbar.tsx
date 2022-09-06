import { useEffect, useState } from "react";
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
import { getSignedInUser } from "../../api/UserApi";

/*
 * Navigation bar switches pages, opens modals, and is shown in few different views:
 * Signup and Login pages
 * Landing page with and without logged in user
 * Profile page with white quotastic logo
 * Mobile page with and without logged in user
*/

const Navbar = () => {
  const isLoggedIn = localStorage.getItem("accessToken");
  let location = useLocation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<boolean>(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState<boolean>(false);

  const openQuoteModal = () => {
    setIsQuoteModalOpen((prev) => !prev);
  };
  const openSettingsModal = () => {
    setIsSettingsModalOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isLoggedIn) {
      (async () => {
        const response = await getSignedInUser(JSON.parse(isLoggedIn));
        setFirstName(response.name);
        setLastName(response.surname);
      })().catch((e) => {
        console.log("Error: Cant get user. \n" + e);
      });
    }
  }, [isLoggedIn]);

  return (
    <Container>
      <BurgerMenu onClick={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)}>
        <span className={isBurgerMenuOpen ? "xmark" : "burger"}></span>
        <span className={isBurgerMenuOpen ? "xmark" : "burger"}></span>
        <span className={isBurgerMenuOpen ? "xmark" : "burger"}></span>
      </BurgerMenu>
      {location.pathname.includes("/profile") && isLoggedIn ? (
        <>
          <Logo className={isBurgerMenuOpen ? "black hideLogo" : "black showLogo"}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <LogoIcon />
            </Link>
          </Logo>
          <Logo className={isBurgerMenuOpen ? "white hideLogo" : "white showLogo"}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <LogoIconWhite />
            </Link>
          </Logo>
        </>
      ) : (
        <Logo className={isBurgerMenuOpen ? "hideLogo" : "showLogo"}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <LogoIcon />
          </Link>
        </Logo>
      )}
      {isLoggedIn ? (
        <>
          <AddMobile
            onClick={openQuoteModal}
            className={isBurgerMenuOpen ? "hideButton" : "showButton"}
          >
            <AddPicture />
          </AddMobile>
          <Menu className={isBurgerMenuOpen ? "showMenuNav" : "hideMenuNav"}>
            <ButtonWrapper>
              <Link
                to="/profile"
                onClick={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)}
                style={{ textDecoration: "none" }}
              >
                <MobileLink>
                  <DefaultProfileIcon />
                  <p>
                    {firstName} {lastName}
                  </p>
                </MobileLink>
              </Link>
              <Link
                to="/"
                onClick={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)}
                style={{ textDecoration: "none" }}
              >
                <MobileLink>
                  <p>Home</p>
                  <RightArrow />
                </MobileLink>
              </Link>
              <div onClick={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)}>
                <MobileLink onClick={openSettingsModal}>
                  <p>Settings</p>
                  <RightArrow />
                </MobileLink>
              </div>
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
            isSettingsOpen={isSettingsModalOpen}
            setIsSettingsOpen={setIsSettingsModalOpen}
          />
          <CreateQuote
            isQuoteOpen={isQuoteModalOpen}
            setIsQuoteOpen={setIsQuoteModalOpen}
          />
        </>
      ) : (
        <Menu className={isBurgerMenuOpen ? "showMenuNav" : "hideMenuNav"}>
          <ButtonWrapper>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Home onClick={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)}>
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
