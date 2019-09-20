/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

Find the minimum element.

You may assume no duplicate exists in the array.

Example 1:

Input: [3,4,5,1,2] 
Output: 1
Example 2:

Input: [4,5,6,7,0,1,2]
Output: 0

*/var findMin = function(nums) {
  const findPivot = (left, right) => {
    const mid = Math.floor((left + right) / 2);
    if (nums[left] <= nums[right]) {
      return 0;
    }
    if (nums[mid] < nums[left]) return findPivot(left, mid);
    else return findPivot(mid + 1, right);
  };
  const pivot = findPivot(0, nums.length - 1);
  return nums[pivot];
};