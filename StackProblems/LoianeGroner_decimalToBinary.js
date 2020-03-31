// Reference: JavaScript Data Structures and Algorithms - Third Edition  by Loiane Groner

// To convert a decimal number into a binary representation, we can divide the number by 2 (binary is a base 2 number system) until the division result is 0. 

// Stack class
// Methods: print(), isEmpty(), push(el), peek(), pop(), size(), clear()

const Stack = function() {
  this.count = 0;
  this.storage = {};

  this.print = function () {
    console.log(this.storage);
  }

  this.push = function(el){
    this.storage[this.count] = el;
    this.count++;
  }

  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    const result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  this.size = function () {
    return this.count;
  }

  this.peek = function () {
    return this.storage[this.count - 1]
  }

  this.isEmpty = function () {
    return this.count === 0;
  }

  this.clear = function () {
    this.count = 0;
    this.storage = {};
  }
}

const myStack = new Stack();


function decimalToBinary(decNum) {
  const reminderStack = new Stack();
  let number = decNum;
  let reminder;
  let binaryStr = "";

  while (number > 0) {
    reminder = Math.floor(number % 2);
    reminderStack.push(reminder);
    number = Math.floor(number / 2);
  }

  while (!reminderStack.isEmpty()) {
    binaryStr += reminderStack.pop().toString();
  }

  return binaryStr
}

console.log(decimalToBinary(233)); // 11101001
console.log(decimalToBinary(10)); // 1010
console.log(decimalToBinary(1000)); // 1111101000