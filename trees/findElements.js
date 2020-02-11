/*
Given a binary tree with the following rules:

root.val == 0
If treeNode.val == x and treeNode.left != null, then treeNode.left.val == 2 * x + 1
If treeNode.val == x and treeNode.right != null, then treeNode.right.val == 2 * x + 2
Now the binary tree is contaminated, which means all treeNode.val have been changed to -1.

You need to first recover the binary tree and then implement the FindElements class:

FindElements(TreeNode* root) Initializes the object with a contamined binary tree, you need to recover it first.
bool find(int target) Return if the target value exists in the recovered binary tree.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */

// NON OPTIMAL
var FindElements = function(root) {
  this.order = [];
  
  const traverse = (current) => {
      if (current.left) {
          current.left.val = 2 * current.val + 1;
          traverse(current.left);
      }
      if (current.right) {
          current.right.val = 2 * current.val + 2;
          traverse(current.right);
      }
  };
  
  root.val = 0;
  traverse(root);
  
  const queue = [root];
  while (queue.length) {
      const { val, left, right } = queue.shift();
      this.order.push(val);
      left && queue.push(left);
      right && queue.push(right);
  }
};

/** 
* @param {number} target
* @return {boolean}
*/
FindElements.prototype.find = function(target) {
  let left = 0;
  let right = this.order.length - 1;
  
  let hasFound = false;
  
  while (left <= right) {
      const middle = Math.round((left + right) / 2);
      if (target < this.order[middle]) {
          right = middle - 1;
      } else if (target > this.order[middle]) {
          left = middle + 1;
      } else {
          hasFound = true;
          break;
      }
  }
  
  return hasFound;
};

/** 
* Your FindElements object will be instantiated and called as such:
* var obj = new FindElements(root)
* var param_1 = obj.find(target)
*/

// MORE OPTIMAL (USE SET TO CHECK FOR THE ELEMENT
var FindElements = function(root) {
  this.set = [];
  
  const elements = [];
  const traverse = (current) => {
      elements.push(current.val);
      if (current.left) {
          current.left.val = 2 * current.val + 1;
          traverse(current.left);
      }
      if (current.right) {
          current.right.val = 2 * current.val + 2;
          traverse(current.right);
      }
  };
  
  root.val = 0;
  traverse(root);
  
  this.set = new Set(elements);
};

/** 
* @param {number} target
* @return {boolean}
*/
FindElements.prototype.find = function(target) {
  return this.set.has(target);
};
)