class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const newNode = new TreeNode(data);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        let queue = [this.root];
        while (queue.length) {
            let node = queue.shift();
            if (!node.left) {
                node.left = newNode;
                return;
            } else if (!node.right) {
                node.right = newNode;
                return;
            }
            queue.push(node.left, node.right);
        }
    }

    inOrderTraversal(node = this.root) {
        if (node) {
            this.inOrderTraversal(node.left);
            console.log(node.data);
            this.inOrderTraversal(node.right);
        }
    }
}

let tree = new BinaryTree();
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(40);
tree.insert(50);
console.log("In-Order Traversal:");
tree.inOrderTraversal(); // Output: 40 20 50 10 30