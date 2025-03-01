const { register, login } = require("../controllers/auth.controller");

const router = require("express").Router();

/**
 * Register Route
 * http://localhost:5000/api/auth/register
 */
router.post("/register", register);

/**
 * Login route
 * http://localhost:5000/api/auth/login
 */
router.post("/login", login);

module.exports = router;
