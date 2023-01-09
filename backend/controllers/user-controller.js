const bcrypt = require("bcryptjs");
const db = require("../models");
const { User } = db;

const userController = {
  signIn:(req, res, next) => {
    const { account, password } = req.body;
    if (!account || !password) {
      return res.json({ status: 'error', message: "請輸入帳號密碼！" })
    }

    User.findOne({ where: { account } })
      .then(user => {
        if (!user) return res.status(401).json({ status: 'error', message: '找不到該使用者！' })
        if (!bcrypt.compareSync(password, user.password)) {
          return res.status(401).json({ status: 'error', message: '帳號密碼錯誤！' })
        }

        var payload = { id: user.id }
        var token = jwt.sign(payload, process.env.JWT_SECRET)
        return res.json({
          status: 'success',
          message: 'ok',
          token: token,
          user: {
            id: user.id, name: user.name, account: user.account, isAdmin: user.isAdmin
          }
        })
      })
      .catch(err => {
        next(err)
      })
  },
  signUp: (req, res, next) => {
    const { name, email, account, password, passwordCheck } = req.body;
    if (!name || !email || !account || !password || !passwordCheck) {
      return res.json({ status: "error", message: "必填項目尚未填寫完成！" });
    } else if (password !== passwordCheck) {
      return res.json({ status: "error", message: "輸入的密碼不符合！" });
    }
    User.finOne({ where: { email } })
      .then((user) => {
        if (user)
          return res.json({ status: "error", message: "Email信箱已存在！" });
        return bcrypt.hash(password, 10);
      })
      .then((hash) =>
        User.create({
          name,
          email,
          account,
          password: hash,
          role: "user",
        })
      )
      .then(() => {
        return res.json({ status: "success", message: "恭喜，帳號註冊完成！" });
      })
      .catch((err) => next(err));
  },
};

module.exports = userController;
