// Based on the FreeCodeCamp "Data Structures and Algorithms in JavaScript - Full Course for Beginners", available at: https://www.youtube.com/watch?v=t2CEgPsws3U&t=4500s

// You don't need to implement hash tables yourself - you can use objects in JavaScript

// Hash function
  /**
   * 
   * @param {String} string - the string I want to hash
   * @param {Number} max - number of buckets
   */
const hash = (string, max) => {
  let hash = 0;
  for (let i = 0; i < string.length; i++){
    // Add to the hash each code associated to each character in the string
    hash += string.charCodeAt(i);

  }
  // The reminder of the hash by the number of buckets will be the index of the array
  let index = hash % max;
  return index;
}


const HashTable = function () {
  // Storage array that will store all data
  const storage = [];
  // Number of the buckets in the array
  const storageLimit = 4;

  // Log all the items of the storage
  this.print = function () {
    console.log(storage);
  }

  // Add an array of key and value on the index defined by the hash function
  this.add = function (key, value) {
    const index = hash(key, storageLimit);
    // If there's nothing on that index, just add the key, value array
    if (storage[index] === undefined) {
      storage[index] = [
        [key, value]
      ];
    } else {
      // If there's someting on that index, loop through the items to check if the key is already there
      let inserted = false;

      for (let i = 0; i < storage[index].length; i++) {
        // If the key of that subarray is there, substitute the value for that key
        if (storage[index][i] && storage[index][i][0] === key) {
          storage[index][i][1] = value;
          inserted = true;
        }
      }
      // If the key is not there, insert the array at the end of this index storage array
      if (inserted === false) {
        storage[index].push([key, value]);
      }
    }
  }

  this.remove = function (key) {
    const index = hash(key, storageLimit);

    // If in that index there's only one item and that item's key is equal to the current key, just delete that item
    if (storage[index].length === 1 && storage[index][0][0] === key) {
      delete storage[index];
    } else {
      // If there's more than 1 item
      for (let i = 0; i < storage[index].length; i++){
        if (storage[index][i][0] === key) {
          delete storage[index][i];
        }
      }
    }
  }

  this.lookup = function (key) {
    const index = hash(key, storageLimit);
    if (storage[index] === undefined) {
      return undefined;
    } else {
      for (let i = 0; i < storage[index].length; i++){
        if (storage[index][i] && storage[index][i][0] === key) {
          return storage[index][i][1];
        }
      }
    }
  }

}

const myHashTable = new HashTable()
myHashTable.add("Alan", 23)
myHashTable.add("Alan", 25)
myHashTable.add("Mary", 27)
// myHashTable.add("Maryanne", 32)
// myHashTable.add("Julia", 29)
// myHashTable.add("Andrew", 30)
// myHashTable.add("Anne", 20)
myHashTable.add("Andrew", 35)

myHashTable.print()
myHashTable.remove("Andrew")
myHashTable.print()
myHashTable.add("Andrew", 35)
// myHashTable.print()
// console.log(myHashTable.lookup("Andrew"))
myHashTable.print()