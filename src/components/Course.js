import React from 'react';
//import components
import StarRating from './StarRating';
import PropTypes from 'prop-types';

const Course = ({ name, desc, url }) => {
  return (
    <div className='card'>
      <div>
        <img src={url} alt={name} />
      </div>
      <h2>{name}</h2>
      <p>{desc}</p>
      <h3>Course Rating</h3>
      {/* A self-contained star rating component */}
      <StarRating />
    </div>
  );
};

//prop type validation
Course.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Course;
