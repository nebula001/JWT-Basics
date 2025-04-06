const { StatusCodes } = require("http-status-codes");
const { CustomAPIError } = require("../errors");

const errorMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ msg: "Internal Server Error" });
};

module.exports = errorMiddleware;
