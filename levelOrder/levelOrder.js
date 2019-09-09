/*
Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
*/
var levelOrder = function(root) {
  const queue = [];
  const output = [];
  if (root) queue.push(root);
  else return queue;
  while (queue.length) {
      output.push(queue.map(node => node.val));
      const length = queue.length;
      for (let i = 0; i < length; i++) {
          if (queue[i].left) queue.push(queue[i].left);
          if (queue[i].right) queue.push(queue[i].right);
      }
      queue.splice(0, length);
  }
  return output;
};