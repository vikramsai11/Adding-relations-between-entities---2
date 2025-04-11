// src/components/RatingWidget.jsx
import React, { useState } from "react";
import PropTypes from "prop-types";

const RatingWidget = ({ onRate }) => {
  const [rating, setRating] = useState(0);

  const handleRatingClick = (value) => {
    setRating(value);
    onRate(value); // send selected rating to parent
  };

  return (
    <div className="rating-widget">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => handleRatingClick(star)}
          style={{
            cursor: "pointer",
            color: star <= rating ? "gold" : "gray",
            fontSize: "1.5rem",
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

RatingWidget.propTypes = {
  onRate: PropTypes.func.isRequired,
};

export default RatingWidget;