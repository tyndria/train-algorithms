/* Implement pow(x, n), which calculates x raised to the power n (xn).*/
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    let power = Math.abs(n);
    let result = 1;
    
    while (power >= 1) {
        if (power % 2 === 1) {
            result *= x;
        }
        power = Math.floor(power / 2);
        x *= x;
    }
    
    if (Math.sign(n) < 0) {
        result = 1 / result;
    }
    
    return result;
};