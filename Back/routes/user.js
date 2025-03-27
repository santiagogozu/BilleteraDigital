const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController.js");

// Ruta de inicio de sesión
router.post("/login", userController.login);
router.post("/users", userController.create);

module.exports = router;
