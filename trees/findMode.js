/*
Given a binary search tree (BST) with duplicates, find all the mode(s) (the most frequently occurred element) in the given BST.

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than or equal to the node's key.
The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
Both the left and right subtrees must also be binary search trees.
*/

// WITH ADDITIONAL SPACE 

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
    if (!root) {
        return [];
    }
    
    let freqMap = {};
    let maxFreq = 0;
    
    const traverse = (current) => {
        if (freqMap[current.val]) {
            freqMap[current.val] += 1;
        } else {
            freqMap[current.val] = 1;
        }
        
        if (freqMap[current.val] > maxFreq) {
            maxFreq = freqMap[current.val];
        }
        
        current.left && traverse(current.left);
        current.right && traverse(current.right);
    }
    
    traverse(root);
    
    let result = [];
    
    for (let [key, value] of Object.entries(freqMap)) {
      if (value === maxFreq) {
          result.push(key);
      }
    }
    
    return result;
};