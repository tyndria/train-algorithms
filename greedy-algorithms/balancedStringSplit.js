/*
Balanced strings are those who have equal quantity of 'L' and 'R' characters.

Given a balanced string s split it in the maximum amount of balanced strings.

Return the maximum amount of splitted balanced strings.
*/

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    const counters = { L: 0, R: 0 };
    let result = 0;
    
    for (c of s) {
        counters[c] += 1;
    
        if (counters.L === counters.R) {
            counters.L = 0;
            counters.R = 0;
            
            result += 1;
        }
    }
    
    return result;
};