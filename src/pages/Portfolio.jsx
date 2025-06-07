import React, { useState, useEffect } from "react";
import Gallery from "../components/Gallery";
import { healedWorks, flashDesigns } from "../data/galleryData";
import Reviews from "../components/Reviews";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeGallery, setActiveGallery] = useState("healed");

  return (
    <div className="portfolio-page about">
      <h1 className="center-title">TATTOOS</h1>

      <div className="gallery-switch" style={{ marginBottom: '20px', textAlign: 'center' }}>
        <button 
          className="booking-btn" 
          onClick={() => setActiveGallery("healed")}
          style={{ marginRight: '10px', backgroundColor: activeGallery === "healed" ? '#e33434' : '#ff4c4c' }}>
          Healed
        </button>
        <button 
          className="booking-btn" 
          onClick={() => setActiveGallery("flash")}
          style={{ backgroundColor: activeGallery === "flash" ? '#e33434' : '#ff4c4c' }}>
          Flash sketches
        </button>
      </div>

      <Gallery images={activeGallery === "healed" ? healedWorks : flashDesigns} />

      {activeGallery === "healed" && <Reviews />}
    </div>
  );
};

export default Portfolio;
