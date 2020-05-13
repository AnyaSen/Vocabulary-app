import React, { useEffect, useContext } from "react";

import Styles from "./VocabularyPage.module.scss";

import WordsList from "../../components/WordsList/WordsList";
import AddWordsForm from "../../components/AddWordsForm/AddWordsForm";
import SideBar from "../../components/SideBar/SideBar";
import BrowseVocabulary from "../../components/BrowseVocabulary/BrowseVocabulary";

import { WordsContext } from "../../contexts/WordsContext";

export default function VocabularyPage() {
  const { setWordsData } = useContext(WordsContext);

  useEffect(() => {
    setWordsData();
  }, []);

  return (
    <div className={Styles.VocabularyPage}>
      <SideBar />
      <div className={Styles.VocabularyContainer}>
        <BrowseVocabulary />
        <AddWordsForm />
        <WordsList />
      </div>
    </div>
  );
}
