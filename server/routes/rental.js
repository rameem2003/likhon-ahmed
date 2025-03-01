const {
  getUserRentInfo,
  placeRent,
} = require("../controllers/rentals.controller");

const router = require("express").Router();

/**
 * Get all rent info
 * http://localhost:5000/api/rentals/all
 */
router.get("/all", getUserRentInfo);

/**
 * Place a rent route
 * http://localhost:5000/api/rentals/book
 */
router.post("/book", placeRent);

module.exports = router;
