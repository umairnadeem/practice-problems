var isPalindrome = function(s) {
    // I: string
    // O: boolean
    // C: O(n), O(1)
    // E: if empty string, non-Alphanumeric characters
    let exp = /[\W]/g;
    let processed = s.toLowerCase().replace(exp, '');
    console.log(processed)
    return processed.split('').reverse().join('') === processed;
};
