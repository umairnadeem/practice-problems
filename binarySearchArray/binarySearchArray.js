/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 * [1,2,3,4,5,6,7,8,9,10], 7
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function (array, target) {
    var index = 0;

    var divider = (array, target) => {
        if (array.length > 0) {
            var midPoint = Math.floor(array.length / 2);
            if (target === array[midPoint]) {
                index += midPoint;
                return index;
            }
            if (target > array[midPoint]) {
                index += midPoint + 1;
                return divider(array.slice(midPoint + 1), target);
            } else if (target < array[midPoint]) {
                return divider(array.slice(0,midPoint), target);
            }
        } else {
            return null;
        }
    }

    return divider(array, target);
    
};

// console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 7));

