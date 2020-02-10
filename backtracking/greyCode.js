
/*
The gray code is a binary numeral system where two successive values differ in only one bit.

Given a non-negative integer n representing the total number of bits in the code, print the sequence of gray code. A gray code sequence must begin with 0.
*/

// Ugly solution
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    if (n === null) {
        return [];
    }
    
    if (n === 0) {
        return [0];
    }
    
    let data = [0, 1]
    
    for (let i = 2; i <= n; i ++) {
        const updatedData = [];
        let lastBit = 0;
        for (num of data) {
            updatedData.push(`${lastBit}${num}`);
            lastBit = +(!lastBit);
            updatedData.push(`${lastBit}${num}`);
        }
        data = updatedData;
    }
    return data.map(x => parseInt(x, 2));
};