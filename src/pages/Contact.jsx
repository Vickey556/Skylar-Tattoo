import React from "react";

const Contacts = () => {
  return (
    <div className="contacts-section">
      <h1 className="contact-title">CONTACT US!</h1>
      <p className="contacts-description">For consultations, please use the contacts below</p>

      <ul className="contact-list">
        <li>📍 <strong>Address:</strong> Cherkasy city, Baydy Vyshnevetskoho St., 34</li>
        <li>📞 <strong>Phone:</strong> +380 (99) 123-45-67</li>
        <li>📧 <strong>Email:</strong> skylar.tattoo@gmail.com</li>
        <li>📷 <strong>Instagram:</strong> <a href="https://www.instagram.com/toskaart.tattoo/" target="_blank" rel="noreferrer">@skylar.tattoo</a></li>
      </ul>

      <div className="contact-map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.954094724995!2d32.05622107687226!3d49.4449020592529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d14b004e80a5bf%3A0x95063f2eb8226ca5!2sMozhna%20Tatu!5e1!3m2!1sen!2sua!4v1749151341309!5m2!1sen!2sua" 
      title="Наша локація" 
      width="600" 
      height="450" 
      allowfullscreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade">
      </iframe>
      </div>

      <div className="contact-video">
        <h2 className="video-title">Skylar Tattoo vibe</h2>
        <div className="video-wrapper">
         <iframe width="560" 
         height="315" 
         src="https://www.youtube.com/embed/ANkxRGvl1VY?si=YrV6_RcKD847E8pc" 
         title="YouTube video player" 
         frameborder="0" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         referrerpolicy="strict-origin-when-cross-origin" 
         allowfullscreen>
         </iframe>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
