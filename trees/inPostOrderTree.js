/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const buildTreeArray = (treeTop) => {
    const nodes = [];

    const pushNodes = (node) => {

    }
}

const buildTree = (inorder, postorder) => {
    const build = (subtreeValues, prevParentIndex, prevParentNode) => {
        if (prevParentIndex > 0) {
            const prevParentValue = postorder[prevParentIndex];
        
            const dividerIndex = subtreeValues.findIndex(x => x === prevParentValue);
            const leftChildrens = subtreeValues.slice(0, dividerIndex);
            const rightChildrens = subtreeValues.slice(dividerIndex + 1, subtreeValues.length);

            if (rightChildrens.length) {
                const rightChildrenIndex = prevParentIndex - 1;
                const rightChildrenValue = postorder[rightChildrenIndex];
                const rightChildrenNode = new TreeNode(rightChildrenValue);
                prevParentNode.right = rightChildrenNode;
                build(rightChildrens, rightChildrenIndex, rightChildrenNode);
            }

            if (leftChildrens.length) {
                let leftChildrenIndex = prevParentIndex - 1;
                while(!leftChildrens.find(x => x === postorder[leftChildrenIndex])) {
                    leftChildrenIndex --;
                }
                const leftChildrenValue = postorder[leftChildrenIndex];
                const leftChildrenNode = new TreeNode(leftChildrenValue);
                prevParentNode.left = leftChildrenNode;
                build(leftChildrens, leftChildrenIndex, leftChildrenNode);
            }
        }
    }

    const topNode = new TreeNode(postorder[postorder.length - 1]);

    build(inorder, postorder.length - 1, topNode);
    console.log(topNode)
};

// Build an array from tree using breadth-first search

buildTree([4, 2, 5, 1], [4, 5, 2, 1]);