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
    // extract pivot index (rounded middle index)
        // go through values except for pivot
            // if value greater than pivot, push to arr2
            // else push to arr1
        // if arr1 or arr2 has only 1 value or no values:
            // return arr1 + pivot + arr2 concat
        // else 
            // return concat quicksort(arr1) + pivot + quicksort(arr2)

    var pivotIndex = Math.floor((array.length - 1)/2);

    var result = [];
    var result2 = [];

    var arr1 = array.filter((elem, i) => i !== pivotIndex && elem < array[pivotIndex]);
    var arr2 = array.filter((elem, i) => i !== pivotIndex && elem >= array[pivotIndex]);

    if (arr1.length === 1 || arr2.length === 1 || !arr1 || !arr2) {
        result = result.concat(arr1);
        result.push(array[pivotIndex]);
        return result.concat(arr2);
    } else {
        result = quicksort(arr1);
        result2 = quicksort(arr2);
        return result.concat(result2);
    }

    console.log(arr1,arr2)
};

console.log(quicksort([9,8,7,6,5,4]))

/*
[9,8,7,6,5,4]

pivot = 7

arr1 = [9,8]
arr2 = [6,5,4]

pivot1 = 9
    arr1 = [8]
    arr2 = [];

    when empty array or 1 element in array:
        returned arr = [8,9]

pivot2 = 5
    arr1 = [6]
    arr2 = [4]

    when empty or 1 element:
        return arr = [4,5,6]

concat [4,5,6] + [7]+ [8,9]
*/