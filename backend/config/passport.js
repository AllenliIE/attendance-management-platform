const passport = require("passport");
const LocalStrategy = require("passport-local");
const passportJWT = require("passport-jwt");
const bcrypt = require("bcryptjs");
const db = require("../models");
const User = db.User;

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },

    (req, email, password, cb) => {
      User.findOne({ where: { email } }).then((user) => {
        if (!user)
          return cb(
            null,
            false,
            res.json({ status: "error", message: "帳號或密碼輸入錯誤！" })
          );
        bcrypt.compare(password, user.password).then((res) => {
          if (!res)
            return cb(
              null,
              false,
              res.json({ status: "error", message: "帳號或密碼輸入錯誤！" })
            );
          return cb(null, user);
        });
      });
    }
  )
);

const jwtOptions = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

passport.serializeUser((user, cb) => {
  cb(null, user.id);
});
passport.deserializeUser((id, cb) => {
  User.findByPk(id).then((user) => {
    user = user.toJSON();
    return cb(null, user);
  });
});
module.exports = passport;
