import express from "express";
import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from "../controllers/hotels.js";

const router = express.Router();

router
  .post("/", createHotel) // create a new hotel
  .get("/", getHotels) // get all hotels
  .get("/:id", getHotel) // get a single hotel
  .put("/:id", updateHotel) // update a hotel
  .delete("/:id", deleteHotel); // delete a hotel

export default router;
