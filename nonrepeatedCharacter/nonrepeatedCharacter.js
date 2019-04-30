/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here

  var uniqueArr = [];
  var duplicateArr = [];

  //go through each character
    // if it's a character
      // if not included in uniqueArr or duplicateArr
        //push to uniqueArr
      // if included in uniqueArr
        // remove that value from uniqueArr, push to duplicateArr
  
  // return first index of uniqueArr

  for (let char of string) {
    if (char.toUpperCase() !== char.toLowerCase()) {
      var uniqueIndex = uniqueArr.indexOf(char);
      if (uniqueIndex === -1 && duplicateArr.indexOf(char) === -1) {
        uniqueArr.push(char);
      } else if (uniqueIndex !== -1) {
        uniqueArr.splice(uniqueIndex,1);
        duplicateArr.push(char);
      }
    }
  }

  return uniqueArr[0];
};

// console.log(firstNonRepeatedCharacter('AACCBDDBc'))