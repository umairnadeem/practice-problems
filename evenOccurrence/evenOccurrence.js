/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one. 
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  // I: array of numbers
  // O: the first item that occurs an even number of times
  // C: none
  // E: no item occurs an even number of times, there's a tie

  // In an object, create a log of number of occurences of each number
  // Run through object: the first item that has an even number occurrence, return it

  // Create empty log object
  var logObj = {};
  var output = null;
  // Go through input array and set keys to each array element
  arr.forEach(element => {
    // Update key's value for each occurrence
    logObj[element] = logObj[element] ? logObj[element] + 1: 1;
  });

  // Go through log in order, if a number occurs an even number of times, return it
  for (let key in logObj) {
    if (logObj[key] % 2 === 0) {
      output = key;
      break;
    }
  }

return output;
};
