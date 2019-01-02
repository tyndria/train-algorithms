/*
Given a column title as appears in an Excel sheet, return its corresponding column number.

Example:

    A -> 1
    
    B -> 2
    
    C -> 3
    
    ...
    
    Z -> 26
    
    AA -> 27
    
    AB -> 28 
 */

function titleToNumber(A) {
    var base = 26;
    var result = 0;
    
    for (var i = 0; i < A.length; i ++) {
        var power = A.length - 1 - i;
        var digit = A.charCodeAt(i) - 'A'.charCodeAt(0) + 1;
        result += digit * Math.pow(base, power);
    }
    
    return  result;
}