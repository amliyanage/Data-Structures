
# Data Structures and Algorithms in JavaScript

This repository contains implementations of common data structures and algorithms in JavaScript, including arrays, linked lists, stacks, trees, and graphs. Each section demonstrates the usage of these data structures with comments and example code.

## Table of Contents

- [Arrays](#arrays)
- [Linked List](#linked-list)
- [Stack (LIFO)](#stack-lifo)
- [Binary Tree](#binary-tree)
- [Graph (Adjacency List)](#graph-adjacency-list)
- [Hash Table](#hash-table)

## Arrays

The **array** implementation includes several operations such as adding, removing, searching, looping through elements, and sorting. Example operations include:

- Adding and removing elements from the array (using `push()`, `pop()`, `shift()`, `unshift()`).
- Searching for elements (using `indexOf()`, `includes()`, `find()`, and `findIndex()`).
- Looping through the array (using `for`, `forEach()`, `map()`, `filter()`, and `reduce()`).
- Sorting the array in ascending or descending order and reversing it.

### Example:
```js
let num = [10, 20, 30];
num.push(40); // Adds 40 to the array
num.pop(); // Removes the last element
console.log(num); // [10, 20, 30]
```

## Linked List

The **linked list** implementation includes methods for adding, removing, and searching for nodes in the list. It supports basic linked list operations:

- Add a new node to the end of the list.
- Remove a node from the list.
- Search for a node by its value.

### Example:
```js
let list = new LinkedList();
list.add(10);
list.add(20);
list.remove(10);
console.log(list.search(20)); // true
```

## Stack (LIFO)

The **stack** implementation follows the Last In, First Out (LIFO) principle. You can perform the following operations:

- Push an element onto the stack.
- Pop an element from the stack.
- Peek at the top element of the stack.
- Check if the stack is empty.
- Search for an element in the stack.

### Example:
```js
let stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.pop()); // 20
console.log(stack.peek()); // 10
```

## Binary Tree

The **binary tree** implementation allows inserting nodes and performing an in-order traversal. It supports the following operations:

- Insert a new node into the tree.
- Perform an in-order traversal of the tree.

### Example:
```js
let tree = new BinaryTree();
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.inOrderTraversal(); // Output: 10 20 30
```

## Graph (Adjacency List)

The **graph** implementation uses an adjacency list to represent the graph. It supports the following operations:

- Add a vertex to the graph.
- Add an edge between two vertices.
- Print the graph's adjacency list representation.

### Example:
```js
let graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addEdge('A', 'B');
graph.printGraph(); // Output: A -> B, B -> A
```

## Hash Table

The **hash table** implementation uses an array and a hash function to store key-value pairs. It supports basic operations like inserting, retrieving, and deleting key-value pairs.

### Example:
```js
let hashTable = new HashTable();
hashTable.insert('name', 'John');
console.log(hashTable.get('name')); // John
```

## Usage

To run any of the above implementations, simply include the respective code in your JavaScript environment (e.g., browser console, Node.js) and execute the functions to observe the outputs.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
