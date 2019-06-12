/**
* Extend the Number prototype with a new method called `toEnglish`.
* It should return the number as a string using English words.
* Examples:
*   (7).toEnglish(); // > "seven"
*   (575).toEnglish(); // > "five hundred seventy-five"
*   (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*
* Extra credit: Make your function support decimals.
* Example:
*   (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
*
 */

var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

Number.prototype.toEnglish = function () {

  let output = ``;

  // 0 - 20
  if (numbersToWords[this]) {
    return numbersToWords[this];
  }

  //21 - 99
  if (this < 100) {
    output = `${numbersToWords[this - (this % 10)]}-${(this % 10).toEnglish()}`;
  }

  // 100 - 9999
  if (this < 10000 && this >= 100) {
    let placement;
    for (let place in numbersToPlace) {
      if (Math.floor(this / place) < 10) {
        placement = place;
        break;
      }
    }
    // return this % placement
    output = `${Math.floor(this / placement).toEnglish()} ${numbersToPlace[placement]} ${this % placement ? (this % placement).toEnglish() : ''}`;
  } else if (this >= 10000) {
    let n = this;
    let i = 0;
    const thousand = 1e3;

    while (n >= thousand) {
      n /= thousand;
      i++;
    }

    output = `${Math.floor(n).toEnglish()} ${numbersToPlace[thousand ** i]} ${this % (thousand ** i) ? (this % (thousand ** i)).toEnglish() : ''}`;
  }

  // Decimal support
  // if (this % 1) {
  //   let n = Math.round(this % 1);
  //   while (n % 1) {
  //     n *= 10;
  //   }
  //   return n;
  // }

  return output.trim();
};

// console.log((10000000000).toEnglish());

// 0 - 20 -> direct translations
// 21 - 99 ->  direct translation of 1st place + direct translation of 2nd place
  // direct translation(n - (n % 10)) + direct translation (n % 10)
// 100 - 999 ->  direct translation (Math.floor(n / 100)) + hundred + recursive(n % 100)
// 1000 - 9999 -> direct translation (Math.floor(n / 1000)) + thousand + recursive(n % 1000)
// 10,000 - 99,999 -> 