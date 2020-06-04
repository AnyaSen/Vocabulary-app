export const getRandomWords = (arr, wordsNumber) => {
  const arrayOfRandomWords = arr
    .sort(() => Math.random() - 0.5)
    .slice(0, wordsNumber);

  return arrayOfRandomWords;
};
