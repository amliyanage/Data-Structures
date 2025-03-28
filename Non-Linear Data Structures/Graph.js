// ----------------------------- Graph (Adjacency List) ----------------------------- //
class Graph {
    constructor() {
        this.adjList = new Map();
    }

    addVertex(vertex) {
        if (!this.adjList.has(vertex)) {
            this.adjList.set(vertex, []);
        }
    }

    addEdge(vertex1, vertex2) {
        if (this.adjList.has(vertex1) && this.adjList.has(vertex2)) {
            this.adjList.get(vertex1).push(vertex2);
            this.adjList.get(vertex2).push(vertex1); // For undirected graph
        }
    }

    printGraph() {
        for (let [vertex, edges] of this.adjList) {
            console.log(`${vertex} -> ${edges.join(", ")}`);
        }
    }
}

let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "C");
console.log("Graph Representation:");
graph.printGraph(); 
// Output:
// A -> B, C
// B -> A, C
// C -> A, B