/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4';
// list.tail.value;   //yields '5';
// list.removeHead(); //yields '5';
// list.removeHead(); //yields 'null';


var LinkedList = function() {
  this.tail = null;
  this.head = null;
};

//write methods here!

LinkedList.prototype.addToTail = function(val) {
  if (this.tail) {
    this.tail.next = new this.makeNode(val);
    this.tail = this.tail.next;
  } else {
    this.tail = new this.makeNode(val);
    this.head = this.tail;
  }
};

LinkedList.prototype.removeHead = function() {
  let stored = this.head;
  if (this.head) {
    if (!stored.next) {
      this.tail = null;
    }
    this.head = this.head.next;
  }

  if (stored) {
    return stored.value;
  } else return null;
};

LinkedList.prototype.contains = function(val) {
  let node = this.head;
  let bool = false;
  while (node) {
    if (node.value === val) {
      bool = true;
    }
    node = node.next;
  }
  return bool;
};

LinkedList.prototype.makeNode = function(val) {
  this.value = val;
  this.next = null;
};

// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);

// list.addToTail(5);
// list.head.value;   //yields '4';
// console.log(list.contains(5));  //yields 'true';
// console.log(list.contains(6));  //yields 'false';
// console.log(list.removeHead()); //yields '4';
// console.log(list.tail.value);   //yields '5';
// console.log(list.removeHead()); //yields '5';
// console.log(list.removeHead()); //yields 'null';

// console.log(list)