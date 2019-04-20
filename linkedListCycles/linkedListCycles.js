/*
 * Assignment: Write a function that returns true if a linked list contains a cycle, or false if it terminates somewhere
 *
 * Explanation:
 * 
 * Generally, we assume that a linked list will terminate in a null next pointer, as follows:
 *
 * A -> B -> C -> D -> E -> null
 *
 * A 'cycle' in a linked list is when traversing the list would result in visiting the same nodes over and over
 * This is caused by pointing a node in the list to another node that already appeared earlier in the list. Example:
 *
 * A -> B -> C
 *      ^    |
 *      |    v
 *      E <- D
 *
 * Example code:
 *
 * var nodeA = Node('A');
 * var nodeB = nodeA.next = Node('B');
 * var nodeC = nodeB.next = Node('C');
 * var nodeD = nodeC.next = Node('D');
 * var nodeE = nodeD.next = Node('E');
 * hasCycle(nodeA); // => false
 * nodeE.next = nodeB;
 * hasCycle(nodeA); // => true
 *
 * Constraint 1: Do this in linear time
 * Constraint 2: Do this in constant space
 * Constraint 3: Do not mutate the original nodes in any way
 */

var Node = function(value) {
  return { value: value, next: null };
};


// Solution #3: Detect if two different-rate pointers ever meet, meets all requirements
var hasCycle = function(linkedList) {
  // two pointers: 1 is fast, other is slow
  // if two pointers meet at the same node, return true 
  // if the two pointers don't meet, return false

  var fastPointer = linkedList;
  var slowPointer = linkedList;

  while(slowPointer && fastPointer && fastPointer.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
    if (slowPointer === fastPointer) {
      return true;
    }
  }

  return false;
}

// Attempt #2: Constant time and space, but algorithm fails for larger data-sets
// var hasCycle = function(linkedList) {
//   // go through all nodes, keep track in a counter
//   // if counter exceeds 1,000, return true else return false
//   var count = 0;
//   var bool = false;

//   var nodeTraverser = function(node) {
//     count++;
//     if (count >= 1000) {
//       bool = true;
//       return;
//     } else if (node.next) {
//       nodeTraverser(node.next)
//     }
//   }

//   nodeTraverser(linkedList);

//   return bool;
// }

// Attempt #1: Algorithm works for all data set sizes, but 0(n^2) time and 0(n) space complexity
// var hasCycle = function(linkedList) {
//   var arr = [];
//   var bool = false;

//   // Go through the nodes
//     // Add the node object to an array to keep track
//     // If a node's next value is already in our array, return true
//     // else return false

//   var nodeTraverser = function(node) {
//     if (arr.indexOf(node) !== -1) {
//       bool = true;
//       return;
//     } else if (node.next) {
//       arr.push(node);
//       nodeTraverser(node.next);
//     }
//   }

//   nodeTraverser(linkedList);
//   return bool;
// };