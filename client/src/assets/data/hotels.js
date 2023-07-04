import hotel1 from "../images/1.jpg";
import hotel2 from "../images/5.jpg";
import hotel3 from "../images/2.jpg";
import hotel4 from "../images/4.jpg";
import roseone from "../images/rose01.jpg";
import rosetwo from "../images/rose02.jpg";
import rosethree from "../images/rose03.jpg";
import rosefour from "../images/rose04.jpg";
import rosefive from "../images/rose05.jpg";

import elisabethOne from "../images/elizabeth01.jpg";
import elisabethTwo from "../images/elizabeth02.jpg";
import elisabethThree from "../images/elizabeth03.jpg";
import elisabethFour from "../images/elizabeth04.jpg";
import elisabethFive from "../images/elizabeth05.jpg";

import phxOne from "../images/phoenix01.jpg";
import phxTwo from "../images/phoenix02.jpg";
import phxThree from "../images/phoenix03.jpg";
import phxFour from "../images/phoenix04.jpg";
import phxFive from "../images/phoenix05.jpg";

const hotels = [
  {
    id: "01",
    title: "Queen Elisabeth Golf appartment",
    city: "Kigali",
    country: "Rwanda",
    distance: 300,
    price: 280,
    guestNumber: 10,
    address: "Nyarutarama",
    street: "KG 20 Ave",
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    rooms: [
      {
        roomName: "jhon doe",
        beds: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: hotel3,
    image_one: elisabethOne,
    image_two: elisabethTwo,
    image_three: elisabethThree,
    image_four: elisabethFour,
    image_five: elisabethFive,

    featured: true,
  },
  {
    id: "02",
    title: "Phoenix appartment",
    city: "Kigali",
    country: "Rwanda",
    distance: 18,
    price: 160,
    guestNumber: 8,
    address: "Kanombe",
    street: "KG 20 Ave",
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    rooms: [
      {
        roomName: "jhon doe",
        beds: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: hotel4,
    image_one: phxOne,
    image_two: phxTwo,
    image_three: phxThree,
    image_four: phxFour,
    image_five: phxFive,

    featured: true,
  },
  {
    id: "03",
    title: "Rose Garden",
    city: "Kigali",
    country: "Rwanda",
    distance: 2,
    price: 190,
    guestNumber: 8,
    address: "Nyarutarama",
    street: "KG 20 Ave",
    desc: "this is the description",
    reviews: [],
    rooms: [
      {
        roomName: "jhon doe",
        beds: 4.6,
      },
    ],
    avgRating: 4.1,
    photo: hotel2,
    image_one: roseone,
    image_two: rosetwo,
    image_three: rosethree,
    image_four: rosefour,
    image_five: rosefive,

    featured: true,
  },
  {
    id: "04",
    title: "Queen Elisabeth Golf appartment",
    city: "Kigali",
    country: "Rwanda",
    distance: 300,
    price: 280,
    guestNumber: 10,
    address: "Nyarutarama",
    street: "KG 20 Ave",
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    rooms: [
      {
        roomName: "jhon doe",
        beds: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: hotel1,
    image_one: hotel3,
    image_two: hotel3,

    featured: true,
  },
  {
    id: "05",
    title: "Phoenix appartment",
    city: "Kigali",
    country: "Rwanda",
    distance: 400,
    price: 99,
    guestNumber: 8,
    address: "Nyarutarama",
    street: "KG 20 Ave",
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    rooms: [
      {
        roomName: "jhon doe",
        beds: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: hotel1,
    image_one: hotel3,
    image_two: hotel3,

    featured: false,
  },
  {
    id: "06",
    title: "Rose Garden",
    city: "Thailand",
    country: "Rwanda",
    distance: 500,
    price: 99,
    guestNumber: 8,
    address: "Nyarutarama",
    street: "KG 20 Ave",
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4,
      },
    ],
    rooms: [
      {
        roomName: "jhon doe",
        beds: 4,
      },
    ],
    avgRating: 4.1,
    photo: hotel1,
    image_one: hotel3,
    image_two: hotel3,

    featured: false,
  },
  {
    id: "07",
    title: "Queen Elisabeth Golf appartment",
    city: "Kigali",
    country: "Rwanda",
    distance: 300,
    price: 99,
    guestNumber: 10,
    address: "Nyarutarama",
    street: "KG 20 Ave",
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    rooms: [
      {
        roomName: "jhon doe",
        beds: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: hotel1,
    image_one: hotel3,
    image_two: hotel3,

    featured: false,
  },
  {
    id: "08",
    title: "Phoenix appartment",
    city: "Kigali",
    country: "Rwanda",
    distance: 400,
    price: 99,
    guestNumber: 8,
    address: "Nyarutarama",
    street: "KG 20 Ave",
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    rooms: [
      {
        roomName: "jhon doe",
        beds: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: hotel1,
    image_one: hotel3,
    image_two: hotel3,

    featured: false,
  },
];

export default hotels;
