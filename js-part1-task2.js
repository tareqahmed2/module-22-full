// You are given an array of numbers. Count how many times the a number is repeated in the array.

const numbers = [5, 6, 11, 12, 98, 5, 11, 12];
let count = 0;
let checkRepeat = [];
for (let x = 0; x < numbers.length; x++) {
  isRepeated = false;

  for (let y = x + 1; y < numbers.length; y++) {
    if (numbers[x] === numbers[y]) {
      count++;
      isRepeated = true;

      if (!checkRepeat.includes[x]) {
        const num1 = checkRepeat.push(numbers[x]);
        console.log(num1);
      }
    }
  }
  if (!isRepeated && !checkRepeat.includes(numbers[x])) {
    checkRepeat.push(numbers[x]);
  }
}
console.log(`count:${count}`);
console.log(`the number  array is:${checkRepeat}`);
