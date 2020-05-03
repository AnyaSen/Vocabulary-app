import React from "react";

import WordsListReview from "../../components/WordsListReview/WordsListReview";
import AddWordsForm from "../../components/AddWordsForm/AddWordsForm";

export default function AddBrowsePage() {
  return (
    <div>
      <AddWordsForm />
      <WordsListReview />
    </div>
  );
}
