import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import "./properties.css";
import calculateAvgRating from "../utils/avgRating";

const FeaturedHotelCard = ({ hotel }) => {
  const { id, title, photo, city, featured, reviews, price } = hotel;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  if (featured) {
    return (
      <div className="property-card">
        <Card>
          <div className="property-img">
            <img src={photo} alt="PropertyImage" />
            {featured && <span>Featured</span>}
          </div>
          <CardBody>
            <div className="card-top d-flex align-items-center justify-content-between">
              <span className="property-location d-flex align-items-center gap-1">
                <span className="icon">
                  <FaMapMarkerAlt />
                </span>
                {city}
              </span>
              <span className="property-rating d-flex align-items-center gap-1">
                <span className="icon">
                  <FaStar />
                </span>
                {avgRating === 0 ? null : avgRating}
                {totalRating === 0 ? (
                  "Not rated"
                ) : (
                  <span>({reviews.length})</span>
                )}
              </span>
            </div>
            <h5 className="property-title">
              <Link to={`/hotels/${id}`}>{title}</Link>
            </h5>
            <div className="card-bottom d-flex align-items-center justify-content-between mt-3">
              <h5>
                {price}
                <span> /night</span>
              </h5>

              <button className="btn reserve-btn">
                <Link to={`/hotel/${id}`}>Reserve</Link>
              </button>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
};

export default FeaturedHotelCard;
