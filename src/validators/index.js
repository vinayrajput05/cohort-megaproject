// Importing body from express-validator to define validation rules
import { body } from "express-validator";

// Validator middleware for user registration
const userRegistrationValidator = () => {
  return [
    // Validate 'email' field
    body("email")
      .trim() // Remove whitespace from both ends
      .notEmpty() // Ensure email is not empty
      .withMessage("Email is required") // Custom error message
      .isEmail() // Check if valid email format
      .withMessage("Email is invalid"),

    // Validate 'username' field
    body("username")
      .trim() // Remove whitespace
      .notEmpty() // Ensure username is not empty
      .withMessage("Username is required")
      .isLength({ min: 3 }) // Minimum 3 characters
      .withMessage("Username must be at least 3 characters long")
      .isLength({ max: 13 }) // Maximum 13 characters
      .withMessage("Username must be less than 13 characters long")
      .matches(/^[a-zA-Z0-9]+$/) // Alphanumeric only
      .withMessage("Username can only contain letters and numbers"),
  ];
};

// Validator middleware for user login
const userLoginValidator = () => {
  return [
    // Validate 'email' field
    body("email").isEmail().withMessage("Email is not valid"),

    // Validate 'password' field
    body("password").notEmpty().withMessage("Password cannot be empty"),
  ];
};

// Exporting the validators to be used in routes
export { userRegistrationValidator, userLoginValidator };
