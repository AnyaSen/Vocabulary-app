import React from "react";

import Styles from "./AddBrowsePage.module.scss";

import WordsListReview from "../../components/WordsListReview/WordsListReview";
import AddWordsForm from "../../components/AddWordsForm/AddWordsForm";
import SideBar from "../../components/SideBar/SideBar";

export default function AddBrowsePage() {
  return (
    <div className={Styles.AddBrowsePage}>
      <SideBar />
      <div className={Styles.AddBrowseContainer}>
        <AddWordsForm />
        <WordsListReview />
      </div>
    </div>
  );
}
