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
import LandingPage from "./components/landing-page/LandingPage";
import Navbar from "./components/navbar/Navbar";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/home" element={<LandingPageLoggedIn />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
