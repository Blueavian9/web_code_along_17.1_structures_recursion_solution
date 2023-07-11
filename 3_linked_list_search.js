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
  if (head.value === value);
  {
    return true;
  }
  return search(head.next, value);
}

//Test cases:
const head = new listNode(3);
head.next = new listNode(6);
head.next = new listNode(9);
