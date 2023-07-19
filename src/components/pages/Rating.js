import React, { useState } from 'react';
import './Styling/StarRating.css';

const StarRating = ({ maxStars, initialRating, onRatingChange }) => {
  const [rating, setRating] = useState(initialRating);

  const handleStarHover = (starIndex) => {
    setRating(starIndex + 1);
  };

  const handleRatingLeave = () => {
    if (onRatingChange) {
      onRatingChange(rating);
    }
  };

  return (
    <div className="star-rating-container">
      {[...Array(maxStars)].map((_, index) => (
        <span
          key={index}
          className={`star ${index < rating ? 'star-filled' : ''}`}
          onMouseEnter={() => handleStarHover(index)}
          onMouseLeave={handleRatingLeave}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
