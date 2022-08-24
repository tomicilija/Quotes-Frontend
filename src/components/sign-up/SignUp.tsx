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
import { useState, useEffect } from "react";

import {
  BrowserRouter,
  Link,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { ReactComponent as Backgroundimg } from "../../assets/background/vectorQuotations.svg";
import { ReactComponent as DefaultProfilePicture } from "../../assets/DefaultProfilePicture.svg";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const navigate = useNavigate();

  const [ErrorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const signUpUrl = "http://localhost:5000/signup";
    setErrorMessage("");
    const signUpData = {
      email: email,
      pass: password,
      passConfirm: passwordConfirm,
      name: firstName,
      surname: lastName,
    };

    fetch(signUpUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signUpData),
    })
      .then((res) => {
        if (!res.ok) {
          return res.text().then((text) => {
            throw new Error(text);
          });
        } else {
          return navigate("/login");
        }
      })
      .catch((err) => {
        const x = JSON.parse(err["message"]);
        let message;
        if (Array.isArray(x)) {
          message = x["message" as any].filter(
            (v: any, i: any, a: any) =>
              a.findIndex((v2: any) => v2.id === v.id) === i
          );
        } else message = x["message"];
        setErrorMessage(message);
      });
  };

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
          <h3>{ErrorMessage}</h3>
        </SignUpHeader>
        <DefaultProfilePicture />
        <form onSubmit={handleSubmit}>
          <SignUpForm>
            <SignUpFormSection>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </SignUpFormSection>
            <TwoInRow>
              <SignUpFormSection>
                <label htmlFor="firstName">First Name</label>
                <input
                  type="firstname"
                  value={firstName}
                  required
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </SignUpFormSection>
              <SignUpFormSection>
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="lastname"
                  value={lastName}
                  required
                  onChange={(e) => setLastName(e.target.value)}
                />
              </SignUpFormSection>
            </TwoInRow>
            <SignUpFormSection>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </SignUpFormSection>
            <SignUpFormSection>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                value={passwordConfirm}
                required
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
            </SignUpFormSection>
            <SignUpFormSection>
              <button type="submit">Sign up</button>
            </SignUpFormSection>
          </SignUpForm>
        </form>
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
