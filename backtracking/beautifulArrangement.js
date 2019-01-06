/*

Beautiful Arrangement

Suppose you have N integers from 1 to N. We define a beautiful arrangement as an array that is constructed by these N numbers successfully 
if one of the following is true for the ith position (1 <= i <= N) in this array:

The number at the ith position is divisible by i.
i is divisible by the number at the ith position.
Now given N, how many beautiful arrangements can you construct?

*/


/**
 * @param {number} N
 * @return {number}
 */
var countArrangement = function(N) {
    let result = 0;
    
    const recurse = (index, visited) => {
        if (index === (N + 1)) {
            result ++;
            return;
        } 
        
        for (let x = 1; x <= N; x ++) {
            if (!visited[x] && (x % index === 0 || index % x === 0)) {
                recurse(index + 1, {...visited, [x]: true});
            }
        }
    }    
    
    recurse(1, {});
    
    return result;
};
