import express from 'express';
import { createHotel, deleteHotel, findAllHotels, findHotel, getFeauturedHotel, getHotelBySearch, getHotelCounts, updateHotel } from '../controllers/hotelController.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router()

//create a new hotel 

router.post("/", createHotel);
//update a hotel 
// verifyAdmin
router.put("/:id",verifyAdmin, updateHotel);
//delete a hotel

router.delete("/:id",verifyAdmin, deleteHotel);
//find a hotel

router.get("/:id", findHotel);
//find  all hotels

router.get("/", findAllHotels);

//Search hotels
router.get("/search/getHotelBySearch", getHotelBySearch);
router.get("/search/getFeaturedHotels", getFeauturedHotel);
router.get("/search/getHotelCounts", getHotelCounts);
export default router;