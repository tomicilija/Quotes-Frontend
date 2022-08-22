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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [ErrorMessage, setErrorMessage] = useState("");

//// USE code form API file
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const loginUrl = "http://localhost:5000/login";
    setErrorMessage("");
    const loginData = {
      email: email,
      pass: password,
    };
    fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((res) => {
        if (!res.ok) {
          /// Delete when done
          console.log("Ne dela");
          return res.text().then((text) => {
            throw new Error(text);
          });
        } else {
          /// Delete when done
          console.log("Dela");
          return res.json();
        }
      })
      .then((result) => {
        localStorage.setItem(
          "accessToken",
          JSON.stringify(result["accessToken"])
        );
        /// Delete when done
        console.log("Dela! Token: " + localStorage.getItem("accessToken"));
        return navigate("/profile");
      })
      .catch((err) => {
        console.log("Ne dela1");
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
