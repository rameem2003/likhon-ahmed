const db = require("../config/db.config");

/**
 * Get all vehicles
 */
const getVehicles = async (req, res) => {
  db.query("SELECT * FROM vehicles WHERE available = 1", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

/**
 * Add new vehicles
 */
const addNewVehicle = async (req, res) => {
  const { name, type, rent_per_day } = req.body;
  db.query(
    "INSERT INTO vehicles (name, type, rent_per_day) VALUES (?, ?, ?)",
    [name, type, rent_per_day],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Vehicle added successfully" });
    }
  );
};

module.exports = { getVehicles, addNewVehicle };
