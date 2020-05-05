const express = require("express");
const Word = require("../models/word-model");
const authentication = require("../middleware/authentication");
const router = new express.Router();

router.post("/words", authentication, async (req, res) => {
  const word = new Word({
    ...req.body,
    creator: req.user._id
  });

  try {
    await word.save();
    res.status(201).send(word);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/words", async (req, res) => {
  try {
    const wordsList = await Word.find({});
    res.send(wordsList);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
