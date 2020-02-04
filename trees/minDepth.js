/*
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

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
var minDepth = function(root) {
    let result = 1;
    
    if (!root) {
        return 0;
    }
    
    const queue = [];
    queue.push({ depth: 1, node: root });
    
    while(queue.length) {
        let { depth, node } = queue.shift();
        if (!node.left && !node.right) {
            result = depth;
            break;
        } 
        if (node.left) {
            queue.push({ depth: depth + 1, node: node.left })
        } 
        if (node.right) {
            queue.push({ depth: depth + 1, node: node.right })
        }
    }
    
    return result;
};