// class listNode {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// function search(head, value) {
//   if (head === null) {
//     return false;
//   }
//   if (head.value === value) {
//     return true;
//   }
//   return search(head.next, value);
// }

// // Test cases:
// const head = new listNode(3);
// head.next = new listNode(6);
// head.next.net = new listNode(9);
// // The linked list is: 3 -> 6 -> 9 (3 is the head of the list)
// // & (9 is the tail of the list).


/* 1. Node Class: 
** Defines a `Node` class representing a node
in the linked list. 
** Each node has a `data` field containing the
node's value and a `next` field pointing to the 
next node in the list. */ 
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

/* 2. LinkedList Class:
** Defines a
`LinkedList` class with a `head` pointing
to the first node in the list. */
class LinkedList {
  constructor() {
    this.head = null;
  }

/* Insertion Method: 
**The `insert` method adds a new node with
the specified `data` to the beginning 
of the linked list.

** It creates a new node,sets it's `next`
to the current `head`, and updates the `head`
to the new node. */
  insert(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

/* Length Method: 
** The `length` method traverses the linked list and counts the number of nodes.

** It initializes a `count` variable to 0
and uses a `while` loop to iterate through
the list, incrementing `count` for each node.
** Returns the total count, representing the 
length of the linked list. */
  length() {
    let count = 0;
    let current = this.head;

    while (current !== null) {
      count++; 
      current = current.next;
    }
  
    return count;
  }
}
  
/* Test Linked List: 
** Creates a linked list `myList`,
inserts three nodes, and then prints the
length of the list using the `length` method.
*/
let myList = new LinkedList();
myList.insert(3); 
myList.insert(7); 
myList.insert(10);
console.log(myList.length()); // Outputs 3 