/* eslint-disable react/prop-types */

import { FaRegStar, FaStar } from 'react-icons/fa';
import { FaRegStarHalfStroke } from "react-icons/fa6";

const Rating = ({ rating }) => {
  const ratingIcons = [];

  // Round the rating to the nearest 0.5 to determine the number of full and half stars
  const roundedRating = Math.round(rating * 2) / 2;
  const fullStars = Math.floor(roundedRating);
  const halfStar = roundedRating - fullStars;

  // Create full star icons
  for (let i = 0; i < fullStars; i++) {
    ratingIcons.push(<FaStar></FaStar>);
  }

  // Add half star if applicable
  if (halfStar === 0.5) {
    ratingIcons.push(<FaRegStarHalfStroke></FaRegStarHalfStroke>);
  }

  // Create empty star icons to fill up to 5 stars
  while (ratingIcons.length < 5) {
    ratingIcons.push(<FaRegStar></FaRegStar>);
  }
  return <div className="rating-icons flex items-center gap-1 text-xl text-orange-500">{ratingIcons}</div>;
};

export default Rating;
