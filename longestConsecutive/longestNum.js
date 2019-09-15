var longestConsecutive = function(nums) {
    const memo = {};
    let max = 0;
    nums.forEach((num) => {
      if (memo[num] === undefined) {
        if (memo[num + 1]) {
          memo[num + 1] = num;
        } else memo[num] = num;
        if (memo[num - 1]) {
          memo[num] = memo[num - 1];
          delete memo[num - 1];
        }
      }
    });
    Object.keys(memo).forEach((key) => {
      if (memo[memo[key]] !== undefined) {
        const store = memo[key];
        memo[key] = memo[memo[key]];
        delete memo[store];
      }
    });
    return memo;
};

console.log(
  longestConsecutive(
    [9,4,10,2,1,3,4,-1,0,-2,-3,-4,-5,4]
  )
)