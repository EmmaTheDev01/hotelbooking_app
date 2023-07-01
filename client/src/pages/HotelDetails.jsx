import React, { useRef, useState } from 'react'
import { Container, Row, Col, Form, ListGroup,Modal } from 'reactstrap'
import { useParams } from 'react-router-dom'
import hotelData from '../assets/data/hotels'
import { FaCity, FaDollarSign, FaMapMarkerAlt, FaStar } from 'react-icons/fa'
import '../styles/hotel-details.css'
import calculateAvgRating from '../utils/avgRating'
import avatar from '../assets/images/1.png'
import Booking from '../components/booking/Booking'


const HotelDetails = () => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const reviewNote = useRef('');
  const [hotelRating, setHotelRating] = useState(null)


  const { id } = useParams();
  //Static data from local file for now
  const hotel = hotelData.find(hotel => hotel.id === id);

  //Destructuring and presenting data properties from our hotel object

  const { photo, title, country, distance, desc, price, reviews, address, city, street, rooms } = hotel;
  const { totalRating, avgRating } = calculateAvgRating(reviews);
  //Date formats
  const options = { day: "numeric", month: "long", year: "numeric" };

  //sumit reviews to the
  const submitHandler = e => {
    e.preventDefault()
    const reviewtext = reviewNote.current.value;

    alert(`${reviewtext}, ${hotelRating}`);

  }

  return (
    <>
      <section>
        <Container>
          <Row>
            <Modal isOpen={modal} toggle={toggle} >
              <img src={photo} alt='property_image' />
            </Modal>
            <Col lg='8'>
              <div className='property-content'>
                <img src={photo} onClick={toggle} alt='property_image' />
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
                      <span className='price'>{price}</span> /night</span>
                    <span className=''>
                    </span>
                  </div>
                  <div className='property-details'>
                    <span>{distance} Km from the city</span>
                  </div>
                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>
                {/* Hotel reviews preview section */}
                <div className='property-info'>
                  <div className='property-details-reviews mt-4'>
                    <h4>Reviews ({reviews?.length} reviews)</h4>
                    <Form onSubmit={submitHandler}>
                      <div className='d-flex align-items-center gap-3 mb-4 rating-group '>
                        <span onClick={() => setHotelRating(1)}><FaStar /></span>
                        <span onClick={() => setHotelRating(2)}><FaStar /></span>
                        <span onClick={() => setHotelRating(3)}><FaStar /></span>
                        <span onClick={() => setHotelRating(4)}><FaStar /></span>
                        <span onClick={() => setHotelRating(5)}><FaStar /></span>
                      </div>
                      <div className='review-input'>
                        <input type='text' ref={reviewNote} placeholder="Share your review" required />
                        <button className='btn primary__btn' type='submit'>Submit</button>
                      </div>
                    </Form>
                    <ListGroup className='user-reviews'>
                      {
                        reviews?.map(review => (
                          <div className='review-item'>
                            <img src={avatar} alt='userAvatar' />
                            <div className='w-100'>
                              <div className='user-review d-flex align-items-center justify-content-between'>
                                <div>
                                  <h5>John Doe</h5>
                                  <p>{new Date('07-01-2023').toLocaleDateString("en-US", options)}</p>
                                </div>
                                <span className='d-flex align-items-center'>
                                  5<FaStar />
                                </span>
                              </div>
                              <h6>I recommend you this hotel, they provide amazing overall services.</h6>
                            </div>
                          </div>
                        ))
                      }
                    </ListGroup>
                    <ListGroup className='user-reviews'>
                      {
                        reviews?.map(review => (
                          <div className='review-item'>
                            <img src={avatar} alt='userAvatar' />
                            <div className='w-100'>
                              <div className='user-review d-flex align-items-center justify-content-between'>
                                <div>
                                  <h5>John Doe</h5>
                                  <p>{new Date('07-01-2023').toLocaleDateString("en-US", options)}</p>
                                </div>
                                <span className='d-flex align-items-center'>
                                  5<FaStar />
                                </span>
                              </div>
                              <h6>I recommend you this hotel, they provide amazing overall services.</h6>
                            </div>
                          </div>
                        ))
                      }
                    </ListGroup>

                  </div>
                </div>

              </div>
            </Col>
            <Col lg='4'>
              <Booking hotel={hotel} avgRating={avgRating} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default HotelDetails