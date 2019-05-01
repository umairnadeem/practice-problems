/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {
  // n! possibilities

  // I: string
  // O: array of string permutations
  // C: none
  // E: empty string, duplicates

  var arr = [];

  var swapper = (str, start, end) => {
    // debugger;
    for (var x = start; x <= end; x++) {
      for (var y = start; y <= end; y++) {
        var strArr = str.split('');
        [strArr[x], strArr[y]] = [strArr[y], strArr[x]];
        var output = strArr.join('');
        arr.push(output);
        swapper(output, x + 1, string.length - 1);
      }
    }
  }
  swapper(string, 0, string.length - 1)

  return arr.filter((str, i) => arr.indexOf(str) === i);
};

console.log(allAnagrams('abcc'));