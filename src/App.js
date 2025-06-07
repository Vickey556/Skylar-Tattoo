import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Gallery from "./components/Gallery";
import Contact from "./pages/Contact";
import About from "./pages/About";
import './components/Skylar.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

const backgroundStyle = {
  backgroundImage: `url(${process.env.PUBLIC_URL + '/back.png'})`,
  backgroundAttachment: 'fixed', 
  backgroundSize: '100% auto', 
  backgroundPosition: 'top center',
  backgroundRepeat: 'no-repeat',
  minHeight: '100vh',
  width: '100%',
  overflowX: 'hidden',
};


  return (
    <div style={backgroundStyle}>
      <Navbar onBookingClick={openBooking} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
    </div>
  );
}

export default App;
