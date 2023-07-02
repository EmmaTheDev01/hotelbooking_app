import React, { useState } from "react";
import "./booking.css";
import {
  Form,
  FormGroup,
  ListGroup,
  ListGroupItem,
  Button,
  Modal,
} from "reactstrap";
import { FaStar } from "react-icons/fa";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";

import { useNavigate } from "react-router-dom";

const Booking = ({ hotel }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const {
    photo,
    image_one,
    image_two,
    image_three,
    image_four,
    image_five,
    price,
    reviews,
    avgRating,
  } = hotel;

  const [credentials, setCredentials] = useState({
    userId: "01",
    userEmail: "example@email.com",
    fullName: "",
    phone: "",
    guestNumber: 1,
    fromDate: "",
    toDate: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const chargeFee = (Number(price) * 10) / 100;
  const total =
    Number(price) * Number(credentials.guestNumber) + Number(chargeFee);
  //sending data to the database server

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/thank-you");
  };
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
      key: 2,
    },
    {
      src: image_three,
      key: 3,
    },
    {
      src: image_four,
      key: 4,
    },
    {
      src: image_five,
      key: 5,
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
        <img className="carousel-image" src={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <div className="booking">
      <Modal isOpen={modal} toggle={toggle}>
        <Carousel
          className="carousel"
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
      <div className="booking-top d-flex align-items-center justify-content-between">
        <h3>
          ${price} <span>/Per person</span>
        </h3>
        <span className="property-rating d-flex align-items-center ">
          <span className="icon">
            <FaStar />
          </span>
          <span>
            {" "}
            {avgRating === 0 ? null : avgRating} ({reviews?.length})
          </span>
        </span>
      </div>
      {/* Booking form Column */}

      <div className="booking-form">
        <h5>Info</h5>
        <Form className="booking-info-form" onSubmit={handleClick}>
          <FormGroup>
            <input
              type="text"
              placeholder="Full name"
              id="fullName"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="text"
              placeholder="Phone Number"
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="date"
              placeholder=""
              id="fromDate"
              required
              onChange={handleChange}
            />
            <input
              type="date"
              placeholder=""
              id="toDate"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="Guests Number"
              id="guestNumber"
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>
      {/* Bottom of the booking column */}
      <div className="booking-bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1 ">
              ${price}
              <span className="price-text"> /per night</span>
            </h5>
            <span className="highlighted-price">Tax: ${chargeFee}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <span className="">Total</span>
            <h5 className="d-flex align-items-center gap-1 ">
              ${total}
              <span className="price-text"> /per night</span>
            </h5>
          </ListGroupItem>
        </ListGroup>
        <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>
          Reserve Now
        </Button>
      </div>
    </div>
  );
};

export default Booking;
