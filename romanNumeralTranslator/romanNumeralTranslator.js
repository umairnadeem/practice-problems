
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` if the input is not a string. You can expect
 * all non-empty string inputs to be valid roman numerals.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function(romanNumeral) {

  // if input empty, return 0
  if (romanNumeral === '') {
    return 0;
  } else if (typeof romanNumeral !== 'string') {

    // if input not a string, return null
    return null;
  } else if (DIGIT_VALUES[romanNumeral[0]] >= DIGIT_VALUES[romanNumeral[1]] || romanNumeral.length === 1) {

    // if number infront is smaller, add this number to recursive call from 1 char ahead
    return DIGIT_VALUES[romanNumeral[0]] + translateRomanNumeral(romanNumeral.slice(1));
  } else {
   
    // if number infront is larger, subtract both numbers and add them to recursive call from 2 chars ahead
    return DIGIT_VALUES[romanNumeral[1]] - DIGIT_VALUES[romanNumeral[0]] + translateRomanNumeral(romanNumeral.slice(2));
  }
};

// console.log(translateRomanNumeral('XXIX'));