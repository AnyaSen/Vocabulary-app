const express = require("express");
const User = require("../models/user-model");
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

module.exports = router;
