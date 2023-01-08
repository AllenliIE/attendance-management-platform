const express = require("express");
const router = express.Router();

const attendController = require("../controllers/attendance-controller");

router.get("/attendance", attendController.getAttendance);
router.use("/", (req, res) => res.redirect("/attendance"));

module.exports = router;
