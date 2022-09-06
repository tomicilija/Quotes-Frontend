import {
  Container,
  Background,
  LoginFormWrapper,
  LoginHeader,
  LoginForm,
  LoginFormSection,
} from "./Login.style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Backgroundimg } from "../../assets/background/vectorQuotations.svg";
import { signIn } from "../../api/UserApi";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ErrorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault(); // To prevent refreshing the page on form submit
    (async () => {
      const result = await signIn({ email: email, pass: password });
      localStorage.setItem(
        "accessToken",
        JSON.stringify(result["accessToken"])
      );
      return navigate("/profile");
    })().catch((err) => {
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
