/*
Given an array A of 0s and 1s, consider N_i: the i-th subarray from A[0] to A[i] interpreted as a binary number (from most-significant-bit to least-significant-bit.)

Return a list of booleans answer, where answer[i] is true if and only if N_i is divisible by 5.
*/

/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(A) {
    const result = [];
    
    let current = BigInt(0);
    for (let i = 0; i < A.length; i ++) {
        current = current * 2n + BigInt(A[i]);
        result.push(current % 5n === 0n);
    }
    
    return result;
};