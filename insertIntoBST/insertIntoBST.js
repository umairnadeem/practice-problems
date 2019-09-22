/*
 * Given the root node of a binary search tree (BST) and a value to be inserted into the tree, insert the value into the BST. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.

Note that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.

For example, 

Given the tree:
        4
       / \ 2   7 / \
    1   3
And the value to insert: 5
You can return this binary search tree:

         4
       /   \
      2     7
     / \   /
    1   3 5
This tree is also valid:

         5
       /   \
      2     7
     / \   
    1   3
         \
          4
*/
// Recursively
var insertIntoBST = function(root, val) {
    const nodeTraverse = (node) => {
        if (val > node.val) {
            if (node.right) {
                nodeTraverse(node.right);
            } else node.right = new TreeNode(val);
        } else if (val < node.val) {
            if (node.left) {
                nodeTraverse(node.left);
            } else node.left = new TreeNode(val);
        }
    };
    nodeTraverse(root);
    return root;
};

// Iteratively
var insertIntoBST = function(root, val) {
    let node = root;
    while (1) {
        if (val > node.val) {
            if (node.right) {
                node = node.right;
            } else {
                node.right = new TreeNode(val);
                break;
            }
        } else if (val < node.val) {
            if (node.left) {
                node = node.left;
            } else {
                node.left = new TreeNode(val);
                break;
            }
            }
    }
    return root;
}
