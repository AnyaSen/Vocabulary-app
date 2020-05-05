const express = require("express");
const User = require("../models/user-model");
const authentication = require("../middleware/authentication");
const router = new express.Router();

router.post("/users", async (req, res) => {
  const user = new User(req.body);
  const token = await user.generateAuthToken();

  try {
    await user.save();
    res.status(201).send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("/users/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findByCredentials(email, password);
    const token = await user.generateAuthToken();

    res.send({ user: user, token });
  } catch (e) {
    res.status(400).send();
  }
});

router.get("/users/me", authentication, async (req, res) => {
  res.send(req.user);
});

module.exports = router;
