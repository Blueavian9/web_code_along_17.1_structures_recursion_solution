// 1.
// Driver Task
let myArray = [1, 2, 3, 4, 5];

// Accessing elements
console.log(myArray[2]); // Output 3

// Adding elements
myArray.push(6);
console.log(myArray); // Outputs [1, 2, 3, 4, 5, 6];

// Removing elements
myArray.pop();
console.log(myArray); // Outputs [1, 2, 3, 4, 5]

// 2.
// Navigator Task
let myObject = {
  name: "Cesar",
  age: 37,
  city: "Pasadena",
  job: "Security Officer",
  education: "BloomTech",
  career: "Software Engineer",
};

// Accessing properties
console.log(myObject.name); // Outputs Cesar

// Adding properties
myObject.job = "Developer";
console.log(myObject); // Output { name: 'Cesar', age: 37, city: 'Pasadena', job: 'Security', etc.. etc...}

// 3. Linked List

// Driver Task
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  display() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  // Navigator Task 1: Deletion
  delete(data) {
    let current = this.head;
    let prev = null;

    while (current !== null && current.data !== data) {
      prev = current;
      current = current.next;
    }

    if (current !== null) {
      if (prev === null) {
        // Node to be deleted is the head
        this.head = current.next;
      } else {
        prev.next = current.next;
      }
    }
  }

  // Navigator Task 2: Search
  search(data) {
    let current = this.head;

    while (current !== null) {
      if (current.data === data) {
        return true;
      }
      current = current.next;
    }

    return false;
  }

  // Navigator Task 3: Reverse
  reverse() {
    let current = this.head;
    let prev = null;
    let next = null;

    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }
}

// Test Linked list
let myList = new LinkedList();
myList.insert(3);
myList.insert(7);
myList.insert(10);
myList.display(); // Outputs 10, 7, 3

// Test Deletion
myList.delete(7);
myList.display(); // Output 10, 3

// Test Search
console.log(myList.search());
console.log(myList.search()); // Outputs 3, 10
