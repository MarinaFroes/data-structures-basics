// Based on the FreeCodeCamp "Data Structures and Algorithms in JavaScript - Full Course for Beginners", available at: https://www.youtube.com/watch?v=t2CEgPsws3U&t=4500s

//Stack - last in first out

const Stack = function() {
  this.count = 0;
  this.storage = {};

  // Print the storage
  this.print = function () {
    console.log(this.storage);  
  }

  //Add value to the end (top) of the stack
  this.push = function(value){
    this.storage[this.count] = value;
    this.count++;
  }

  //Remove and return the value at the end (top) of the Stack
  this.pop = function(){
    if(this.count === 0){
      return undefined;
    }
    this.count--;
    const result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  //Return the size of the Stack
  this.size = function() {
    return this.count;
  }

  //Return the value at the end (top) of the Stack
  this.peek = function() {
    return this.storage[this.count - 1];
  }
}

const myStack = new Stack();

myStack.push(5);
myStack.push(6);
myStack.push(7);
myStack.push(8);
console.log(myStack.peek());
console.log(myStack.pop());
myStack.push(1);
console.log(myStack.pop());
console.log(myStack.peek());
console.log(`size: ${myStack.size()}`);
myStack.print()