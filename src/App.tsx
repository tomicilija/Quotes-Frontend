/* importing global styles */
import "./App.css";

import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import React from "react";
import NavbarLoggedOut from "./components/navbar/navbar-logged-out/NavbarLoggedOut";
import NavbarLoggedIn from "./components/navbar/navbar-logged-in/NavbarLoggedIn";
import NavbarSignup from "./components/navbar/navbar-signup/NavbarSignup";
import NavbarLogin from "./components/navbar/navbar-login/NavbarLogin";
import NavbarProfile from "./components/navbar/navbar-profile/NavbarProfile";
import Hero from "./components/landing-page/hero/Hero";
import CardGrid from "./components/landing-page/card-grid/CardGrid";
import Login from "./components/login/Login";
import SignUp from "./components/sign-up/SignUp";
import Profile from "./components/profile/Profile";
import LandingPageLoggedIn from "./components/landing-page-logged-in/LandingPageLogedIn";
import Footer from "./components/footer/Footer";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <NavbarLoggedOut /> <Hero /> <CardGrid />
              </div>
            }
          />
          <Route
            path="/signup"
            element={
              <div>
                <NavbarSignup /> <SignUp />
              </div>
            }
          />
          <Route
            path="/login"
            element={
              <div>
                <NavbarLogin /> <Login />
              </div>
            }
          />
          <Route
            path="/profile"
            element={
              <div>
                <NavbarProfile /> <Profile />
              </div>
            }
          />
          <Route
            path="/home"
            element={
              <div>
                <NavbarLoggedIn /> <LandingPageLoggedIn />
              </div>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
