/**
 * Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  const resultList = [];
  
  if (!root) {
      return resultList;
  }
  
  const q = [root];
  
  let leftToRight = true;
  
  while (q.length > 0) {
      const levelList = [];
      const previousLevelSize = q.length;
      
      for (let i = 0; i < previousLevelSize; i ++) {
          const node = q.shift();
      
          if (node?.left) {
              q.push(node.left);
          }

          if (node?.right) {
              q.push(node.right);
          }
  
          if (leftToRight) {
              levelList.push(node.val);
          } else {
              levelList.unshift(node.val);
          }
      }
      
      resultList.push(levelList);
      leftToRight = !leftToRight;
  }
  
  return resultList;
};