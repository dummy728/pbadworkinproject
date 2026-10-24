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

const viewAllVehicles = async(req,res) => {
  try {
    const rowData = await vehicleModel.viewAllVehicles();

    res.status(200).json({
      message: 'get Vehicle successfully',
      data: rowData,
    });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error.message,
    });
  }
}

const viewSingleVehicle = async(req,res) => {
  try {
    id = req.params.id
    
    const rowData = await vehicleModel.viewSingleVehicles(id);

    res.status(200).json({
      message: 'get single Vehicle successfully',
      data : rowData
    });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error.message,
    });
  }
}

const editVehicle = async(req,res) => {
  try {
    id = req.params.id
    const vehicleInput = req.body;
    const rowData = await vehicleModel.editVehicle(id, vehicleInput);

    res.status(200).json({
      message: 'edit Vehicle successfully',
      data: rowData,
    });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error.message,
    });
  }
}

const deleteVehicle = async(req,res) => {
  try {
    id = req.params.id
    const result = await vehicleModel.deleteVehicle(id);

    res.status(200).json({
      message: `data with id: ${id} successfully deleted!`,
      data: result,
    });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error.message,
    });
  }
}

module.exports = { createVehicle, viewAllVehicles, viewSingleVehicle, editVehicle, deleteVehicle };