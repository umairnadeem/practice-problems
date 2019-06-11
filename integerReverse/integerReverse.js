/* 
* 
* Integer Reverse
* 
* Given a positive integer, return its digits reversed. 
* 
* - DO NOT CONVERT THE INPUT INTO A STRING OR ARRAY. 
* - Only use integers and math in your solution.
*
*/

function reverseInteger(number){  
  // find decimal place: 10 ^ (Math floor (log base 10 (n))) -> 1000 -> store in separate variable
  // divide number by decimal place and math.floor * decimal place -> 3000
    // if number not single-digit, subtract from total sum and repeat process
    // if number is single digit, multiply by separate variable and add to output number
    // divide separate number by 10
  
  let decimalMain = Math.pow(10, Math.floor(Math.log10(number))); // 1000
  let output = 0;

  function recursiveReverse(n) {
    let decimalRecursive = n ? Math.pow(10, Math.floor(Math.log10(n))) : 0; // 1000
    let extract = decimalRecursive ? Math.floor(n / decimalRecursive) * decimalRecursive : 0; // 3000
    if (decimalRecursive > 1) {
      recursiveReverse(n - extract);
    }
    output += decimalRecursive ? Math.floor(n / decimalRecursive) * decimalMain : 0;
    decimalMain /= 10;
  }

  if (number % 10 !== number) recursiveReverse(number);
  else return number;

  return output;
}

console.log(reverseInteger(100));

// function reverseInteger(number) {
//   let result = 0;

//   const reverseInput = (num) => {
//     if (num < 1) {
//       return;
//     }
//     let nextDigit = num % 10;
//     let orderOfMagnitude = Math.floor(Math.log10(num));
//     result += nextDigit * (Math.pow(10, orderOfMagnitude));
//     let nextNum = (num - nextDigit) / 10;
//     reverseInput(nextNum);
//   }

//   reverseInput(number);

//   return result;
// } 