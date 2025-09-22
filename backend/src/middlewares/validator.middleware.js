const { body, validationResult } = require("express-validator");

const responseWithValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  next();
};

const registerUserValidations = [
  body("email").isEmail().withMessage("Invalid email address"),

  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be atleast 6 characters long"),

  body("fullName.firstName")
    .isString()
    .withMessage("first name is must be and string")
    .notEmpty()
    .withMessage("First name is required"),
  body("fullName.lastName")
    .isString()
    .withMessage("Last name is must be and string")
    .notEmpty()
    .withMessage("Last name is required"),
  body("role")
    .optional()
    .isIn(["user", "instructor"])
    .withMessage("Role must be either user or seller"),
  responseWithValidationErrors,
];

module.exports = {
  registerUserValidations,
};
