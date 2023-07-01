import React from 'react'
import hotelData from '../../assets/data/hotels'
import  {Col} from 'reactstrap'
import FeaturedHotelCard from '../../shared/FeaturedHotelCard'
const FeaturedHotels = () => {
  return (
    <>
  
        {
            hotelData?.map(hotel =>(
                <Col lg ='3' className='mb-4' key={hotel.id}>
                <FeaturedHotelCard hotel={hotel} />

                </Col>
            ))
        }
    </>
  )
}

export default FeaturedHotels