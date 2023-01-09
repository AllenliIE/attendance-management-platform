const passport = require('../config/passport')
const authenticated = passport.authenticate('jwt', { session: false })
const authenticatedAdmin = (req, res, next) => {
  if (req.user && req.user.role) return next()
  return res.status(403).json({ status: 'error', message: '請確認帳號登入權限！' })
}
module.exports = {
  authenticated,
  authenticatedAdmin
}