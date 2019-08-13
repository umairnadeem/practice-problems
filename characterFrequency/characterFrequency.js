/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */


var characterFrequency = function(string) {
  let obj = {};
  let result;

  for (let char of string) {
    obj[char] = obj[char] + 1 || 1;
  }

  result = Object.keys(obj)
            .sort((a,b) => a < b ? -1 : a === b ? 0 : 1)
            .map(key => [key, obj[key]])
            .sort((a,b) => b[1] - a[1]);

  return result;
};

console.log(characterFrequency('supercalifragilisticexpialidocious'));