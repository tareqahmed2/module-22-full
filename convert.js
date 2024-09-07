// 12 inch 1feet
function inchToFeet(inch) {
  const feet = inch / 12;
  return feet;
}
const TareqHeight = inchToFeet(75);
console.log(TareqHeight);

function inchToFeet2(inch) {
  const feetFraction = inch / 12;
  const feetNumber = parseInt(feetFraction);
  const inchRemaining = inch % 12;
  const result = feetNumber + " ft " + inchRemaining + " inch. ";
  return result;
}

const TareqHeight2 = inchToFeet2(75);
console.log(TareqHeight2);

function mileTokilometer(mile) {
  const kilo = mile * 1.6;
  return kilo;
}

function mileTokilometer(kilo) {
  const mile = kilo * 0.62;
  return mile;
}
