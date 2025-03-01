const db = require("../config/db.config");

/**
 * Get rent info by user id
 */
const getUserRentInfo = async (req, res) => {
  try {
    let vehicles = await db.query("SELECT * from rentals");

    res.status(200).send(vehicles[0]);
  } catch (error) {
    return res.status(500).send({
      success: false,
      msg: "Internal Server Error",
      error,
    });
  }
};

/**
 * Place a rent
 */
const placeRent = async (req, res) => {
  const { user_id, vehicle_id, start_date, end_date } = req.body;

  try {
    let data = await db.query(
      "INSERT INTO rentals (user_id, vehicle_id, start_date, end_date) VALUES (?, ?, ?, ?)",
      [user_id, vehicle_id, start_date, end_date]
    );

    return res.status(201).send({
      success: true,
      msg: "New Rent Created Success",
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      msg: "Internal Server Error",
      error,
    });
  }
};

module.exports = { getUserRentInfo, placeRent };
