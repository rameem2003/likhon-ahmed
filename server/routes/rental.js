const {
  getUserRentInfo,
  placeRent,
} = require("../controllers/rentals.controller");

const router = require("express").Router();

/**
 * Get rent info by user route
 */
router.get("/:id", getUserRentInfo);

/**
 * Place a rent route
 */
router.post("/book", placeRent);

module.exports = router;
