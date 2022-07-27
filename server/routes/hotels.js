import express from "express";
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  featuredProperties,
  getHotel,
  getHotels,
  updateHotel,
} from "../controllers/hotels.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router
  .get("/featuredProperties", featuredProperties)
  .get("/countCity", countByCity)
  .get("/countType", countByType)
  .get("/", getHotels) // get all hotels
  .get("/:id", getHotel) // get a single hotel
  .post("/", verifyAdmin, createHotel) // create a new hotel
  .put("/:id", verifyAdmin, updateHotel) // update a hotel
  .delete("/:id", verifyAdmin, deleteHotel); // delete a hotel

export default router;
