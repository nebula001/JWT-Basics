const express = require("express");
const { login, dashboard } = require("../controllers/main");
const authenticationMiddleware = require("../middlewares/auth");

const router = express.Router();

router.route("/login").post(login);
router.route("/dashboard").get(authenticationMiddleware, dashboard);

module.exports = router;
