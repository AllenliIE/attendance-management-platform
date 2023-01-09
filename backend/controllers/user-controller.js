const bcrypt = require("bcryptjs");
const db = require("../models");
const { User } = db;

const userController = {
  signUp: (req, res) => {
    bcrypt
      .hash(req.body.password, 10)
      .then((hash) =>
        User.create({
          name: req.body.name,
          email: req.body.email,
          account: req.body.account,
          password: hash,
        })
      )
      .then(() => {
        res.redirect("/signin");
      });
  },
};

module.exports = userController;
