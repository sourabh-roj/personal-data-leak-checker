const validator = require("validator");

module.exports = (req, res, next) => {
  const { email, password } = req.body;

  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: "Invalid email" });
  }

  if (!validator.isStrongPassword(password)) {
    return res.status(400).json({ message: "Weak password format" });
  }

  next();
};