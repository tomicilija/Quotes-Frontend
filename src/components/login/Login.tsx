import {
  Container,
  Background,
  LoginFormWrapper,
  LoginHeader,
  LoginForm,
  LoginFormSection,
} from "./Login.style";

import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import { ReactComponent as Backgroundimg } from "../../assets/background/vectorQuotations.svg";

const Login = () => {
  return (
    <Container>
      <Background>
        <Backgroundimg />
      </Background>
      <LoginFormWrapper>
        <LoginHeader>
          <h1>
            Welcome <span>back!</span>
          </h1>
          <h5>
            Thank you for coming back. Hope you have a good day and inspire
            others.
          </h5>
        </LoginHeader>
        <LoginForm>
          <LoginFormSection>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </LoginFormSection>
          <LoginFormSection>
            <label htmlFor="Password">Password</label>
            <input type="password" id="Password" />
          </LoginFormSection>
          <LoginFormSection>
            <Link to="/profile" style={{ textDecoration: "none" }}>
              <button type="submit">Login</button>
            </Link>
          </LoginFormSection>
        </LoginForm>
      </LoginFormWrapper>
    </Container>
  );
};

export default Login;
