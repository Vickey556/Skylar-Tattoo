import React from "react";
import Slider from "react-slick";
import "../components/Skylar.css"; // стиль тут

const services = [
  {
    title: "Tattoo",
    description: "Individual sketches, realism, graphics, neo-traditional — anything you can imagine.",
    image: "/tattoo.jpg",
  },
  {
    title: "Piercing",
    description: "Safe piercing by all standards, sterility and style.",
    image: "/piercing.jpg",
  },
  {
    title: "Consultations",
    description: "Free consultation on tattoo, aftercare or idea.",
    image: "/consult.jpg",
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "10%",
  autoplay: true,
  autoplaySpeed: 4000,
};

const Services = () => {
  return (
    <div className="services-section">
      <h1 className="section-title">OUR SERVICES</h1>
      <Slider {...sliderSettings}>
        {services.map((service, idx) => (
          <div key={idx} className="service-card">
            <img src={service.image} alt={service.title} />
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Services;
