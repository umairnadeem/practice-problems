const unfairCoin = () => {
  const seed = Math.random();
  if (seed >= 0.7) return 1;
  else return 0;
};

const makeFair = (callback) => {
  const tossOne = callback();
  const tossTwo = callback();
  if (tossOne && !tossTwo) return 1;
  else if (!tossOne && tossTwo) return 0;
  else return makeFair();
};
