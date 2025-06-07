import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";


const BookingModal = ({ isOpen, onClose }) => {
  const [showFortune, setShowFortune] = useState(false);
  const [fortune, setFortune] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    idea: "",
  });
  const getRandomFortune = () => {
  const fortunes = [
    "You will have a great tattoo experience!",
    "Your next tattoo will bring you luck.",
    "Creativity flows through your veins.",
    "A surprise awaits you in the near future.",
    "Your tattoo will inspire many.",
  ];
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  return fortunes[randomIndex];
};

  if (!isOpen && !showFortune) return null;

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("db is", db);
      await addDoc(collection(db, "bookings"), formData);
      console.log("Submitting form data:", formData);
      const randomFortune = getRandomFortune();
      setFortune(randomFortune);
      setShowFortune(true);
    } catch (error) {
      alert("Помилка при збереженні бронювання: " + error.message);
    }
  };

  const handleCloseAll = () => {
    setShowFortune(false);
    setFortune("");
    onClose();
  };

  return (
    <>
      {isOpen && !showFortune && (
        <div className="modal-backdrop">
          <div className="modal-box fade-in">
            <button className="modal-close-btn" onClick={onClose}>✖</button>
            <h2 className="modal-title">Book your tattoo</h2>
            <form onSubmit={handleSubmit} className="modal-form">
              <input 
                type="text" 
                name="name"
                placeholder="Your name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
              <input 
                type="email" 
                name="email"
                placeholder="Email address" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
              <input 
                type="date" 
                name="date"
                value={formData.date}
                onChange={handleChange}
                required 
              />
              <textarea
                name="idea"
                placeholder="Describe your idea"
                value={formData.idea}
                onChange={handleChange}
                required
              />
              <button type="submit" className="modal-submit-btn">Submit</button>
            </form>
          </div>
        </div>
      )}
      {showFortune && (
        <div className="modal-backdrop">
          <div className="modal-box fade-in">
            <button className="modal-close-btn" onClick={handleCloseAll}>✖</button>
            <h2 className="modal-title">Your fortune:</h2>
            <p className="fortune-text">{fortune}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default BookingModal;
