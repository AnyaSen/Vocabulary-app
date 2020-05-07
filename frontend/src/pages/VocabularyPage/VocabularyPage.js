import React from "react";

import Styles from "./VocabularyPage.module.scss";

import WordsListReview from "../../components/WordsListReview/WordsListReview";
import AddWordsForm from "../../components/AddWordsForm/AddWordsForm";
import SideBar from "../../components/SideBar/SideBar";

export default function VocabularyPage() {
  return (
    <div className={Styles.VocabularyPage}>
      <SideBar />
      <div className={Styles.VocabularyContainer}>
        <AddWordsForm />
        <WordsListReview />
      </div>
    </div>
  );
}
