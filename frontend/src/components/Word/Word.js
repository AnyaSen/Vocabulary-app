import React from "react";

export default function Word({ word, transaltion }) {
  return (
    <div>
      <p>Word: {word}</p>
      <p>Translation: {transaltion}</p>
    </div>
  );
}
