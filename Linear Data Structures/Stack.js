// ----------------------------- Stack (LIFO) ----------------------------- //

class Stack {
    constructor() {
        this.items = []; // Array to store stack elements
    }

    // Push an element onto the stack
    push(element) {
        this.items.push(element); // Add element to the end of the array
    }

    // Pop an element from the stack
    pop() {
        if (this.isEmpty()) return null; // If stack is empty, return null
        return this.items.pop(); // Remove and return the last element of the array
    }

    // Peek at the top element of the stack without removing it
    peek() {
        if (this.isEmpty()) return null; // If stack is empty, return null
        return this.items[this.items.length - 1]; // Return the last element of the array
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0; // Return true if the array is empty
    }

    // Get the size of the stack
    size() {
        return this.items.length; // Return the length of the array
    }

    // Clear the stack
    clear() {
        this.items = []; // Reset the array to an empty array
    }

    // get all elements of the stack
    getAllElements() {
        return this.items; // Return the array containing all stack elements
    }

    // search element in the stack
    search(element) {
        return this.items.includes(element); // Check if the element exists in the array
    }
}

// Example usage
const stack = new Stack();
stack.push(10);
stack.push(20);

console.log(stack.peek()); // 20
console.log(stack.pop()); // 20

console.log(stack.size()); // 1
console.log(stack.isEmpty()); // false

console.log(stack.getAllElements()); // [10]
stack.push(30);
stack.push(40);

console.log(stack.getAllElements()); // [10, 30, 40]
console.log(stack.search(30)); // true
console.log(stack.search(50)); // false