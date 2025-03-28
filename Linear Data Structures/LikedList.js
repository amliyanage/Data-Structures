// ----------------------------- Linked List ----------------------------- //

class Node {
    constructor(data) {
        this.data = data; // Data of the node
        this.next = null; // Pointer to the next node
    }
}

class LinkedList {
    constructor() {
        this.head = null; // Head of the list
        this.size = 0; // Size of the list
    }

    // Add a new node to the end of the list
    add(data) {
        const newNode = new Node(data); // Create a new node
        if (!this.head) {
            this.head = newNode; // If the list is empty, set the head to the new node
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next; // Traverse to the last node
            }
            current.next = newNode; // Set the next of the last node to the new node
        }
        this.size++; // Increment the size of the list
    }

    // Remove a node from the list
    remove(data) {
        if (!this.head) return; // If the list is empty, do nothing
        if (this.head.data === data) {
            this.head = this.head.next; // If the head is the node to be removed, set the head to the next node
        } else {
            let current = this.head;
            while (current.next && current.next.data !== data) {
                current = current.next; // Traverse to find the node to be removed
            }
            if (current.next) {
                current.next = current.next.next; // Remove the node by skipping it in the list
            }
        }
        this.size--; // Decrement the size of the list
    }

    // Search for a node in the list
    search(data) {
        let current = this.head;
        while (current) {
            if (current.data === data) return true; // If the node is found, return true
            current = current.next; // Move to the next node
        }
        return false; // If the node is not found, return false
    }
}

// Example usage
const list = new LinkedList();
list.add(10);
list.add(20);
list.add(30);

console.log(list.search(20)); // true
console.log(list.search(40)); // false


list.remove(20);
console.log(list.search(20)); // false
console.log(list.size); // 2