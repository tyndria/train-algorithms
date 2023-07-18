// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

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
 * @return {boolean}
 */
var isValidBST = function(root) {
    let isValid = true;
    
    const validate = (node, low = Number.NEGATIVE_INFINITY, high = Number.POSITIVE_INFINITY) => {
        if (!isValid || !node) {
            return;
        }
        
        if (low < node.val && node.val < high) {
            validate(node.left, low, node.val);
            validate(node.right, node.val, high);
        } else {
            isValid = false;
        }
    }
    
    validate(root);
    
    return isValid;
};