const {
  getVehicles,
  addNewVehicle,
} = require("../controllers/vehicle.controller");

const router = require("express").Router();

/**
 * Get all vehicles route
 * http://localhost:5000/api/vehicles/all
 */
router.get("/all", getVehicles);

/**
 * Add new vehicle route
 * http://localhost:5000/api/vehicles/add
 */
router.post("/add", addNewVehicle);

module.exports = router;
