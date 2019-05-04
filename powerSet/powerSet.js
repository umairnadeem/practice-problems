/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note: 
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same. 
 * 
 * Example 2 :
 * 
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function(str) {
    var arr = [];

    function binaryCount(n)  {
        return (n >>> 0).toString(2);
    }

    function pad(string, length) {
        output = '';
        for (var i = string.length; i < length; i++) {
            output += '0';
        }
        output += string;
        return output;
    }

    var loopLength = str.length <= 1? str.length + 1: str.length*str.length;

    for (var i = 0; i < loopLength; i++) {
        var binaryString = pad(binaryCount(i), str.length);
        var tempOut = '';
        for (let index in binaryString) {
            if (parseInt(binaryString[index])) {
                tempOut += str[index];
            }
        }

        arr.push(tempOut);
    }

    return arr;
};

// console.log(powerSet('a'));
