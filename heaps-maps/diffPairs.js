/*

K-diff Pairs in an Array

Given an array of integers and an integer k, you need to find the number of unique k-diff pairs in the array. 
Here a k-diff pair is defined as an integer pair (i, j), where i and j are both numbers in the array and their absolute difference is k.

*/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findPairs = (nums, k) => {
    if (k < 0) {
        return 0;
    }
    
    const map = new Map();
    let result = 0;
    
    for (let i = 0; i < nums.length; i ++) {
        const num = nums[i];
        
        if (!map.has(num)) { 
            if (map.has(num - k)) {
                result ++;
            }
            
            if (map.has(num + k)) {
                result ++;
            }
            
            map.set(num, 1);
        } else {
            if (k === 0) {
                let value = map.get(num);
                if (value === 1) {
                    result ++;
                    map.set(num, ++value);
                } 
            }
        }
    }
    
    return result;
};