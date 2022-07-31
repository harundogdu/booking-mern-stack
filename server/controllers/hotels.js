import Room from "../models/Room.js";
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

export const countByType = async (req, res, next) => {
  try {
    const hotelCount = await Hotel.countDocuments({ type: "hotel" });
    const aparmentCount = await Hotel.countDocuments({ type: "aparment" });
    const resortCount = await Hotel.countDocuments({ type: "resort" });
    const villaConnt = await Hotel.countDocuments({ type: "villa" });
    const cabinCount = await Hotel.countDocuments({ type: "cabin" });

    res.status(200).json([
      { type: "hotel", count: hotelCount },
      { type: "aparment", count: aparmentCount },
      { type: "resort", count: resortCount },
      { type: "villa", count: villaConnt },
      { type: "cabin", count: cabinCount },
    ]);
  } catch (error) {
    next(error);
  }
};

export const countByCity = async (req, res, next) => {
  try {
    const cityCount = await Hotel.aggregate([
      { $group: { _id: "$city", count: { $sum: 1 } } },
    ])
      .sort({ title: 1 })
      .sort({ count: -1 })
      .collation({ locale: "en", caseLevel: true })
      .limit(6);

    res.status(200).json(cityCount);
  } catch (error) {
    next(error);
  }
};

export const featuredProperties = async (req, res, next) => {
  try {
    const featuredProperties = await Hotel.find({ featured: true }).limit(4);
    res.status(200).json(featuredProperties);
  } catch (error) {
    next(error);
  }
};

export const getHotelsByCity = async (req, res, next) => {
  try {
    const minPrice = req.query.min;
    const maxPrice = req.query.max;
    if (!minPrice || !maxPrice) {
      const hotels = await Hotel.find({
        city: { $regex: req.query.city.toString(), $options: "i" },
      }).sort({ rating: -1 });
      return res.status(200).json(hotels);
    }
    const hotels = await Hotel.find({
      city: { $regex: req.query.city.toString(), $options: "i" },
      cheapestPrice: { $lte: req.query.max, $gte: req.query.min },
    }).sort({ rating: -1 });
    res.status(200).json(hotels);
  } catch (error) {
    next(error);
  }
};

export const getHotelRooms = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    if (!hotel) return next(createError(404, "Hotel not found"));

    const rooms = await Promise.all(
      hotel.rooms.map((room) => {
        return Room.findById(room);
      })
    );

    res.status(200).json(rooms);
  } catch (error) {
    next(error);
  }
};