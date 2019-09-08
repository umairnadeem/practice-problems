/*
A message containing letters from A-Z is being encoded to numbers using the following mapping:

'A' -> 1
'B' -> 2
...
'Z' -> 26
Given a non-empty string containing only digits, determine the total number of ways to decode it.

Example 1:

Input: "12"
Output: 2
Explanation: It could be decoded as "AB" (1 2) or "L" (12).
Example 2:

Input: "226"
Output: 3
Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
*/

const numDecodings = (s) => {
  let hasOne = false;
  let ways = 0;

  for (let char of s) {
    char = +char;
    if (char >= 1) {
      hasOne = true;
    }
  }

  if (hasOne) {
    ways++;
  } else return 0;

  const findWays = (i = 0) => {
    if (i >= s.length - 1) {
      return;
    }

    if (+s[i] >= 1 && +s[i] <= 2 && +s[i + 1] <= 6) {
      ways++;
      findWays(i + 2);
    }
    findWays(i + 1);
  };

  findWays();
  return ways;
};