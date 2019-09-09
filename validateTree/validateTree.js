/*
Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 

Example 1:

    2
   / \
  1   3

Input: [2,1,3]
Output: true
Example 2:

    5
   / \
  1   4
     / \
    3   6

Input: [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.

*/
var isValidBST = function(root) {
  var inner = (node, upper = null, lower = null) => {
      if (node === null || node === undefined) return true;
      if ((upper !== null && node.val >= upper) || (lower !== null && node.val <= lower)) {
          return false;
      }
      if (!inner(node.left, node.val, lower) || !inner(node.right, upper, node.val)) {
          return false;
      }
      return true;
  }
  return inner(root);
};