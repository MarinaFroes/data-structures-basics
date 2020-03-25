// Based on the FreeCodeCamp "Data Structures and Algorithms in JavaScript - Full Course for Beginners", available at: https://www.youtube.com/watch?v=t2CEgPsws3U&t=4500s

const Queue = function () {
  const collection = [];

  // Logs to the console the collection
  this.print = function(){
    console.log(collection);
  }

  // Adds an item to the back of the queue
  this.enqueue = function(element){
    collection.push(element);
  }

  // Removes an item from the front of the queue
  this.dequeue = function(){
    return collection.shift();
  }

  // Returns the first item of the Queue
  this.front = function() {
    return collection[0];
  }

  //Returns the size of the queue
  this.size = function(){
    return collection.length;
  }

  // Checks if the queue is empty
  this.isEmpty = function(){
    return (collection.length === 0);
  }
}

const myQueue = new Queue();

myQueue.enqueue(5);
myQueue.enqueue(56);
myQueue.enqueue(23);
myQueue.enqueue(98);
myQueue.print();
myQueue.enqueue(4);
myQueue.print();
myQueue.dequeue();
myQueue.print();
console.log(myQueue.isEmpty());
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue.isEmpty());
