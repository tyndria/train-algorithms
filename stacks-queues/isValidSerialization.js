/*
One way to serialize a binary tree is to use pre-order traversal. When we encounter a non-null node, we record the node's value. If it is a null node, we record using a sentinel value such as #.

     _9_
    /   \
   3     2
  / \   / \
 4   1  #  6
/ \ / \   / \
# # # #   # #
For example, the above binary tree can be serialized to the string "9,3,4,#,#,1,#,#,2,#,6,#,#", where # represents a null node.

Given a string of comma separated values, verify whether it is a correct preorder traversal serialization of a binary tree. Find an algorithm without reconstructing the tree.

Each comma separated value in the string must be either an integer or a character '#' representing null pointer.

You may assume that the input format is always valid, for example it could never contain two consecutive commas such as "1,,3".
*/

/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
    const stack = [];
    
    const elements = preorder.split(',');
    
    if (elements.length === 1 && elements[0] === '#') {
        return true;
    }
    
    for (let i = 0; i < elements.length; i ++) {
        const el = elements[i];
        stack.push(el);
        
        while(stack.length > 2 &&
            stack[stack.length - 1] === '#' &&
            stack[stack.length - 2] === '#' &&
            stack[stack.length - 3] !== '#'
        ) {
            stack.pop(); // pop '#'
            stack.pop(); // pop '#'
            stack.pop(); // pop parent
            
            if (i === (elements.length - 1) && !stack.length) {
                break;
            }
            
            stack.push('#');
        }
    }
    
    return !stack.length;
};