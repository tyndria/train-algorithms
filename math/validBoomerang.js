// With shifting (only when we have restriction for the points area)

/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
  const shiftPoint = ([x, y]) => [x + 100, y + 100];
  const distRatio = (p1, p2) => (p2[1] - p1[1]) / (p2[0] - p1[0]);
  const equal = (p1, p2) => p1[0] === p2[0] && p1[1] == p2[1];
  
  const p1 = shiftPoint(points[0]);
  const p2 = shiftPoint(points[1]);
  const p3 = shiftPoint(points[2]);
  
  // (y2 - y1) / (x2 - x1) === (y3 - y1) / (x3 - x1) 
  const inOneLine = distRatio(p1, p2) === distRatio(p1, p3);
  const isDistinct = !equal(p1, p2) && !equal(p2, p3) && !equal(p1, p3)

  return !inOneLine && isDistinct;
};

// TODO: could be done without fraction and shifting