import React, { useContext } from "react";

import { deleteWord } from "../../services/deleteWord";

import Styles from "./WordPair.module.scss";
import editSvg from "../../assets/img/edit.svg";
import deleteSvg from "../../assets/img/delete.svg";
import { WordsContext } from "../../contexts/WordsContext";

export default function WordPair({ word, transaltion, ID }) {
  const { setWordsData } = useContext(WordsContext);

  const deleteAndUpdate = () => {
    deleteWord(ID);
    setWordsData();
  };

  return (
    <div className={Styles.WordPair}>
      <p>{word.toLowerCase()}</p>
      <p>{transaltion.toLowerCase()}</p>

      <button>
        <img src={editSvg} alt="Edit" />
      </button>

      <button onClick={deleteAndUpdate}>
        <img src={deleteSvg} alt="Delete" />
      </button>
    </div>
  );
}
