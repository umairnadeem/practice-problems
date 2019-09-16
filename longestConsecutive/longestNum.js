/*
Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

Your algorithm should run in O(n) complexity.

Example:

Input: [100, 4, 200, 1, 3, 2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

*/

var longestConsecutive = function(nums) {
  if (!nums.length) return 0;
  const memo = {};
  const temp = {};
  let maxRange = 0;
  const newNums = [];
  nums.forEach((num) => {
    if (!temp[num]) newNums.push(num);
    temp[num] = true;
  });
  newNums.forEach((num) => {
    if (memo[num + 1] !== undefined && memo[num - 1] !== undefined) {
      const storedLower = memo[num - 1];
      const storedUpper = memo[num + 1];
      delete memo[num + 1];
      delete memo[num - 1];
      if (memo[storedLower] !== undefined) delete memo[storedLower];
      if (memo[storedUpper] !== undefined) delete memo[storedUpper];
      memo[storedLower] = storedUpper;
      memo[storedUpper] = storedLower;
    } else if (memo[num + 1] !== undefined) {
      const storedVal = memo[num + 1];
      delete memo[num + 1];
      memo[num] = storedVal;
      memo[storedVal] = num;
    } else if (memo[num - 1] !== undefined) {
      const storedVal = memo[num - 1];
      delete memo[num - 1];
      memo[num] = storedVal;
      memo[storedVal] = num;
    } else {
      memo[num] = num;
    }
  });
  Object.keys(memo).forEach((key) => {
    if (memo[key] && memo[key] !== parseInt(key)) delete memo[memo[key]];
  });
  Object.keys(memo).forEach((key) => {
    const range = Math.abs(parseInt(key) - memo[key]);
    maxRange = Math.max(maxRange, range);
  });
  return maxRange + 1;
};
console.log(
  longestConsecutive(
    [-1,0,-2,-3,-4,-5,4]
  ),
  longestConsecutive(
    [4,3,2,5,0,1]
  ),
  longestConsecutive(
    [100, 4, 200, 1, 3, 2]
  ),
  longestConsecutive(
    [4,2,2,-4,0,-2,4,-3,-4,-4,-5,1,4,-9,5,0,6,-8,-1,-3,6,5,-8,-1,-5,-1,2,-9,1]
  )
)