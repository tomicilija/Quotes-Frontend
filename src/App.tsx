/* importing global styles */
import "./App.css";

import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import React from "react";
import Login from "./components/login/Login";
import SignUp from "./components/sign-up/SignUp";
import Profile from "./components/profile/Profile";
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
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
