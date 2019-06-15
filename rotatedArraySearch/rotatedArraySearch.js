/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(array.length))
 */

/*
[10,0,1,2,3,4,5], 10
[10,0,1,2], 10
[10,0], 10

[4, 5, 6, 0, 1, 2, 3], 100
[4,5,6], 100
[4], 100
*/

var rotatedArraySearch = function (rotated, target) {
  // find midpoint

  // if target = midpoint
    // return index of midpoint

  // else if array length is 1 or 0
    // return null 

  // if target < midpoint
    // if first value of first half = target, return index
    // else if first value of first half < target
      // return recurse(first half)
    // else recurse(second half)
  // if target > midpoint
    // if last value of second half = target, return index
    // if last value of second half > target
      // return recurse(second half)
    // else recursve(first half)

    let midpoint = Math.floor(rotated.length / 2);
    let firstHalf = rotated.slice(0,midpoint);
    let secondHalf = rotated.slice(midpoint);
debugger;
    if (rotated[midpoint] === target) {
      return midpoint;
    } else if (rotated.length === 0 || rotated.length === 1) {
      return null;
    } else if (target < rotated[midpoint]) {
      if (firstHalf[0] === target) {
        return 0;
      } else if (firstHalf[0] < target) {
        return rotatedArraySearch(firstHalf, target);
      } else return midpoint + rotatedArraySearch(secondHalf, target);
    } else if (target > rotated[midpoint]) {
      if (secondHalf[secondHalf.length - 1] === target) {
        return midpoint + secondHalf.length - 1;
      } else if (secondHalf[secondHalf.length - 1] > target) {
        return midpoint + rotatedArraySearch(secondHalf, target);
      } else return rotatedArraySearch(firstHalf, target);
    }
};

console.log(rotatedArraySearch([10,0,1,2,3,4,5], 5))

