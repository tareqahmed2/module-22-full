// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// // sample-output: Programming

function findLongestWord(sentence) {
  const words = sentence.split(" ");
  console.log(words);
  let longestWord = "";

  for (const word of words) {
    if (longestWord.length < word.length) {
      longestWord = word;
    }
  }
  console.log(`the longest word from this that is :${longestWord}`);
}

const sentence = findLongestWord(
  ` I am learning Programming to become a programmer`
);
