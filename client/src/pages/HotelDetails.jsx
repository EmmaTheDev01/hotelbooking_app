import React from 'react'
import { Container, Row, Col, Form, ListGroup } from 'reactstrap'
import { useParams } from 'react-router-dom'
import hotelData from '../assets/data/hotels'
import { FaCity, FaDollarSign, FaMapMarkerAlt, FaStar } from 'react-icons/fa'
import '../styles/hotel-details.css'
import calculateAvgRating from '../utils/avgRating'
const HotelDetails = () => {


  const { id } = useParams();
  //Static data from local file for now
  const hotel = hotelData.find(hotel => hotel.id === id);

  //Destructuring and presenting data properties from our hotel object

  const { photo, title, country, distance, desc, price, reviews, address, city, street, guestNumber, rooms } = hotel;
  const { totalRating, avgRating } = calculateAvgRating(reviews);

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <div className='property-content'>
                <img src={photo} alt='property_image' />
                <div className='property-info'>
                  <h2>{title}</h2>
                  <div className='d-flex align-items-center gap-5'>
                    <span className='property-rating d-flex align-items-center gap-1'>
                      <span className='icon'>
                        <FaStar style={{ 'color': "var(--primary-color)" }} />
                      </span>
                      {avgRating === 0 ? null : avgRating}
                      {totalRating === 0 ? ('Not rated') : (
                        <span>
                          ({reviews?.length})
                        </span>
                      )}
                    </span>
                    <span className=''>
                      <span className='det-icon'>
                        <FaCity />
                      </span>
                      {city},  {country}</span>
                    <span className=''>{rooms.roomName}</span>
                    <span className=''>{rooms.beds}</span>
                  </div>
                  <div className='property-details'>
                    <span>
                      <span className='det-icon'>
                        <FaMapMarkerAlt />
                      </span>
                      {address}</span>
                    <span className=''> {street}</span>
                    
                    <span className=''>
                      <span className='det-icon'>
                        <FaDollarSign />
                      </span>
                      ${price} /night</span>
                    <span className=''>

                    </span>
                  </div>
                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>
                {/* Hotel reviews preview section */}
                <div className='property-info'>
                <div className='property-details-reviews mt-4'>
                  <h4>Reviews ({reviews?.length} reviews)</h4>
                  <Form>
                  <div className='d-flex align-items-center gap-3 mb-4 rating-group '>
                    <span>1<FaStar/></span>
                    <span>2<FaStar/></span>
                    <span>3<FaStar/></span>
                    <span>4<FaStar/></span>
                    <span>5<FaStar/></span>
                  </div> 
                        <div className='review-input'>
                            <input type='text' placeholder="Share your review" />
                            <button className='btn primary__btn' type='submit'>Submit</button>
                        </div>
                  </Form>
                </div>
                </div>
               
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default HotelDetails