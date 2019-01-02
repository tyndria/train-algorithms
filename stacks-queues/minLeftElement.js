/*

Given an array, find the nearest smaller element G[i] for every element A[i] in the array such that the element has an index smaller than i.

More formally,

G[i] for an element A[i] = an element A[j] such that 
    j is maximum possible AND 
    j < i AND
    A[j] < A[i]
Elements for which no smaller element exist, consider next smaller element as -1.

*/

function prevSmaller(A){
    var result = [];
    var stack = [];
    
    for (var i = 0; i < A.length; i ++) {
        var el = A[i];
        
        var candidate = -1;
        while (stack.length !== 0) {
            var top = stack[stack.length - 1];
            if (top === undefined) {
                break;
            } else if (top < el) {
                candidate = top;
                break;
            } else {
                stack.pop();
            }
        }
        
        result.push(candidate);
        stack.push(el);
    }
    
    return result;
}