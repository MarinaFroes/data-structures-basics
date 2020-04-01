// Based on the Queue class from 'JavaScript Data Structures and Algorithms - Third Edition' by Loiane Groner - It has some annotations and changes made by me
// Queue and Stack classes are very similar, just the principles for adding and removing the elements are different.

class Queue {
  constructor() {
    this.count = 0; // Tracks the size of the object
    this.lowestCount = 0; // Tracks the key of the first element of the queue
    this.items = {};
  }

  // I added this method to print the entire queue 
  // And removed the toString() method from Groner's book
  print() {
    console.log(this.items)
  }

  // Add element to the back of the queue
  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }

  // Remove element from the front of the queue
  dequeue() {
    if (this.isEmpty === true) {
      console.log('is empty')
      return undefined;
    }

    const result = this.items[this.lowestCount]; // Store the value from the front
    delete this.items[this.lowestCount]; // Remove value from the front
    this.lowestCount++; // Update the key of the first value of the queue
    this.count--;
    return result; // Return the removed element
  }

  // Return the first element of the queue
  peek() {
    if (this.isEmpty === true ) {
      return undefined;
    }

    return this.item[this.lowestCount];
  }
  
  // Check if the queue is empty
  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }

}

const myQueue = new Queue();

myQueue.enqueue(1);
myQueue.enqueue(23);
myQueue.enqueue(34);
myQueue.enqueue(13);
myQueue.enqueue(5);
myQueue.print();
console.log(myQueue.isEmpty());
console.log(myQueue.size());
myQueue.dequeue();
myQueue.dequeue();
myQueue.print();
console.log(myQueue.size());
