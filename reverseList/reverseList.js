/*
 * Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?


*/
// Recursive
var reverseList = function(head, prev = null) {
    const store = head.next;
    head.next = prev;
    return reverseList(store, head);
};

// Iterative
// var reverseList = function(head) {
//     let prev = null;
//     let stored;
//     while (head) {
//         stored = head.next;
//         head.next = prev;
//         prev = head;
//         head = stored;
//     }
//     return prev;
// };

// Recursive 2
// var reverseList = function(head) {
//     const stored = reverseList(head.next);
//     head.next.next = head;
//     head.next = null;
//     return stored;
// };
