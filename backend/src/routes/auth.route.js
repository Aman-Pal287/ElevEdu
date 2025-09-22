const express = require("express");
const authController = require("../controllers/auth.controller");
const {
  registerUserValidations,
  loginUserValidations,
} = require("../middlewares/validator.middleware");
const router = express.Router();

router.post("/register", registerUserValidations, authController.registerUser);
router.post("/login", loginUserValidations, authController.loginUser);

module.exports = router;
