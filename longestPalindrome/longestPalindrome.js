/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

var longestPalindrome = function (string) {
  // loop through all chars
    // find next occurrence of the char
    // reverse the substring, check if it equals original substring
    // if it does, push it to the palindrome array
  
  // return longest palindrome from array
  let palindromes = [];

  for (let x = 0; x < string.length; x++) {
    let subStr = string.slice(x + 1);
    for (let y = 0; y < subStr.length; y++) {
      if (string[x] === subStr[y]) {
        if (isPalindrome(string, x, x + y + 1)) {
          palindromes.push(string.slice(x, x + y + 2));
        }
      }
    }
  }
  return palindromes.reduce((largest, elem) => elem.length > largest.length ? elem : largest, '');
};

var isPalindrome = function (string, start, end) {
  let subStr = string.slice(start, end + 1);
  let reverseStr = subStr.split('').reverse().join('');
  if (subStr === reverseStr) {
    return true;
  } else return false;
}

// console.log(longestPalindrome('My dad is a racecar athlete'))
// console.log(isPalindrome('dad a', 0, 3));
