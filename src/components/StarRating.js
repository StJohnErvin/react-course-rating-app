import React, { useState } from 'react';
import Star from './Star';
const StarRating = () => {
  // Initialize a 'courseRating' state

  // Initialize the courseRating state with 0 stars
  const [rating, setRating] = useState(0);

  // Function to handle rating updates when a star is clicked
  const handleStarClick = (clickedRating) => {
    // If the clicked star is already selected, reset the rating to 0
    if (clickedRating === rating) {
      setRating(0);
    } else {
      setRating(clickedRating);
    }
  };

  const stars = [1, 2, 3, 4, 5];

  return (
    <ul className='course--stars'>
      {/* Render the Star components */}
      {stars.map((star) => (
        <Star
          key={star}
          isSelected={star <= rating}
          onStarClick={() => handleStarClick(star)}
        />
      ))}
    </ul>
  );
};

export default StarRating;
