/*
Given two arrays, write a function to compute their intersection.
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    
    const result = [];
    for (let item1 of set1) {
        if (set2.has(item1)) {
            result.push(item1);
        }   
    }
    
    return result;
};