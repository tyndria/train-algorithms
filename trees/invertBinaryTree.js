// Given the root of a binary tree, invert the tree, and return its root.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (!root) {
      return null;
  }

  let newRoot = new TreeNode(root.val);
  let currentNode = newRoot;

  const recurse = (oldNode, newNode) => {
      if (oldNode.right) {
          newNode.left = new TreeNode(oldNode.right.val);
          recurse(oldNode.right, newNode.left);
      }

      if (oldNode.left) {
          newNode.right = new TreeNode(oldNode.left.val);
          recurse(oldNode.left, newNode.right);
      }
  }

  recurse(root, currentNode);

  return newRoot;
};


// iterative approach

var invertTree = function(root) {
  if (!root) {
      return root;
  }

  let q = [root];

  while (q.length > 0) {
      const node = q.shift();

      if (node.left) {
          q.push(node.left);
      }

      if (node.right) {
          q.push(node.right);
      }

      const left = node.left;
      node.left = node.right;
      node.right = left;
  }

  return root;
};