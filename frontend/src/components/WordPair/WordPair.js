import React from "react";

import Styles from "./WordPair.module.scss";
import editSvg from "../../assets/img/edit.svg";
import deleteSvg from "../../assets/img/delete.svg";

export default function WordPair({ word, transaltion }) {
  return (
    <div className={Styles.WordPair}>
      <p>{word.toLowerCase()}</p>
      <p>{transaltion.toLowerCase()}</p>

      <button>
        <img src={editSvg} alt="Edit" />
      </button>

      <button>
        <img src={deleteSvg} alt="Delete" />
      </button>
    </div>
  );
}
