const mongoose = require("mongoose");

const Word = mongoose.model("Word", {
  foreignWord: { type: String, required: true, trim: true },
  translation: { type: String, required: true, trim: true },
  new: { type: Boolean, default: true }
});

module.exports = Word;
