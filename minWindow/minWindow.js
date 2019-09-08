/*
Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

Example:

Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"
Note:

If there is no such window in S that covers all characters in T, return the empty string "".
If there is such window, you are guaranteed that there will always be only one unique minimum window in S.
*/
var minWindow = function(s, t) {
  const hashMap = {};
  let minIdx = [-Infinity, Infinity];

  for (let char of t) {
    hashMap[char] = (hashMap[char] || 0) + 1;
  }

  let count = Object.keys(hashMap).length;

  let i = 0,
    j = 0;
  
  while (j < s.length) {
    debugger
    if (hashMap[s[j]] !== undefined) {
      hashMap[s[j]]--;
      if (!hashMap[s[j]]) count--;
    }
    if (!count) {
      while (i <= j - t.length + 1) {
        if (hashMap[s[i]] <= 0 && j - i < minIdx[1] - minIdx[0]) {
          minIdx = [i, j];
        }
        if (hashMap[s[i]] !== undefined) {
          hashMap[s[i]]++;
          if (hashMap[s[i]] > 0) {
            count++;
            i++;
            break;
          }
        }
        i++;
      }
    }
    j++;
  }
  [i, j] = minIdx;
  
  if (i >= 0)
  return s.slice(i, j + 1);
  else return '';
};
