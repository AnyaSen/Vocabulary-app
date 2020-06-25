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

router.get("/words", authentication, async (req, res) => {
  try {
    const wordsList = await Word.find({ creator: req.user._id });

    res.send(wordsList);
  } catch (e) {
    res.status(500).send();
  }
});

router.delete("/words/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    const word = await Word.findByIdAndDelete(_id);
    if (!word) {
      return res.status(404).send();
    }
    res.send(word);
  } catch {
    res.status(500).send();
  }
});

router.patch("/words/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdtes = [
    "foreignWord",
    "translation",
    "newlyAdded",
    "learning",
    "learned"
  ];
  const isValidOperation = updates.every(update =>
    allowedUpdtes.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    const word = await Word.findByIdAndUpdate(req.params.id, req.body);
    updates.forEach(update => (word[update] = req.body[update]));
    await word.save();

    if (!word) {
      return res.status(404).send();
    }
    res.send(word);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
