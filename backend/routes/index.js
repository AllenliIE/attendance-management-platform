const express = require("express");
const router = express.Router();

const admin = require("./modules/admin");
const attendController = require("../controllers/attendance-controller");
const userController = require('../controllers/user-controller')

router.use("/admin", admin);
router.post('/signup', userController.signUp) 
router.get("/attendance", attendController.getAttendance);
router.use("/", (req, res) => res.redirect("/attendance"));

module.exports = router;
