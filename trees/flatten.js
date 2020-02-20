/* Given a binary tree, flatten it to a linked list in-place.

For example, given the following tree:

    1
   / \
  2   5
 / \   \
3   4   6
The flattened tree should look like:

1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6
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
 * @return {void} Do not return anything, modify root in-place instead.
 */

// Additional memory 
var flatten = function(root) {
    let parent = null;
    const stack = root ? [root] : [];
    
    while (stack.length) {
        const current = stack.pop();
        
        current.right && stack.push(current.right);
        current.left && stack.push(current.left);
        
        current.left = null;
        current.right = null;
        
        if (parent) {
            parent.right = current;
        }
        
        parent = current;
    }
};