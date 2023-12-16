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
head.next.net = new listNode(9);
// The linked list is: 3 -> 6 -> 9 (3 is the head of the list)
// & (9 is the tail of the list).
