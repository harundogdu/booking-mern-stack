import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";

export const createHotel = async (req, res, next) => {
  try {
    const newHotel = new Hotel(req.body);
    const isSuccess = await newHotel.save();
    if (!isSuccess) return next(createError(400, "Hotel not created"));

    res.status(201).json({
      success: true,
      status: 201,
      data: newHotel,
    });
  } catch (err) {
    next(err);
  }
};

export const getHotels = async (req, res, next) => {
  try {
    const Hotels = await Hotel.find();
    res.status(200).json({
      success: true,
      status: 200,
      data: Hotels,
    });
  } catch (err) {
    next(err);
  }
};

export const getHotel = async (req, res, next) => {
  try {
    const fetchingHotel = await Hotel.findById(req.params.id);
    if (!fetchingHotel) return next(createError(404, "Hotel not found"));

    res.status(200).json({
      success: true,
      status: 200,
      data: fetchingHotel,
    });
  } catch (err) {
    next(err);
  }
};

export const updateHotel = async (req, res, next) => {
  try {
    const updatingHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatingHotel) return next(createError(404, "Hotel not updated"));

    res.status(200).json({
      success: true,
      status: 200,
      data: updatingHotel,
    });
  } catch (error) {
    next(err);
  }
};

export const deleteHotel = async (req, res, next) => {
  try {
    const isDelete = await Hotel.findByIdAndDelete(req.params.id);
    if (!isDelete) return next(createError(404, "Hotel not deleted"));

    res.status(200).json({
      success: true,
      status: 200,
      message: "Hotel deleted",
    });
  } catch (error) {
    next(err);
  }
};