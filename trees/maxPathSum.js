/*
Given a non-empty binary tree, find the maximum path sum.

For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections.
The path must contain at least one node and does not need to go through the root.
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
 * @return {number}
 */
var maxPathSum = function(root) {
    let maxSum = root.val;
    
    const traverse = (node) => {
        if (!node) {
            return Number.MIN_VALUE;
        }
        
        const { left, right, val } = node;
        const leftSum = traverse(left);
        const rightSum = traverse(right);
        
        const max = Math.max(leftSum, rightSum, leftSum + rightSum, 0) + val;
        maxSum = Math.max(maxSum, max);
        
        return Math.max(leftSum, rightSum, 0) + val;
    }
    
    traverse(root);
    return maxSum;
};

var maxPathSum = function(root) {
    let maxPath = Number.MIN_SAFE_INTEGER;
    
    const traverse = (node) => {
        const maxLeftPath = node?.left ? traverse(node.left) : 0;
        const maxRightPath = node?.right ? traverse(node.right) : 0;
        
        const maxChildPath = Math.max(maxLeftPath, maxRightPath, 0);
        
        maxPath = Math.max(
            maxPath,
            node.val + maxChildPath, 
            node.val + maxLeftPath + maxRightPath
        )

        return node.val + maxChildPath;
    }
    
    traverse(root);
    
    return maxPath;
};