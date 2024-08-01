const express = require("express");
const User = require("../model/user");
const passport = require("passport");
const router = express.Router();

router.post("/signup", async (req, res) => {
  const { email, username, password } = req.body;

  const newUser = new User({ email, username });

  const regUser = await User.register(newUser, password);
  console.log(regUser);
});

router.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  async (req, res) => {
    res.send("Login SusseFully");
  }
);

module.exports = router;
