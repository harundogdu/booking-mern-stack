import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";
import { createError } from "../utils/error.js";

export const getRooms = async (req, res, next) => {
  try {
    const rooms = await Room.find();
    res.status(200).json({
      success: true,
      rooms,
    });
  } catch (error) {
    next(error);
  }
};

export const getRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);
    res.status(200).json({
      success: true,
      room,
    });
  } catch (error) {
    next(error);
  }
};

export const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;
  const newRoom = new Room(req.body);

  try {
    const savedRoom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (err) {
      next(error);
    }
    res.status(200).json(savedRoom);
  } catch (error) {
    next(error);
  }
};

export const updateRoom = async (req, res, next) => {
  const roomId = req.params.id;
  const updatedRoom = req.body;
  try {
    const room = await Room.findByIdAndUpdate(roomId, updatedRoom, {
      new: true,
    });
    res.status(200).json({
      success: true,
      room,
    });
  } catch (error) {
    next(error);
  }
};

export const updateRoomAvailability = async (req, res, next) => {
  try {
    await Room.updateOne(
      { "roomNumbers._id": req.params.id },
      { $push: { "roomNumbers.$.unavailableDates": req.body.availability } },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Room availability updated successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const deleteRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;
  try {
    const room = await Room.findOneAndDelete(req.params.id);
    if (!room) next(createError(404, "Room not found"));
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $pull: { rooms: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json({
      success: true,
      message: "Room deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
