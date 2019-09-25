const rob = function(nums) {
  return nums.reduce((accum, elem) => [
    accum[1], Math.max(elem + accum[0], accum[1])
  ], [0,0])[1];
};
//4,1,1,4,1,1,4