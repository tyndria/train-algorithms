/*
Given a binary tree, return all root-to-leaf paths.

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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const result = [];
    
    if (!root) {
        return result;
    }
    
    const traverse = (current, path) => {
        const newPath = path ? `${path}->${current.val}` : current.val.toString();
        
        if (!current.left && !current.right) {
            result.push(newPath);
        } else {
            current.left && traverse(current.left, newPath);
            current.right && traverse(current.right, newPath);
        }
    }
    
    traverse(root, null);

    return result;
};