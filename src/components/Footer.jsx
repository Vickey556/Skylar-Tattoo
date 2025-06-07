import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Skylar.css";

const Footer = () => {
    const [quote, setQuote] = useState(""); 
    
    useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => setQuote(data.content));
  }, []);

  return (
    <footer>
      <p> <Link to="/about">Studio Skylar</Link>  LLC ©2025</p>
      <p><em>{quote}</em></p>
    </footer>
  );
};

export default Footer;
