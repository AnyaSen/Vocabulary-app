const mongoose = require("mongoose");

const Word = mongoose.model("Word", {
  foreignWord: { type: String, required: true, trim: true },
  translation: { type: String, required: true, trim: true },
  new: { type: Boolean, default: true },
  learning: { type: Boolean, default: false },
  learned: { type: Boolean, default: false },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"
  }
});

module.exports = Word;
