/* Given a binary tree, determine if it is height-balanced. */
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