export const createHotel = async (req, res, next) => {
  try {
    const newHotel = new Hotel(req.body);
    const isSuccess = await newHotel.save();

    if (!isSuccess) {
      res.status(400).json({
        success: false,
        message: "Hotel not created",
        status: 400,
      });
    }

    res.status(201).json({
      success: true,
      status: 201,
      data: newHotel,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      status: 400,
      message: err.message,
    });
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
    res.status(400).json({
      success: false,
      status: 400,
      message: err.message,
    });
  }
};

export const getHotel = async (req, res, next) => {
  try {
    const fetchingHotel = await Hotel.findById(req.params.id);
    if (!fetchingHotel) {
      res.status(404).json({
        success: false,
        status: 404,
        message: "Hotel not found",
      });
    }
    res.status(200).json({
      success: true,
      status: 200,
      data: fetchingHotel,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      status: 400,
      message: err.message,
    });
  }
};

export const updateHotel = async (req, res, next) => {
  try {
    const updatingHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatingHotel) {
      res.status(404).json({
        success: false,
        status: 404,
        message: "Hotel not found",
      });
    }
    res.status(200).json({
      success: true,
      status: 200,
      data: updatingHotel,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      status: 400,
      message: error.message,
    });
  }
};

export const deleteHotel = async (req, res, next) => {
  try {
    const isDelete = await Hotel.findByIdAndDelete(req.params.id);
    if (!isDelete) {
      res.status(404).json({
        success: false,
        status: 404,
        message: "Hotel not found",
      });
    }
    res.status(200).json({
      success: true,
      status: 200,
      message: "Hotel deleted",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      status: 400,
      message: error.message,
    });
  }
};
