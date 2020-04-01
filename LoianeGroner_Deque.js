// Based on the Queue class from 'JavaScript Data Structures and Algorithms - Third Edition' by Loiane Groner - It has some annotations and changes made by me

// Deque implements both principles, FIFO and LIFO - it is a merger between the queue and the stack data structures.

class Deque{
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  // I added this method to print the entire queue 
  // And removed the toString() method from Groner's book
  print() {
    console.log(this.items);
  }

  isEmpty() {
    return this.count === 0;
  }
  
  size() {
    return this.count;
  }

  clear() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  addBack(element) {
    this.items[this.count] = element;
    this.count++;
  }

  peekBack() {
    return this.items[this.count - 1];
  }

  peekFront() {
    return this.items[this.lowestCount];
  }

  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    
    const result = this.items[this.count];
    delete this.items[this.count];
    this.count--;
    return result;
  }

  removeFront() {
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    this.count--;
    return result;
  }

  addFront(element) {
    if (this.isEmpty()) {
      // If the queue is empty, adding to the from is the same of adding to the back
      this.addBack(element);
      
    } else if (this.lowestCount > 0) {
      // If an element was removed from the front, we decrease lowestCount and add the new element with lowestCount as the key
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
      // If this.lowestCount === 0, we need to move all elements to the next position to free the first index
      for (let i = this.count; i > 0; i--) { 
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.lowestCount = 0;
      this.items[0] = element;
    }
  }
}

const deque = new Deque();
console.log(deque.isEmpty()); // true
deque.addBack('John');
deque.addBack('Jack');
console.log(deque.print()); // John,Jack
deque.addBack('Camila');
console.log(deque.print()); // John,Jack,Camila
console.log(deque.size()); // 3
console.log(deque.isEmpty()); // false
deque.removeFront(); // remove John
console.log(deque.print()); // Jack,Camila
deque.removeBack(); // remove Camila
console.log(deque.print()); // Jack
deque.addFront('John'); 
console.log(deque.print()); // John,Jack