/*Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const inner = (i) => {
        if (i < 0) {
            return [[]];
        }
        const output = inner(i - 1);
        const length = output.length;
        for (let j = 0; j < length; j++) {
            output.push(output[j].concat(nums[i]))
        }
        return output;
    };
    return inner(nums.length - 1);
};
