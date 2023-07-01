import React, { useState } from 'react'
import './booking.css'
import { Form, FormGroup, ListGroup, ListGroupItem, Button, Modal } from 'reactstrap'
import { FaStar } from 'react-icons/fa'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
} from 'reactstrap';

const Booking = ({ hotel }) => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const { photo, image_one, image_two, price, reviews, avgRating } = hotel

    const handleChange = e => {

    }


    const items = [
        {
            src: photo,
            key: 1,
        },
        {
            src: image_one,
            key: 2,
        },
        {
            src: image_two,
            key: 3,
        },
    ];


    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img className='carousel-image' src={item.src} alt={item.altText} />

            </CarouselItem>
        );
    });


    return (

        <div className='booking'>
            <Modal isOpen={modal} toggle={toggle} >

                <Carousel className='carousel'
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}

                >
                    <CarouselIndicators
                        items={items}
                        activeIndex={activeIndex}
                        onClickHandler={goToIndex}
                    />
                    {slides}
                    <CarouselControl
                        direction="prev"
                        directionText="Previous"
                        onClickHandler={previous}
                    />
                    <CarouselControl
                        direction="next"
                        directionText="Next"
                        onClickHandler={next}
                    />
                </Carousel>
            </Modal>
            <div className='booking-top d-flex align-items-center justify-content-between'>
                <h3>${price} <span>/Per person</span></h3>
                <span className='property-rating d-flex align-items-center '>
                    <span className='icon'>
                        <FaStar />
                    </span>
                    <span> {avgRating === 0 ? null : avgRating} ({reviews?.length})</span>

                </span>
            </div>
            {/* Booking form Column */}
            <div className='booking-form'>
                <h5>Info</h5>
                <Form className='booking-info-form'>
                    <FormGroup>
                        <input type='text' placeholder='Full name' id='fullName' required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <input type='text' placeholder='Phone Number' id='phone' required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup className='d-flex align-items-center gap-3'>
                        <input type='date' placeholder='' id='fromDate' required onChange={handleChange} />
                        <input type='date' placeholder='' id='toDate' required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <input type='number' placeholder='Guests Number' id='guestNumber' required onChange={handleChange} />
                    </FormGroup>
                </Form>
            </div>
            {/* Bottom of the booking column */}
            <div className='booking-bottom'>
                <ListGroup>
                    <ListGroupItem className='border-0 px-0 other-images'>
                        <img src={photo} onClick={toggle} alt='image1' />
                        <img src={image_one} onClick={toggle} alt='other-image2' />
                        <img src={image_two} onClick={toggle} alt='other-image3' />

                    </ListGroupItem>
                </ListGroup>
                <ListGroup>
                    <ListGroupItem className='border-0 px-0'>
                        <h5 className='d-flex align-items-center gap-1 '>${price} /per night</h5>
                        <span>${price}</span>
                    </ListGroupItem>
                </ListGroup>
                <Button className='btn primary__btn w-100 mt-4'>Reserve Now</Button>
            </div>
        </div>
    )
}

export default Booking