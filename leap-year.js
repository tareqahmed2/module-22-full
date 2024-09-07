/**
 * year will be a leap year if the year is divisable by4
 */

function isLeapYear(year) {
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

const isLipi = isLeapYear(2045);
console.log(isLipi);

function isLeapYear2(year) {
  if (year % 100 !== 0 && year % 4 == 0) {
    return true;
  } else if (year % 100 === 0 && year % 400 == 0) {
    return true;
  } else {
    return false;
  }
}
const isleap = isLeapYear2(2100);
const isleap2 = isLeapYear2(2400);
const isleap3 = isLeapYear2(1900);
const isleap4 = isLeapYear2(2052);
console.log(isleap, isleap2, isleap3, isleap4);
