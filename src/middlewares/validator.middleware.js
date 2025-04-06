import { validationResult } from "express-validator";
import ApiError from "../utils/api-error.js";

// Middleware function to handle validation results
export const validator = (req, res, next) => {
  // Extracts validation errors from the request
  const errors = validationResult(req);

  // If no errors are found, move to the next middleware or route handler
  if (errors.isEmpty()) {
    return next();
  }

  // Array to hold extracted validation error messages
  const extractedErrors = [];

  // Loop through each error and push an object with field name and error message
  errors.array().map((err) =>
    extractedErrors.push({
      [err.param]: err.msg, // Example: { "email": "Email is invalid" }
    }),
  );

  // Throw a custom API error with 422 status (Unprocessable Entity)
  throw new ApiError(422, "Recieved data is not valid", extractedErrors);
};
