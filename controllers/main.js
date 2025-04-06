require("dotenv").config();
const jwt = require("jsonwebtoken");
const { createCustomError, CustomAPIError } = require("../errors/custom-error");

const login = async (req, res, next) => {
  const { username, password } = req.body || {};

  if (!username || !password) {
    const myError = createCustomError(
      "Please enter both username and password",
      400
    );
    return next(myError);
  }
  const id = new Date().getDate();
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  return res.status(201).json({ msg: "user logged in", token });
};

const dashboard = async (req, res, next) => {
  const secret = Math.floor(Math.random() * 100);
  return res.status(200).json({
    msg: "Hello dear user Example",
    secret: `Your secret number is ${secret}`,
  });
};

module.exports = { login, dashboard };
