import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import "./tourcard.css";
import calculateAvgRating from "../utils/avgRating";

const TourCard = ({ tour }) => {
  const { _id, title, photo, country, city, featured, desc, reviews, price } = tour;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  return (
    <div className="tour-card">

      <div className="tour-img">
        <img src={photo} alt="tourimage" />
        {featured && <span>Featured</span>}
      </div>

      <div className="tour-card-top ">
        <h5 className="tour-title">
          <Link to={`/tour/${_id}`}>{title}</Link>
          <span className="tour-rating">
            <span className="tour-icon">
              <FaStar />
            </span>

            {avgRating === 0 ? null : avgRating}
            {totalRating === 0 ? (
              "Not rated"
            ) : (
              <span> ({reviews.length})</span>
            )}
          </span>
        </h5>
        <div className="tour-card-bottom">
          <p>{desc}</p>
          <h5>
            {price}
            <span> /person</span>
          </h5>
        </div>
        <span className="tour-location">
          <span className="tour-icon">
            <FaMapMarkerAlt />
          </span>
          {city},{country}
        </span>

        <button className="btn tour-btn">
          <Link to={`/tour/${_id}`}>Book Now</Link>
        </button>

      </div>
    </div>
  );
};

export default TourCard;
