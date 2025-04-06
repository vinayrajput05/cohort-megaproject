import { Router } from "express";
import { validator } from "../middlewares/validator.middleware.js";
import {
  userLoginValidator,
  userRegistrationValidator,
} from "../validators/index.js";
import { loginUser, registerUser } from "../controllers/auth.controller.js";

const router = Router();

router
  .route("/register")
  .post(userRegistrationValidator(), validator, registerUser);
router.route("/login").post(userLoginValidator(), validator, loginUser);

export default router;
