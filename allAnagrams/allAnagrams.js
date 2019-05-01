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

  // loop over each char
    // swap char 0 with char 0
    // swap char 0,1
    // swap char 0,2
    
    // swap char 1 with char 0
    // swap char 1 with char 1
    // swap char 1 with char 2

    // swap char 2 with char 0
    // swap char 2 with char 1
    // swap char 2 with char 2
  // var swapper = (str, x, y) => {
  //   for (let i in string) {
  //     var strArr = string.split('');
  //     [strArr[x], strArr[y]] = [strArr[y], strArr[x]];
  //     arr.push(strArr.join(''));
  //   }
  //   return str;
  // }

  for (let x in string) {
    for (let y in string) {
      var strArr = string.split('');
      [strArr[x], strArr[y]] = [strArr[y], strArr[x]];
      arr.push(strArr.join(''));
    }
  }

  // return arr;

  return arr.filter((str, i) => arr.indexOf(str) === i);
};

// console.log(allAnagrams('abc'));