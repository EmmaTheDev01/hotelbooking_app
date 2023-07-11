import React from "react";
import hotelData from "../../assets/data/hotels";
import { Col } from "reactstrap";
import FeaturedHotelCard from "../../shared/FeaturedHotelCard";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utils/config";
const FeaturedHotels = () => {

  const {data:featuredHotels} = useFetch(
    `${BASE_URL}hotels/search/getFeaturedHotels`
    );
    console.log(featuredHotels);
  return (
    <>
      {featuredHotels?.map((hotel) => (
        <Col lg="3" className="mb-4" key={hotel._id}>
          <FeaturedHotelCard hotel={hotel} />
        </Col>
      ))}
    </>
  );
};

export default FeaturedHotels;
