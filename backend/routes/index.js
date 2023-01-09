const express = require("express");
const router = express.Router();
const passport = require("../config/passport");

const admin = require("./modules/admin");
const attendController = require("../controllers/attendance-controller");
const userController = require("../controllers/user-controller");
const { apiErrorHandler } = require("../middleware/error-handler");
const { authenticated, authenticatedAdmin } = require('../middleware/api-auth')

router.use("/admin",authenticated, admin);
router.get("/attendance",authenticated, attendController.getAttendance);
router.post(
    "/signin",
    passport.authenticate("local", {
      failureRedirect: "/signin",
    }),
    userController.signIn
  );
  router.post("/signup", userController.signUp);
router.use("/", apiErrorHandler);

module.exports = router;
