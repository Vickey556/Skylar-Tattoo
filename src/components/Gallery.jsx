import React, { useState } from "react";
import "./Skylar.css"; // сюди додамо стилі знизу

const Gallery = ({ images }) => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div>
      <div className="works">
        {images.map((img) => (
          <img
            key={img.id}
            src={img.src}
            alt={img.alt}
            className="gallery-img"
            onClick={() => setSelectedImg(img.src)}
          />
        ))}
      </div>

      {selectedImg && (
        <div className="modal-backdrop" onClick={() => setSelectedImg(null)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedImg(null)}>&times;</button>
            <img className="modal-img" src={selectedImg} alt="Full" style={{ width: '100%', borderRadius: '12px' }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
