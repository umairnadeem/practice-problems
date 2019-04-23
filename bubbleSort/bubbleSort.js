/*jshint expr:true*/

/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

// Feel free to add helper functions if needed.


var bubbleSort = function(array) {
  // I: array
  // O: sorted array
  // C: none
  // E: empty array

  // Sort largest number to the end n times
    // for each element, if next element is greater:
      // switch places
    // else move on and repeat for next pair

  var swapped = 0;
  
  for(var x = 0; x < array.length - 1; x++) {
    for (var i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i+1]) {
        var firstNumber = array[i];
        var secondNumber = array[i+1];

        array[i + 1] = firstNumber;
        array[i] = secondNumber;
        swapped++;
      }
    }

    if (!swapped) {
      break;
    }
  }
  return array;
};

console.log(bubbleSort([10,9,8,7,6,5,4]))

/* Worst case time complexity occurs when numbers are in reverse order:
    [10,9,8,7,6,5,4]

    Would have to iterate array (n-1)^2 times, or O(n^2) time complexity

    Extra credit: if loop breaks early due to array being already sorted, time complexity is O(n) since only one pass-through needed
*/