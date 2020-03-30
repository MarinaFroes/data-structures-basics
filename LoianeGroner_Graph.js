// Based on the Graph class from 'JavaScript Data Structures and Algorithms - Third Edition' by Loiane Groner 
// It has some annotations and changes made by me

export default class Graph {
  constructor(isDirected = false) {
    this.isDirected = isDirected; // indicate if the graph is directed
    this.vertices = []; // store the name of the vertices (nodes)
    this.adjList = new Map(); // vertex name as a key and list of adjacents vertices as a value
  }

  // Method to add vertex - when instantiate the graph, it will create an empty graph with no vertices
  addVertex(vertex) {
    if (!this.vertices.includes(vertex)) { 
      this.vertices.push(vertex); 
      this.adjList.set(vertex, []); 
    }
  }
  
  // Method do add edges - receives 2 vertices that will be linked as parameter
  addEdge(v, w) {
    if (!this.adjList.get(v)) {
      this.addVertex(v); 
    }
    if (!this.adjList.get(w)) {
      this.addVertex(w); 
    }
    this.adjList.get(v).push(w); // Add w to the adjacent list of v 
    if (!this.isDirected) {
      this.adjList.get(w).push(v); // If it's not directed, also add v to the adjacent list of w
    }
  } 

  // Getters for vertices and adjacent lists
  getVertices() {
    return this.vertices;
  }
  getAdjList() {
    return this.adjList;
  }

  // Method to output graph on the console
  toString() {
    let s = '';
    for (let i = 0; i < this.vertices.length; i++) { 
      s += `${this.vertices[i]} -> `;
      const neighbors = this.adjList.get(this.vertices[i]); 
      for (let j = 0; j < neighbors.length; j++) { 
        s += `${neighbors[j]} `;
      }
      s += '\n'; 
    }
    return s;
  }
} 

const graph = new Graph();

const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']; 

for (let i = 0; i < myVertices.length; i++) { 
  graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'B'); 
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

console.log(graph.toString());