/*
Students are asked to stand in non-decreasing order of heights for an annual photo.
Return the minimum number of students that must move in order for all students to be standing in non-decreasing order of height.
*/

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    const sorted = [...heights].sort((a, b) => a - b);
    
    return heights.filter((h, i) => h !== sorted[i]).length;
};