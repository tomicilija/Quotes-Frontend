import {
  Container,
  Background,
  SignUpFormWrapper,
  SignUpHeader,
  SignUpForm,
  SignUpFormSection,
  TwoInRow,
  SigninText,
} from "./SignUp.style";

import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import { ReactComponent as Backgroundimg } from "../../assets/background/vectorQuotations.svg";
import { ReactComponent as DefaultProfilePicture } from "../../assets/DefaultProfilePicture.svg";

const SignUp = () => {
  return (
    <Container>
      <Background>
        <Backgroundimg />
      </Background>
      <SignUpFormWrapper>
        <SignUpHeader>
          <h1>
            What is your <span>name?</span>
          </h1>
          <h5>Your name will appear on quotes and your public profle.</h5>
        </SignUpHeader>
        <DefaultProfilePicture />
        <SignUpForm>
          <SignUpFormSection>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </SignUpFormSection>
          <TwoInRow>
            <SignUpFormSection>
              <label htmlFor="firstName">First Name</label>
              <input type="firstname" id="firstName" />
            </SignUpFormSection>
            <SignUpFormSection>
              <label htmlFor="lastName">Last Name</label>
              <input type="lastname" id="lastName" />
            </SignUpFormSection>
          </TwoInRow>
          <SignUpFormSection>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </SignUpFormSection>
          <SignUpFormSection>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" />
          </SignUpFormSection>
          <SignUpFormSection>
            <Link to="/profile" style={{ textDecoration: "none" }}>
              <button type="submit">Login</button>
            </Link>
          </SignUpFormSection>
        </SignUpForm>
        <SigninText>
          Already have an account?{" "}
          <Link to="/login" style={{ textDecoration: "none" }}>
            <span>Sign In</span>
          </Link>
        </SigninText>
      </SignUpFormWrapper>
    </Container>
  );
};

export default SignUp;
