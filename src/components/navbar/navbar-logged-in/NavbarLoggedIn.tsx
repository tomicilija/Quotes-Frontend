import { useState } from "react";
import {
  Container,
  Logo,
  Menu,
  ButtonWrapper,
  Button,
  Home,
  BurgerMenu,
} from "./NavbarLoggedIn.style";

import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import { ReactComponent as LogoIcon } from "../../../assets/icons/navbar-logo.svg";

import { ReactComponent as RightArrow } from "../../../assets/arrows/RightArrow.svg";

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
      <Logo className={isOpen ? "hideLogo" : "showLogo"}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <LogoIcon />
        </Link>
      </Logo>
      <Menu className={isOpen ? "showMenuNav" : "hideMenuNav"}>
        <ButtonWrapper>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Home onClick={() => setIsOpen((isOpen) => !isOpen)}>
              <p>Home</p>
              <RightArrow />
            </Home>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            Home
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            Settings
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            Logout
          </Link>
          {/* TODO: Profile and add button */}
          
        </ButtonWrapper>
      </Menu>
    </Container>
  );
};

export default Navbar;