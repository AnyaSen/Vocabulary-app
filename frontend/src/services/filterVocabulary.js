export const filterVocabulary = (vocabularyArr, userInputWord) => {
  const filteredVocabulary = vocabularyArr.filter(wordPair => {
    const inputWord = userInputWord.toLowerCase();

    const inputWordLength = userInputWord.length;

    const existingWordFirstLetters = wordPair.foreignWord
      .toLowerCase()
      .substring(0, inputWordLength);

    const existingTranslationFirstLetters = wordPair.translation
      .toLowerCase()
      .substring(0, inputWordLength);

    return (
      existingWordFirstLetters === inputWord ||
      existingTranslationFirstLetters === inputWord
    );
  });

  return filteredVocabulary;
};
