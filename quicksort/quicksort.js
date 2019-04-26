/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */


var quicksort = function(array) {

    // define partition function, takes in array, and starting and ending index
        // declare pivot as last value
        // declare variable j which keeps track of the last-encountered, unswapped value that's larger than pivot
        // go through array
            // if current value is less than pivot, swap it with the value at j
            // increment j
        // swap the pivot with the value at j
        // if array length == 0 or 1 
            // return array
        // else
            // return partition(a, 0, j).concat(partition(a, j + 1, a.length -1))

    var partition = a => {
        var pivot = a[a.length - 1];
        var j = 0;
        debugger;

        if (a.length === 0) {
            return a;
        }

        for (var i = 0; i < a.length - 1; i++) {
            if (a[i] <= pivot) {
                [a[i], a[j]] = [a[j], a[i]];
                j++;
            }
        }

        [a[a.length - 1], a[j]] = [a[j], a[a.length - 1]];

        var firstSection = a.slice(0,j);
        var secondSection = a.slice(j,a.length);

        return (a.length === 1 || a.length === 0 ? a : partition(firstSection).concat(partition(secondSection)));
    }

    return partition(array);
};