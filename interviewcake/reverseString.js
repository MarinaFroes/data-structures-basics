/**
 * 1 - left index
 * 2 - right index
 * 3 - while left is less than right
 * 4 - temp char for the right 
 * 5 - switch right for left and left for temp
 * 6 - increment left index
 * 7 - decrement right index
 * 8 - out of the loop return new array
 */

const reverse = arrayOfchar => {
  let leftIndex = 0
  let rightIndex = arrayOfchar.length - 1

  while (leftIndex < rightIndex) {
    let tempChar = arrayOfchar[rightIndex]
    
    arrayOfchar[rightIndex] = arrayOfchar[leftIndex] 
    arrayOfchar[leftIndex] = tempChar

    leftIndex++
    rightIndex--
  }

  return arrayOfchar
}
//  O(n) time & O(1) space
// const reverse = arrayOfChar => arrayOfChar.reverse()

console.log(reverse(['h', 'e', 'l', 'l', 'o']))