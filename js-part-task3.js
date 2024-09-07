// Write a
// // function to count the number of vowels in a strin
const strings = "function to count the number of vowels in a string";
const matches = strings.match(/[aeiou]/gi);
let count = 0;
if (matches) {
  count = matches.length;
}
console.log(`count:${count}`);
