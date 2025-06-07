import React from "react";
import { useNavigate } from "react-router-dom";

const Author = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/portfolio"); // або /works, залежно від маршруту
  };

  return (
    <div className="author-wrapper">
      {/* Секція 1 — заголовок і фото */}
      <section className="author-hero">
        <h1 className="author-title">Studio Skylar is brought to you!</h1>
        <img
          src="https://i.pinimg.com/736x/67/22/09/672209fe557324d1ac71a6d051bd717e.jpg"
          alt="Author"
          className="author-image"
        />
      </section>

      {/* Секція 2 — текст і кнопка */}
      <section className="author-details">
        <p className="author-text">
          My name is Victoria, I'm 20 years old and this city needs a hero tattoo!<br /><br />
          For half a year now, under the cover of night, I've been creating tattoos. <br /><br />
          So far, I'm experimenting with different styles, searching for my true essence, 
          but my favorites are graphics, minimalism and sketches. <br /><br />
          I'm gaining skills in realism and I would like to bring something like that to life.
        </p>
        <button className="author-button" onClick={handleNavigate}>
        See My Works
        </button>
      </section>
    </div>
  );
};

export default Author;
