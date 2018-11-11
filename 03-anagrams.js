/*
Given two strings, how many characters we need to remove to make them anagrams. 
EXAMPLE: hello, billion ===> ANSWER: 6 (`he` from hello and `biin` from billion)
*/

const diffAnagram = (word1, word2) => {
  // count letters
  const letterCounter = word => {
    const counter = {};
    for (let i = 0; i < word.length; i++) {
      if (counter[word[i]]) {
        counter[word[i]]++;
      } else {
        counter[word[i]] = 1;
      }
    }

    return counter;
  };

  const countRemaining = counter => {
    let count = 0;
    Object.keys (counter).forEach (key => {
      count += counter[key];
    });

    return count;
  };

  const word1Count = letterCounter (word1);
  const word2Count = letterCounter (word2);

  // find the diff
  let diff = 0;
  for (let i = 0; i < word1.length; i++) {
    let w1Letter = word1[i];
    let letterExists = false;
    for (let j = 0; j < word2.length; j++) {
      let w2Letter = word2[j];
      if (
        w1Letter === w2Letter &&
        word1Count[w1Letter] > 0 &&
        word2Count[w1Letter] > 0
      ) {
        word1Count[w1Letter]--;
        word2Count[w1Letter]--;
      }
    }
  }

  // count the remaining elements
  return countRemaining (word1Count) + countRemaining (word2Count);
};

console.log (diffAnagram ('a', 'aaa'));
