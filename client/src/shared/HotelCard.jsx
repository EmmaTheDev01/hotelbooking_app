import React from 'react'
import { Card, CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'
import { FaMapMarkerAlt } from 'react-icons/fa'
const HotelCard = ({hotel}) => {
    const {id, title, photo, city, featured, avgRating, reviews, price} = hotel
  return (
    <div className='property-card'>
        <Card>
            <div className='property-img'>
                <img src={photo} alt='PropertyImage' />
            </div>
        </Card>
        <CardBody>
            <div className='card-top d-flex align-items-center justify-content-between'>
                <span className='hotel-location d-flex align-items-center gap-1'>
                    <FaMapMarkerAlt/>{city}
                </span>
            </div>
        </CardBody>
    </div>
  )
}

export default HotelCard