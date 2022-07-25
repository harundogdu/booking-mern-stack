import express from "express";
import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from "../controllers/hotels.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router
  .post("/", verifyAdmin, createHotel) // create a new hotel
  .get("/", getHotels) // get all hotels
  .get("/:id", getHotel) // get a single hotel
  .put("/:id", verifyAdmin, updateHotel) // update a hotel
  .delete("/:id", verifyAdmin, deleteHotel); // delete a hotel

export default router;
