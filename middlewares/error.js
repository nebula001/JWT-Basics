const errorMiddleware = (err, req, res, next) => {
  return res.status(500).json({ msg: "Internal Server Error" });
};

module.exports = errorMiddleware;
