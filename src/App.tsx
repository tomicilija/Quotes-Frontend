/* importing global styles */
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Login from "./pages/login/Login";
import SignUp from "./pages/sign-up/SignUp";
import Profile from "./pages/profile/Profile";
import Footer from "./components/footer/Footer";
import LandingPage from "./pages/landing-page/LandingPage";
import Navbar from "./components/navbar/Navbar";
import { UpdateProvider } from "./utils/UpdateContext";

class App extends React.Component {
  render() {
    return (
      <UpdateProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="*" element={<LandingPage />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </UpdateProvider>
    );
  }
}

export default App;
