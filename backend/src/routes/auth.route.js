const express = require("express");
const authController = require("../controllers/auth.controller");
const {
  registerUserValidations,
} = require("../middlewares/validator.middleware");
const router = express.Router();

router.post("/register", registerUserValidations, authController.registerUser);

module.exports = router;
