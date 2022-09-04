import {
  Container,
  Background,
  LoginFormWrapper,
  LoginHeader,
  LoginForm,
  LoginFormSection,
} from "./Login.style";
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
import { signIn } from "../../api/UserApi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [ErrorMessage, setErrorMessage] = useState("");

  //// USE code form API file
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    signIn( { email: email, pass: password})
      .then((result) => {
        localStorage.setItem(
          "accessToken",
          JSON.stringify(result["accessToken"])
        );
        return navigate("/profile");
      })
      .catch((err) => {
        setErrorMessage(err.response.data.message);
      });
  };

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
          <h3>{ErrorMessage}</h3>
        </LoginHeader>
        <form onSubmit={handleSubmit}>
          <LoginForm>
            <LoginFormSection>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </LoginFormSection>
            <LoginFormSection>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </LoginFormSection>
            <LoginFormSection>
              <button type="submit">Login</button>
            </LoginFormSection>
          </LoginForm>
        </form>
      </LoginFormWrapper>
    </Container>
  );
};

export default Login;
