class listNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function search(head, value) {
  if (head === null) {
    return false;
  }
  if (head.value === value) {
    return true;
  }
  return search(head.next, value);
}

// Test cases:
const head = new listNode(3);
head.next = new listNode(6);
head.next.next = new listNode(9);
// The linked list is 3 -> 6 -> 9 (3 is the head of the linked list)
console.log(search(head, 3)); // true
console.log(search(head, 6)); // false
console.log(search(head, 9)); // true
