// create an array
let num = [10,20,30,40,50,60]

console.log(num[0]) // 10
console.log(num[1]) // 20
console.log(num[2]) // 30

// ----------------------------------------------------------------------- Adding & Removing Elements -------------------------------------------------------- //

num.push(70) // add 70 to the end of the array
console.log(num) // [10,20,30,40,50,60,70]

num.pop() // remove the last element of the array
console.log(num) // [10,20,30,40,50,60] 

num.unshift(5) // add 5 to the beginning of the array
console.log(num) // [5,10,20,30,40,50,60]

num.shift() // remove the first element of the array
console.log(num) // [10,20,30,40,50,60]

num.splice(2, 1) // remove 1 element from index 2
console.log(num) // [10,20,40,50,60]
num.splice(2, 0, 30) // add 30 at index 2
console.log(num) // [10,20,30,40,50,60]

num.splice(2, 1, 35) // remove 1 element from index 2 and add 35 at index 2
console.log(num) // [10,20,35,40,50,60]

num.splice(2, 1, 30, 35) // remove 1 element from index 2 and add 30 and 35 at index 2
console.log(num) // [10,20,30,35,40,50,60]

num.splice(2, 0, 30, 35) // add 30 and 35 at index 2
console.log(num) // [10,20,30,35,40,50,60]

num.pop() // remove the last element of the array
console.log(num) // [10,20,30,35,40,50]

// ------------------------------------------------------------- Searching & Finding Elements ------------------------------------------------------------- //

// find the index of an element in the array
console.log(num.indexOf(30)) // 2
console.log(num.indexOf(100)) // -1

num.push(30) // add 30 to the end of the array

// find the last index of an element in the array
console.log(num.lastIndexOf(30)) // 8
console.log(num.lastIndexOf(100)) // -1

// check element is exists in the array or not
console.log(num.includes(30)) // true
console.log(num.includes(100)) // false

let result = num.find((value) => value > 30) // find the first element which is greater than 30
console.log(result) // 35

let tragetIndex = num.findIndex((value) => value > 30) // find the index of the first element which is greater than 30
console.log(tragetIndex) // 3

// ---------------------------------------------------------------- Looping Through Arrays ------------------------------------------------------------------ //

// for loop
for (let i = 0; i < num.length; i++) {
    console.log(num[i])
}
// Output: 10 20 30 35 40 50

// forEach loop
// forEach loop is used to iterate over the array elements
num.forEach((value, index) => {
    console.log(`Index: ${index}, Value: ${value}`)
})

// Output: Index: 0, Value: 10
//         Index: 1, Value: 20
//         ......

// map loop
// map loop is used to iterate over the array elements and create a new array
let doubled = num.map((num) => {
    return num * 2
})

console.log(doubled) // [20, 40, 60, 70, 80, 100]

// filter loop
// filter loop is used to iterate over the array elements and create a new array with the elements that pass the test
let filtered = num.filter((num) => {
    return num > 30
})

console.log(filtered) // [35, 40, 50]

// reduce loop
// reduce loop is used to iterate over the array elements and reduce the array to a single value

let sum = num.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 0) // 0 is the initial value of the accumulator
console.log(sum) // 165

// ----------------------------------------------------------------------------------- Sorting & Reversing -------------------------------------------------- //

// sort the array in ascending order
let sorted = num.sort((a, b) => a - b)
console.log(sorted) // [10, 20, 30, 35, 40, 50]
// sort the array in descending order
let sortedDescending = num.sort((a, b) => b - a)
console.log(sortedDescending) // [50, 40, 35, 30, 20, 10]

// reverse the array
let reversed = num.reverse()
console.log(reversed) // [50, 40, 35, 30, 20, 10]

// ---------------------------------------------------------------- Joining & Splitting Arrays -------------------------------------------------- //

// join the array elements into a string
let joined = num.join("-")
console.log(joined) // 50-40-35-30-20-10

const str  = "Hello World JavaScript"
// split the string into an array
let split = str.split(" ") // split the string by space
console.log(split) // ["Hello", "World", "JavaScript"]



/*
  JavaScript Array Methods Reference

  push()      - Add to end
  pop()       - Remove last
  unshift()   - Add to start
  shift()     - Remove first
  indexOf()   - Find index
  includes()  - Check existence
  find()      - Find first match
  findIndex() - Find index of match
  forEach()   - Loop through array
  map()       - Transform array
  filter()    - Filter values
  reduce()    - Accumulate values
  slice()     - Extract portion
  splice()    - Add/remove items
  sort()      - Sort array
  reverse()   - Reverse array
  join()      - Convert to string
  split()     - Convert string to array
  concat()    - Merge arrays
  every()     - Check all match condition
  some()      - Check at least one match
*/
