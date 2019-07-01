/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *   longestRun("")       // null
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

var longestRun = function (string) {
  let output = [0, 0];
  let longest = 0;
  let count = 0;
  let start = 0;
  let end = 0;
  let newIteration = true;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) {
      if (newIteration) {
        start = i;
        end = i + 1;
        newIteration = false;
      }
      count++;
      if (count > longest) {
        end = i + 1;
        longest = count;
        output = [start, end];
      }
    } else {
      newIteration = true;
      count = 0;
      start = i;
      end = i;
    }
  }

  return string.length ? output : null;
};

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function (len) {
  var text = '';
  var possible = 'abcdefghijklmnopqrstuvwxyz';

  for (var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

// let str = randomString(100);
// console.log(str);
// console.log(longestRun(str)); // [1, 3]