const db = require("../config/db.config");

/**
 * Get rent info by user id
 */
const getUserRentInfo = async (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM rentals WHERE user_id = ?", [id], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

/**
 * Place a rent
 */
const placeRent = async (req, res) => {
  const { user_id, vehicle_id, start_date, end_date } = req.body;

  db.query(
    "INSERT INTO rentals (user_id, vehicle_id, start_date, end_date) VALUES (?, ?, ?, ?)",
    [user_id, vehicle_id, start_date, end_date],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Rental booked successfully" });
    }
  );
};

module.exports = { getUserRentInfo, placeRent };
