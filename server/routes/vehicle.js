const {
  getVehicles,
  addNewVehicle,
} = require("../controllers/vehicle.controller");

const router = require("express").Router();

/**
 * Get all vehicles route
 */
router.get("/all", getVehicles);

/**
 * Add new vehicle route
 */
router.post("/add", addNewVehicle);

module.exports = router;
