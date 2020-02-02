/*
Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value.
*/


// Additional memory
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    const traverse = (root, result) => {
        if (root) {
            result.push(root.val);
       
            traverse(root.left, result);
            traverse(root.right, result);
        } else {
            result.push(null);
        }
    };
    
    const outputP = [];
    const outputQ = [];
    
    traverse(p, outputP);
    traverse(q, outputQ);
    
    if (outputP.length !== outputQ.length) {
        return false;
    }
    
    let isSame = true;
    for (let i = 0; i < outputP.length; i ++) {
        if (outputP[i] !== outputQ[i]) {
            isSame = false;
            break;
        }
    }
    
    return isSame;
};

// No additional memory

var isSameTree = function(p, q) {
    const traverseTrees = (root1, root2) => {
        if (root1 && root2 && root1.val === root2.val) {
            return traverseTrees(root1.left, root2.left) && traverseTrees(root1.right, root2.right);
        } else if (root1 || root2) {
            return false;
        } else {
            return true;
        }
    };
    
    return traverseTrees(p, q);
};