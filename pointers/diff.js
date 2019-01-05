/*

Given an array ‘A’ of sorted integers and another non negative integer k, 
find if there exists 2 indices i and j such that A[i] - A[j] = k, i != j.

Return 0 / 1 ( 0 for false, 1 for true ) for this problem

Try doing this in less than linear space complexity.

*/


function diffPossible(A, B) {
    var start = 0, end = 1;
    
    var diff = -1;
    
    if (A.length < 2) {
        return 0;
    }
    
    for (var i = 1; i < A.length; i ++) {
        diff = A[i] - A[start];
        
        if (diff > B) {
            end = i;
            
            while (start < end && diff > B) {
                diff = A[end] - A[start];
                start ++;
            }
            
            start --;
            
            if (diff === B) {
                return 1;
            }
        } else if (diff === B) {
            return 1;
        }
    }
    
    return 0;
}