import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL
} from "firebase/storage";

import { db } from "../firebase";
import "./Skylar.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);
  const [imageFile, setImageFile] = useState(null);

  const storage = getStorage();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "reviews"));
        const reviewsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setReviews(reviewsData.reverse());
      } catch (error) {
        console.error("Error fetching reviews: ", error);
      }
    };

    fetchReviews();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;

    let imageUrl = "";

    if (imageFile) {
      const imageRef = ref(storage, `reviews/${Date.now()}_${imageFile.name}`);
      try {
        const snapshot = await uploadBytes(imageRef, imageFile);
        imageUrl = await getDownloadURL(snapshot.ref);
      } catch (error) {
        console.error("Error uploading image: ", error);
      }
    }

    const newReview = {
      name,
      text,
      rating,
      date: new Date().toLocaleDateString(),
      image: imageUrl
    };

    try {
      const docRef = await addDoc(collection(db, "reviews"), newReview);
      const updated = [{ ...newReview, id: docRef.id }, ...reviews];
      setReviews(updated);
      setName("");
      setText("");
      setRating(5);
      setImageFile(null);
    } catch (error) {
      console.error("Error adding review: ", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "reviews", id));
      const updated = reviews.filter((r) => r.id !== id);
      setReviews(updated);
    } catch (error) {
      console.error("Error deleting review: ", error);
    }
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0].toUpperCase())
      .join("")
      .slice(0, 2);
  };

  return (
    <section className="reviews">
      <h2 className="section-title">Reviews about healed tattoos</h2>

      <div className="reviews-list">
        {reviews.length > 0 ? (
          reviews.map((r) => (
            <div key={r.id} className="review-card">
              <div className="review-header">
                <div className="avatar">{getInitials(r.name)}</div>
                <div>
                  <p className="review-name">{r.name}</p>
                  <p className="review-date">{r.date}</p>
                  <div className="stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className={i < r.rating ? "star filled" : "star"}>
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(r.id)}
                  title="Видалити"
                >
                  🗑
                </button>
              </div>
              <p className="review-text">{r.text}</p>
              {r.image && (
                <div className="review-image">
                  <img src={r.image} alt="Review" />
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="no-reviews">There are no reviews yet^^</p>
        )}
      </div>

      <form onSubmit={handleSubmit} className="review-form">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Write your impression"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        
        <div className="rating-stars">
          <label>Rating:</label>
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={i < rating ? "star filled" : "star"}
              onClick={() => setRating(i + 1)}
            >
              ★
            </span>
          ))}
        </div>
      
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Reviews;
