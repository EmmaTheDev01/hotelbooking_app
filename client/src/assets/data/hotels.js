import hotel1 from "../images/1.jpg";
import hotel2 from "../images/5.jpg";
import hotel3 from "../images/2.jpg";
import hotel4 from "../images/4.jpg";
 const hotels = [
  {
    id: "01",
    title: "Queen Elisabeth Golf appartment",
    city: "Kigali",
    distance: 300,
    price: 280,
    maxGroupSize: 10,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: hotel3,
    featured: true,
  },
  {
    id: "02",
    title: "Phoenix appartment",
    city: "Kigali",
    distance: 18,
    price: 160,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: hotel4,
    featured: true,
  },
  {
    id: "03",
    title: "Rose Garden",
    city: "Kigali",
    distance: 2,
    price: 190,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [ ],
    avgRating: 4.1,
    photo: hotel2,
    featured: true,
  },
  {
    id: "01",
    title: "Queen Elisabeth Golf appartment",
    city: "Kigali",
    distance: 300,
    price: 280,
    maxGroupSize: 10,
    desc: "this is the description",
    reviews: [],
    avgRating: 4.5,
    photo: hotel1,
    featured: true,
  },
  {
    id: "02",
    title: "Phoenix appartment",
    city: "Kigali",
    distance: 400,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: hotel1,
    featured: false,
  },
  {
    id: "03",
    title: "Rose Garden",
    city: "Thailand",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.1,
    photo: hotel1,
    featured: false,
  },
  {
    id: "01",
    title: "Queen Elisabeth Golf appartment",
    city: "Kigali",
    distance: 300,
    price: 99,
    maxGroupSize: 10,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: hotel1,
    featured: false,
  },
  {
    id: "02",
    title: "Phoenix appartment",
    city: "Kigali",
    distance: 400,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: hotel1,
    featured: false,
  },

];

export default hotels;
