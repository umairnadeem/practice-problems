/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



var commonCharacters = function(...args) {
  let pivotString = args[0];
  let otherStrings = args.slice(1);
  let output = '';

  for (let pivotChar of pivotString) {
    let charExists = true;
    otherStrings.forEach(string => {
      if (!string.includes(pivotChar)) {
        charExists = false;
      }
    });
    if (charExists) {
      output += pivotChar;
    }
  }

  // Eliminate spaces and duplicates
  output = Array.from(new Set(output.replace(/ /g, '').split(''))).join('');
  return output;
};

// console.log(commonCharacters('aa', 'aa'));