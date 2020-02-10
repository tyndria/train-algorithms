/*
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

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
var maxDepth = function(root) {
    let result = 0;
    
    const traverse = (current, depth) => {
        if (current) {
            traverse(current.left, depth + 1);
            traverse(current.right, depth + 1)
        } else {
            result = Math.max(result, depth);
        }
    };
    
    traverse(root, 0);
    
    return result;
};

// Stack
var maxDepth = function(root) {
    let result = 0;
    
    if (!root) {
        return result;
    }
    
    const stack = [{...root, depth: 1}];
    
    while(stack.length) {
        const { left, right, depth } = stack.pop();
        result = Math.max(result, depth);
        
        if (left) {
            stack.push({...left, depth: depth + 1});
        }
        if (right) {
            stack.push({...right, depth: depth + 1});
        }
    }
    
    return result;
};