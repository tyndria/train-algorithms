/* 
Given an integer n. No-Zero integer is a positive integer which doesn't contain any 0 in its decimal representation.

Return a list of two integers [A, B] where:

A and B are No-Zero integers.
A + B = n
It's guarateed that there is at least one valid solution. If there are many valid solutions you can return any of them.

*/

/**
 * @param {number} n
 * @return {number[]}
 */
// TODO: remove operations with strings
var getNoZeroIntegers = function(n) {
    const includeZero = x => x.toString().includes("0");  
    
    const splitByZero = x => {
        const firstZeroIndex = x.toString().indexOf("0");
        const len = x.toString().length;
        const truncated = x - x % (Math.pow(10, len - firstZeroIndex - 1)) - 1;
        const rest = x - truncated;
        
        if (includeZero(rest)) {
            return [rest + 1, truncated - 1];
        }
        return [rest, truncated];
    }
    
    
    let [x1, x2] = [0, n];
    while (includeZero(x2)) {
        const [x2_1, x2_2] = splitByZero(x2);
        [x1, x2] = [x1 + x2_1, x2_2];
    }
    
    while(includeZero(x1) || includeZero(x2)) {
        x1 += 1;
        x2 -= 1;
    }

    return [x1, x2]
};