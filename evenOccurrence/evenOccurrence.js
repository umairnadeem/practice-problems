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

  var newArr = arr.filter(elem => {
    var counter = 0;
    arr.forEach(element => {
      if (element === elem) {
        counter++;
      }
    })

    if (counter % 2 === 0) {
      return elem;
    }
  });

  var output = newArr[0] ? newArr[0] : null;
  return output;
};

