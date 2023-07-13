import express from "express";
import { createReview } from "../controllers/reviewController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router()

router.post('/:hotelId',verifyAdmin, createReview)

export default router;