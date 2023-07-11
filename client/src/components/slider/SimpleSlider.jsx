import React from "react";
import Slider from "react-slick";
import appartment from "../../assets/images/hotels/elizabeth03.jpg";
import "./slider.css";
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay:true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
   
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <div className="slider-card">
            <img
              className="slider-card-img"
              src={appartment}
              alt="sliderimage1"
            />
            <h3>Appartments</h3>
            <p>
              Multiple choices when it gets to choosing a suitable appartment
            </p>
          </div>
        </div>
        <div>
          <div className="slider-card">
            <img
              className="slider-card-img"
              src={appartment}
              alt="sliderimage2"
            />
            <h3>Hotels</h3>
            <p>
              Multiple choices when it gets to choosing a suitable appartment
            </p>
          </div>
        </div>
        <div>
          <div className="slider-card">
            <img
              className="slider-card-img"
              src={appartment}
              alt="sliderimage3"
            />
            <h3>ApartHotel</h3>
            <p>
              Multiple choices when it gets to choosing a suitable appartment
            </p>
          </div>
        </div>
        <div>
          <div className="slider-card">
            <img
              className="slider-card-img"
              src={appartment}
              alt="sliderimage4"
            />
            <h3>Cottages</h3>
            <p>
              Multiple choices when it gets to choosing a suitable appartment
            </p>
          </div>
        </div>
        <div>
          <div className="slider-card">
            <img
              className="slider-card-img"
              src={appartment}
              alt="sliderfive"
            />
            <h3>Guest Houses</h3>
            <p>
              Multiple choices when it gets to choosing a suitable appartment
            </p>
          </div>
        </div>
        <div>
          <div className="slider-card">
            <img
              className="slider-card-img"
              src={appartment}
              alt="sliderimagesix"
            />
            <h3>Villas</h3>
            <p>
              Multiple choices when it gets to choosing a suitable appartment
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
}
