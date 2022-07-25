import express from "express";
import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from "../controllers/hotels.js";

const router = express.Router();

// POST Create Hotel
router.post("/", createHotel);
// GET Hotels
router.get("/", getHotels);
// GET Hotel
router.get("/:id", getHotel);
// PUT Update Hotel
router.put("/:id", updateHotel);
// DELETE Delete Hotel
router.delete("/:id", deleteHotel);

export default router;
