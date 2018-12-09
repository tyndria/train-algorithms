/* Given three sorted arrays A, B and Cof not necessarily same sizes.

Calculate the minimum absolute difference between the maximum and minimum number from the triplet a, b, c 
such that a, b, c belongs arrays A, B, C respectively.
i.e. minimize | max(a,b,c) - min(a,b,c) |. */

function minimize(A, B, C){
    var p = {
        a: 0,
        b: 0,
        c: 0,
    };
    
    var length = {
        a: A.length,
        b: B.length,
        c: C.length,
    }
    
    var min = -1;
    
    while(true) {
        var currValue = getTargetValue(p.a, p.b, p.c);
        min = min === -1 ? currValue : Math.min(min, currValue);
        
        var key = getPointerToIncrease(p.a, p.b, p.c);
        if (p[key] < length[key] - 1) {
            p[key] ++;
        } else {
            break;
        }
    }
    
    return min;
    
    function getTargetValue(i, j, k) {
        return Math.abs(Math.max(A[i], B[j], C[k]) - Math.min(A[i], B[j], C[k]));
    }
    
    function getPointerToIncrease(i, j, k) {
        if (A[i] > B[j]) {
            return B[j] > C[k] ? 'c' : 'b';
        } else {
            return A[i] > C[k] ? 'c' : 'a';
        }
    }
}