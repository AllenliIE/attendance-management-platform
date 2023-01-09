const bcrypt = require("bcryptjs");
const db = require("../models");
const { User } = db;

const userController = {
  signUp: (req, res) => {
    const { name, email, account, password, passwordCheck } = req.body;
    if (!name || !email || !account || !password || !passwordCheck) {
      return res.json({ status: "error", message: "必填項目尚未填寫完成！" });
    } else if (password !== passwordCheck) {
      return res.json({ status: "error", message: "輸入的密碼不符合！" });
    }
    User.finOne({where:{email}})
    .then(user => {
        if (user) res.json({ status: "error", message: "Email信箱已存在！"})
        return bcrypt.hash(password, 10)
    }).then(hash => User.create({
        name,
        email,
        account,
        password: hash
      }))
      .then(() => {
        return res.json({ status: "success", message: "恭喜，帳號註冊完成！"});
      }).catch(err => next(err))
  }
}



module.exports = userController;
