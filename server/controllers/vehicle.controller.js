const db = require("../config/db.config");

/**
 * Get all vehicles
 */
const getVehicles = async (req, res) => {
  try {
    let vehicles = await db.query("SELECT * from vehicles");

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
 * Add new vehicles
 */
const addNewVehicle = async (req, res) => {
  const { name, type, rent_per_day } = req.body;

  try {
    let data = await db.query(
      "INSERT INTO vehicles (name, type, rent_per_day) VALUES (?, ?, ?)",
      [name, type, rent_per_day]
    );

    return res.status(201).send({
      success: true,
      msg: "New Vehicle Created Success",
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      msg: "Internal Server Error",
      error,
    });
  }
};

module.exports = { getVehicles, addNewVehicle };
