require("dotenv").config();
const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");
const { BadRequest } = require("../errors");

const login = async (req, res, next) => {
  const { username, password } = req.body || {};

  if (!username || !password) {
    throw new BadRequest("Please enter both username and password");
  }
  const id = new Date().getDate();
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  return res.status(StatusCodes.CREATED).json({ msg: "user logged in", token });
};

const dashboard = async (req, res, next) => {
  const secret = Math.floor(Math.random() * 100);
  return res.status(StatusCodes.OK).json({
    msg: `Hello dear user ${req.user.username}`,
    secret: `Your secret number is ${secret}`,
  });
};

module.exports = { login, dashboard };
