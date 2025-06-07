import React from "react";
import { Link } from "react-router-dom";
import "../components/Skylar.css";

const Home = () => (
  <section className="home-section">
    <div className="overlay">
      <div className="home-content fade-in">
        <h1 className="home-title">SKYLAR TATTOO</h1>
        <p className="home-description">
          Welcome to the world <span className="highlight">of dark beauty</span> and <span className="highlight">unique style</span>.<br />
          Feel <span className="highlight">the art</span> on your own skin
        </p>
        <Link to="/about" className="cta-button">Read more</Link>
      </div>
    </div>
  </section>
);

export default Home;
