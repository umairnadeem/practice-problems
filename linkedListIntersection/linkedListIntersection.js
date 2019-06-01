/*
*
* Linked List Intersection
*
* Write a function linkedListIntersection that returns the node 
* at which the intersection of two linked lists begins, 
* or null if there is no such intersection.
* 
* Example:
* 
* Given the following two linked lists list1 and list2, 
* linkedListIntersection(list1,list2) should return D 
* as the node of intersection.
* 
*    A → B → C
*             ↘
*               D → E → F
*             ↗
*        X → Y
* 
*     
* Given the following two linked lists list1 and list2, 
* linkedListIntersection(list1,list2) should return NULL 
* as there is no point of intersection.
* 
*    A → B → C → D
*    X → Y → Z
* 
*/

// Helper function (do not edit)
function Node (val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}



function linkedListIntersection(list1, list2) {
  // TODO: Implement this function!

  // Traverse longer list first
  // Start traversing both nodes in parallel 
    // If common node found, set to true
    // else bool is false

  let result;

  const length = (list) => {
    let count = 0;
    while (list) {
      list.next;
      list = list.next;
      count++;
    }
    // console.log(count)
    return count;
  }

  const length1 = length(list1);
  const length2 = length(list2);
  const findIntersection = (long, short, diff) => {
    let output = null;
    while (diff) {
      long = long.next;
      diff--;
    }
    while (long && short) {
      if (long === short) {
        output = long;
        break;
      }
      long = long.next;
      short = short.next;
    }
    return output;
  }

  if (length1 > length2) {
    result = findIntersection(list1, list2, length1 - length2);
  } else {
    result = findIntersection(list2, list1, length2 - length1);
  }
  return result;
}

// let a = Node('a')
// let b = Node('b')
// let c = Node('c')

// const list1 = a;
// list1.next = b;
// list1.next.next = c;

// const list2 = Node('a');

// console.log(linkedListIntersection(list1, list2))