/*
Given n non-negative integers a1, a2, ..., an,
where each represents a point at coordinate (i, ai).
'n' vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0).

Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Your program should return an integer which corresponds to the maximum area of water that can be contained 
( Yes, we know maximum area instead of maximum volume sounds weird. But this is 2D plane we are working with for simplicity ).
*/

/* O(NlogN) solution */
var maxArea = function(A) {
    var AI = A.map(function(x, i){
        return {
            value: x,
            index: i
        };
    });
    
    AI.sort(function(v1, v2){
        return v2.value - v1.value;
    });
    
    var maxIndex = -1;
    var minIndex = AI.length + 1;
    var max = 0;
    
    AI.forEach(function(x, i){
        maxIndex = Math.max(maxIndex, x.index);
        minIndex = Math.min(minIndex, x.index);
       
        if (i > 0) {
            const firstCand = Math.abs(x.index - minIndex) * x.value;
            const secondCand = Math.abs(x.index - maxIndex) * x.value;
            
            max = Math.max(max, firstCand);
            max = Math.max(max, secondCand);
        }
    });
    
    return max;
}

/* O(N) solution */
var maxArea = function(A) {
    var end = A.length - 1;
    var start = 0;
    
    var max = 0;
    
    while (start < end) {
        var current = (end - start) * Math.min(A[start], A[end]);
        
        max = Math.max(max, current);
        
        if (A[start] < A[end]) {
            start ++;
        } else {
            end --;
        }
    }
    
    return max;
}