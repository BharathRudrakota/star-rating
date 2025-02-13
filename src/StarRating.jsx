import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';

const StarRating = () => {
  const [rating, setRating] = useState(0); 
  const [hover, setHover] = useState(0);   

  const handleStarClick = (starValue) => {
    setRating(starValue);
  };

  return (
    <div className="card h" style={{ background: "black" }}>
      <div className="text-center mt-4">
        {Array.from({ length: 5 }, (_, index) => {
          const starValue = index + 1;
          return (
            <span
              key={index}
              onClick={() => handleStarClick(starValue)}
              onMouseEnter={() => setHover(starValue)}
              onMouseLeave={() => setHover(0)}
              className={`star ${starValue <= (hover || rating) ? "text-warning" : "text-secondary"} ${starValue === rating ? "clicked" : ""}`}
              style={{ fontSize: "70px" }}
            >
              ★ 
            </span>
          );
        })}
        <p className="mt-2 fs-3 rt">{rating > 0 ? `${rating}/5 Rating` : "Select a rating"}</p>
      </div>
    </div>
  );
};

export default StarRating;
