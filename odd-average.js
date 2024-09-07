// // function takes an array as parameter
// give me the average of the odd numbers in the array

function oddAverage(numbers) {
  //   console.log(numbers);
  const odds = [];
  for (const number of numbers) {
    // console.log(number);
    if (number % 2 === 1) {
      console.log(number);
      odds.push(number);
    }
  }
  //   console.log(odds);
  //   odds is the array that contains only the odds numbers from this numbers array
  let sum = 0;
  let len = odds.length;
  console.log(len);
  for (const number of odds) {
    sum += number;
  }
  const avg = sum / len;
  return avg;
}
const numbers = [42, 13, 58, 65, 81, 96, 7, 5];
const avg = oddAverage(numbers);
console.log(`average of the odd number is =${avg}`);
