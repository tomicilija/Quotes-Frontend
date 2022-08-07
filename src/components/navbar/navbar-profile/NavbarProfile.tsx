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

const Navbar = () => {
  // burger menu state
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Container>
      <BurgerMenu onClick={() => setIsOpen((isOpen) => !isOpen)}>
        <span className={isOpen ? "xmark" : "burger"}></span>
        <span className={isOpen ? "xmark" : "burger"}></span>
        <span className={isOpen ? "xmark" : "burger"}></span>
      </BurgerMenu>
      <Logo className={isOpen ? "black hideLogo" : "black showLogo"}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <LogoIcon />
        </Link>
      </Logo>
      <Logo className={isOpen ? "white hideLogo" : "white showLogo"}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <LogoIconWhite />
        </Link>
      </Logo>
      <AddMobile className={isOpen ? "hideButton" : "showButton"}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <AddPicture />
        </Link>
      </AddMobile>
      <Menu className={isOpen ? "showMenuNav" : "hideMenuNav"}>
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
          <Link to="/" style={{ textDecoration: "none" }}>
            <MobileLink>
              <p>Settings</p>
              <RightArrow />
            </MobileLink>
          </Link>
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
          <Link to="/" style={{ textDecoration: "none" }}>
            <DesktopLink>
              <p>Settings</p>
            </DesktopLink>
          </Link>
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
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button>
              <AddPicture />
            </Button>
          </Link>
        </ButtonWrapper>
      </Menu>
    </Container>
  );
};

export default Navbar;
