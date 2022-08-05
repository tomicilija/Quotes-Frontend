/* importing global styles */
import './App.css';

import React from "react";
import Hero from "./components/landing-page/hero/Hero";
import CardGrid from "./components/landing-page/card-grid/CardGrid";
import Navbar from "./components/navbar-logged-out/Navbar";
import Footer from './components/footer/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Hero />
        <CardGrid />
        <Footer />
      </div>
    );
  }
}

export default App;
