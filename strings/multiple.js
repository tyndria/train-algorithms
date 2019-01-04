/*

Multiply String

Given two numbers represented as strings, return multiplication of the numbers as a string.

Note: The numbers can be arbitrarily large and are non-negative.
Note2: Your answer should not have leading zeroes. For example, 00 is not a valid answer. 
For example, 
given strings "12", "10", your answer should be “120”.

*/


function multiply(A, B) {
    function multipleByDigit(X, z) {
        var str = "";
        var rest = 0;
        for (var i = X.length - 1; i >= 0; i --) {
            var result = +X[i] * z + rest;
            str = result % 10 + "" + str;

            rest = Math.floor(result / 10);
        }  
        
        if (rest > 0) {
            str = rest + "" + str;
        }
        
        return str;
    }
    
    function add(X, Z) {
        var rest = 0;
        var str = "";
        
        var i = X.length - 1, j = Z.length - 1;
        while (i >= 0 || j >= 0) {
            var x = i >= 0 ? +X[i] : 0;
            var z = j >= 0 ? +Z[j] : 0;
            
            var result = x + z + rest;
            rest = Math.floor(result / 10);
            str = result % 10 + str;
            
            i --;
            j --;
        }
        
        if (rest > 0) {
            str = '1' + str;
        }

        return str;
    }
    
    function doMultiple(A, B) {
        var partialSums = [];
        for (var i = B.length - 1; i >= 0; i --) {
            var multipleResult = multipleByDigit(A, B[i]);
            var zeros = new Array(B.length - i).join("0");
            multipleResult += zeros;
            
            partialSums.push(multipleResult);
        }
        
        var result = "";
        for (var i = 0; i < partialSums.length; i ++) {
            result = add(result, partialSums[i]);
        }
        
        if (+result === 0) {
            return  '0';
        }
        
        while (result.charAt(0) === '0') {
            result = result.substr(1);
        }
        
        return result;
    }
    
    return doMultiple(A, B);
}
