/*
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (!prices.length) {
        return 0;
    }
    
    let minElementBefore = prices[0];
    let result = 0;
    
    for (let i = 1; i < prices.length;i ++) {
        if (prices[i] > prices[i - 1]) {
            minElementBefore = Math.min(minElementBefore, prices[i - 1]);
        }
        
        result = Math.max(result, prices[i] - minElementBefore);
    }
    
    return result;
};

var maxProfit = function(prices) {
    if (prices.length <= 1) {
        return 0;
    }

    let maxProfit = 0;
    let minElementInSlice = prices[0];

    for (let i = 1; i < prices.length; i ++) {
        minElementInSlice = Math.min(minElementInSlice, prices[i - 1]);
        maxProfit = Math.max(maxProfit, prices[i] - minElementInSlice);
    }

    return maxProfit;
};