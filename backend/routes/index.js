const express = require("express");
const router = express.Router();

const admin = require("./modules/admin");
const attendController = require("../controllers/attendance-controller");
const userController = require("../controllers/user-controller");
const { apiErrorHandler } = require("../middleware/error-handler");

router.use("/admin", admin);
router.post("/signup", userController.signUp);
router.get("/attendance", attendController.getAttendance);
router.use("/", apiErrorHandler);

module.exports = router;
