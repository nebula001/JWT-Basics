const login = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ msg: "Please enter both username and password" });
  }
  return res.status(201).json({ msg: "user logged in" });
};

const dashboard = (req, res) => {
  return res.status(200).json({
    msg: "Hello dear user Example",
    secret: "Here is your secret data",
  });
};

module.exports = { login, dashboard };
