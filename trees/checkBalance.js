/* Given a binary tree, determine if it is height-balanced. */

// version 2

var isBalanced = function(root) {
    if (!root) {
        return true;
    }

    let isBalanced = true;

    const recurse = (node) => {
        if (!node) {
            return 0;
        }

        const leftNodeHeight = recurse(node.left);
        const rightNodeHeight = recurse(node.right);

        if (!isBalanced) {
            return;
        }

        if (Math.abs(leftNodeHeight - rightNodeHeight) <= 1) {
            return Math.max(leftNodeHeight, rightNodeHeight) + 1;
        } else {
            isBalanced = false;
        }
    }

    recurse(root);
    
    return isBalanced;
};

// version 1
function isBalanced(A){
    var balanced = 1;
    var isRunning = true;
    
    countHeight(A);
    
    return balanced;
    
    function countHeight(node) {
        if (isRunning) {
            var leftHeight = node.left === null ? -1 : countHeight(node.left);
            var rightHeight = node.right === null ? -1 : countHeight(node.right);
            
            balanced = Math.abs(leftHeight - rightHeight) <= 1 ? 1 : 0;
            if (!balanced) {
                isRunning = false;
            }
            
            return Math.max(leftHeight, rightHeight) + 1;
        }
    }
}