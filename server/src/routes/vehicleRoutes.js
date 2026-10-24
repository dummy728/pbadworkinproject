const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');

// POST - tambah kendaraan baru
router.post('/', vehicleController.createVehicle);


router.get("/all", vehicleController.viewAllVehicles);
router.get("/single/:id", vehicleController.viewSingleVehicle);
router.put("/edit/:id", vehicleController.editVehicle);
router.delete("/delete/:id", vehicleController.deleteVehicle);

module.exports = router;