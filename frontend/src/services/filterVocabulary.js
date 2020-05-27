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

export const filterNewWords = vocabularyArr => {
  const filteredWords = vocabularyArr.filter(wordPair => {
    return wordPair.new;
  });
  return filteredWords;
};

export const filterLearnedWords = vocabularyArr => {
  const filteredWords = vocabularyArr.filter(wordPair => {
    return wordPair.learned;
  });
  return filteredWords;
};

export const filterLearningWords = vocabularyArr => {
  const filteredWords = vocabularyArr.filter(wordPair => {
    return wordPair.learning;
  });
  return filteredWords;
};
