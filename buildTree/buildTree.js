/*
Given preorder and inorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7

*/
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var buildTree = function(preorder, inorder) {
  let i = -1;

  var build = (j = 0, start = 0, end = inorder.length, direction = 'right') => {
    if (start === end) return null;
    i++;
    if (direction === 'left') {
      for (j; j >= start; j--) {
        if (inorder[j] === preorder[i]) break;
      }
    } else {
      for (j; j < end; j++) {
        if (inorder[j] === preorder[i]) break;
      }
    }
    if (inorder[j] !== preorder[i]) return null;
    const root = new TreeNode(inorder[j]);
    root.left = build(j, start, j, 'left');
    root.right = build(j, j + 1, end);
    return root;
  };
  return build();
};

console.log(
  buildTree([3,9,20,15,7]
    [9,3,15,20,7])
);

