/**
 * 
 * 
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.


 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  const rowsNumber = grid.length;
  const columnsNumber = grid[0].length;
  
  let islandsNumber = 0;
  
  const dfs = (i, j) => {
      const q = [[i, j]];
      
      while (q.length > 0) {
          const [i, j] = q.shift();
          
          if (i > 0 && grid[i - 1][j] === '1') {
              q.push([i - 1, j]);
              grid[i - 1][j] = 0;
          }

          if (i < (rowsNumber - 1) && grid[i + 1][j] === '1') {
              q.push([i + 1, j]);
              grid[i + 1][j] = 0;
          }

          if (j > 0 && grid[i][j - 1] === '1') {
              q.push([i, j - 1]);
              grid[i][j - 1] = 0;
          }

          if (j < (columnsNumber - 1) && grid[i][j + 1] === '1') {
              q.push([i, j + 1]);
              grid[i][j + 1] = 0;
          }
      } 
  }
  
  for (let i = 0; i < rowsNumber; i ++) {
      for (let j = 0; j < columnsNumber; j ++) {
          if (grid[i][j] === '1') {
              islandsNumber += 1;
              dfs(i, j);
          }
      }
  }
  
  return islandsNumber;
};