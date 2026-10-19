const vehicleModel = require('../model/vehicleModel');

const createVehicle = async (req, res) => {
  try {
    const vehicleData = req.body;

    // Validasi wajib
    if (
      !vehicleData.plateNumber ||
      !vehicleData.brand ||
      !vehicleData.model ||
      !vehicleData.status
    ) {
      return res.status(400).json({
        message: 'Bad Request',
        serverMessage: 'plateNumber, brand, model, status wajib diisi',
      });
    }

    const created = await vehicleModel.createNewVehicle(vehicleData);

    res.status(201).json({
      message: 'Vehicle added successfully',
      data: created,
    });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error.message,
    });
  }
};

module.exports = { createVehicle };