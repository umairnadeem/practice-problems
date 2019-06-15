// Given two strings, find the minimum number of edits/operations required to convert the first string into the second string, given that the only operations can be insertion, removal, or replacement.

// Challenge: Do this in O(m x n) time, where m, n are the respective lengths of str1 and str2.

String.prototype.splice = function(start, delCount, newSubStr) {
  return this.slice(0, start) + newSubStr + this.slice(start + Math.abs(delCount));
};

function editDistance(str1, str2) {
  // go through characters of str2 (pivot)
    // check str1 in the same position
      // if characters different
        // if str1 shorter than str2
          // add character to str1
          // operations++
        // if str1 longer than or equal to str2
          // if character not included anywhere forward in str2
            // replace character
            // operations ++
          // otherwise insert character
            // operations++
    
    // if length of str1 greater than str2, remove characters from end
      // operations ++ by amount of removals
    
    // return operations
  let operations = 0;

  for (let char in str2) {
    debugger;
    char = +char;
    if (str1[char] !== str2[char]) {
      if (str1.length < str2.length) {
        str1 = str1.splice(char, 0, str2[char]);
        operations++;
      } else {
        if (str2.slice(char).indexOf(str1[char]) === -1) {
          str1 = str1.splice(char, 1, str2[char]);
          operations++;
        } else {
          str1 = str1.splice(char, 0, str2[char]);
          operations++;
        }
      }
    }
  }

  if (str1.length > str2.length) {
    operations += str1.length - str2.length;
  }

  return operations;
}

console.log(editDistance("wednesday", "sunday"));
  // 

// elle, elloh -> 2
// bbacy, bbad -> 2
// elle, hello -> 2
// dog, donhg -> 0
// eyy -> hey -> 2
// heyabc -> hey -> 3
// hey, ahey -> 