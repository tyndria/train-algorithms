// Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

// The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

// You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
  const pointsWithDistance = points.map((point) => ({
      point,
      d: point[0]**2 + point[1]**2
  }))
  
  pointsWithDistance.sort(({ d: d1 }, { d: d2 }) => d1 - d2);
  
  return pointsWithDistance.slice(0, k).map(({ point }) => point);
};