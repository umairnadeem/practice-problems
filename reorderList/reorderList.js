/*
Given a singly linked list L: L0→L1→…→Ln-1→Ln,
reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

You may not modify the values in the list's nodes, only nodes itself may be changed.

Example 1:

Given 1->2->3->4, reorder it to 1->4->2->3.
Example 2:

Given 1->2->3->4->5, reorder it to 1->5->2->4->3.

*/
var reorderList = function(head) {
  const firstHalf = [];
  let secondHalf = [];
  let headRef = head;
  let length = 0;
  while (head) {
    head = head.next;
    length++;
  }
  const midIdx = Math.floor(length / 2);
  let i = length;
  head = headRef;
  while (i > midIdx && i--) {
    firstHalf.push(head);
    head = head.next;
  }

  while (head) {
    secondHalf.push(head);
    head = head.next;
  }
  secondHalf = secondHalf.reverse();
  i = 0;
  let j = 0;
  while (i < firstHalf.length || j < secondHalf.length) {
    firstHalf[i].next = secondHalf[j] || null;
    if (secondHalf[j]) secondHalf[j].next = firstHalf[i + 1] || null;
    i++;
    j++;
  }
  return headRef;
};