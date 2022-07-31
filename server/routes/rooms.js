import express from "express";
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
  updateRoomAvailability,
} from "../controllers/rooms.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router
  .get("/", getRooms)
  .get("/:id", getRoom)
  .post("/:hotelId", verifyAdmin, createRoom)
  .put("/availability/:id", updateRoomAvailability)
  .put("/:id", verifyAdmin, updateRoom)
  .delete("/:id/:hotelId", verifyAdmin, deleteRoom);

export default router;
