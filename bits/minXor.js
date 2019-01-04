function findMinXor(A) {
    A.sort(function(a, b) { return a - b; });
    
    var min = Number.MAX_VALUE;
    for (var i = 0; i < A.length - 1; i ++) {
        min = Math.min(min, A[i] ^ A[i + 1]);
    }
    
    return min;
}