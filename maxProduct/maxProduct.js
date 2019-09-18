/*
Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

Example 1:

Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
*/
var maxProduct = function(nums) {
  let max = nums[0];
  let absMax = -1;
  let absMaxIdx = 0;
  let product = 1;
  let absMaxProduct;
  let i = 0,
    j = 0;
  while (j < nums.length) {
    if (nums[i] === 0) i++;
    if (nums[j] === 0) j++;
    while (nums[j]) {
      product *= nums[j];
      max = Math.max(product, max);
      if (Math.abs(product) > absMax) {
        absMaxIdx = j;
        absMaxProduct = product;
      }
      j++;
    }
    while (i < absMaxIdx) {
      absMaxProduct /= nums[i];
      max = Math.max(absMaxProduct, max);
      i++;
    }
    if (nums[j] === 0) max = Math.max(0, max);
    product = 1;
    i = ++j;
  }
  return max;
};