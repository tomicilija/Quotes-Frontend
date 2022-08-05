import { useState } from "react";
import {
  Container,
  Logo,
  Menu,
  ButtonWrapper,
  Button,
  Home,
  BurgerMenu,
} from "./Navbar.style";

import { ReactComponent as LogoIcon } from "../../assets/icons/navbar-logo.svg";

import { ReactComponent as RightArrow } from "../../assets/arrows/RightArrow.svg";

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
          <LogoIcon />
        </Logo>
        <Menu className={isOpen ? "showMenuNav" : "hideMenuNav"}>
          <ButtonWrapper>
            <Home  onClick={() => setIsOpen((isOpen) => !isOpen)}>
              <p>Home</p>
              <RightArrow />
            </Home>
            <Button className="signup">Sign up</Button>
            <Button className="login">Login</Button>
          </ButtonWrapper>
        </Menu>
      </Container>
  );
};

export default Navbar;
