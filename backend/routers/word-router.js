const express = require("express");
const Word = require("../models/word-model");
const router = new express.Router();

router.post("/words", async (req, res) => {
  const word = new Word(req.body);
  try {
    await word.save();
    res.status(201).send(word);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
