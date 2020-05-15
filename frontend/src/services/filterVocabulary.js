export const filterVocabulary = (vocabularyArr, userInputWord) => {
  const filteredVocabulary = vocabularyArr.filter(wordPair => {

    const inputWord = userInputWord.toLowerCase();

    const existingWord = wordPair.foreignWord.toLowerCase();
    const existingTranslation = wordPair.translation.toLowerCase();

    return existingWord.includes(inputWord) || existingTranslation.includes(inputWord) ;
  });

  return filteredVocabulary;
};


