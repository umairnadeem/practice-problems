// Given two strings, find the minimum number of edits/operations required to convert the first string into the second string, given that the only operations can be insertion, removal, or replacement.

// Challenge: Do this in O(m x n) time, where m, n are the respective lengths of str1 and str2.

String.prototype.splice = function(start, delCount, newSubStr) {
  return this.slice(0, start) + newSubStr + this.slice(start + Math.abs(delCount));
};

function editDistance(str1, str2) {
  debugger;
  function recursiveDistance(first, second, x, y) {
    if (x <= 0) return y;
    if (y <= 0) return x;
    if (first[x - 1] === second[y - 1]) {
      return recursiveDistance(first, second, x - 1, y - 1);
    }
    return (1 + Math.min(recursiveDistance(first, second, x, y - 1), recursiveDistance(first, second, x - 1, y), recursiveDistance(first, second, x - 1, y - 1)));
  }

  return recursiveDistance(str1, str2, str1.length, str2.length);
}

console.log(editDistance("ac", "bd"));
  // 

// elle, elloh -> 2
// bbacy, bbad -> 2
// elle, hello -> 2
// dog, donhg -> 0
// eyy -> hey -> 2
// heyabc -> hey -> 3
// hey, ahey -> 