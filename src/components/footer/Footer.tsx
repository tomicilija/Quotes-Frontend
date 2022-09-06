import { Container, Logo, Rights } from "./Footer.style";
import { ReactComponent as LogoImage } from "../../assets/icons/logo-icon.svg";

const Footer = () => {
  return (
    <Container>
      <Logo>
        <LogoImage />
      </Logo>
      <Rights>
        All Rights Reserved &nbsp;|&nbsp;&nbsp;
        <a
          href="https://www.skillupmentor.com"
          target="_blank"
          rel="noreferrer"
        >
          skillupmentor.com
        </a>
      </Rights>
    </Container>
  );
};

export default Footer;
