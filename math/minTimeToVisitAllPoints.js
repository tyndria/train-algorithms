/*
On a plane there are n points with integer coordinates points[i] = [xi, yi]. Your task is to find the minimum time in seconds to visit all points.

You can move according to the next rules:

In one second always you can either move vertically, horizontally by one unit or diagonally (it means to move one unit vertically and one unit horizontally in one second).
You have to visit the points in the same order as they appear in the array.
*/

/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let seconds = 0;
    for (let i = 0; i < points.length - 1; i ++) {
        let [x1, y1] = points[i];
        let [x2, y2] = points[i + 1];
        
        seconds += Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1));
    }
    
    return seconds;
};