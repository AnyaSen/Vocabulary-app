export const filterVocabulary = (vocabularyArr, userInputWord) => {
  const filteredVocabulary = vocabularyArr.filter(wordPair => {
    const { foreignWord, translation } = wordPair;

    const inputWord = userInputWord.toLowerCase();

    const inputWordLength = userInputWord.length;

    const existingWordFirstLetters = foreignWord
      .toLowerCase()
      .substring(0, inputWordLength);

    const existingTranslationFirstLetters = translation
      .toLowerCase()
      .substring(0, inputWordLength);

    return (
      existingWordFirstLetters === inputWord ||
      existingTranslationFirstLetters === inputWord
    );
  });

  return filteredVocabulary;
};

export const filterNewWords = vocabularyArr => {
  const filteredWords = vocabularyArr.filter(wordPair => {
    const { newlyAdded } = wordPair;
    return newlyAdded;
  });
  return filteredWords;
};

export const filterLearningWords = vocabularyArr => {
  const filteredWords = vocabularyArr.filter(wordPair => {
    const { learning } = wordPair;

    return learning;
  });
  return filteredWords;
};

export const filterLearnedWords = vocabularyArr => {
  const filteredWords = vocabularyArr.filter(wordPair => {
    const { learned } = wordPair;
    return learned;
  });
  return filteredWords;
};

export const filterWordsFromArrayByNumber = (array, numberOfWords) =>
  array.filter((item, index) => {
    return index < numberOfWords;
  });
