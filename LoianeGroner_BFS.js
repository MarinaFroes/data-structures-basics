// Based on the Breadth First Search Algorithm from 'JavaScript Data Structures and Algorithms - Third Edition' by Loiane Groner
// It has some annotations and changes made by me

import Graph from './LoianeGroner_Graph'

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

// console.log(graph.toString());

const Colors = {
  WHITE: 0, // not visited
  GREY: 1, // visited but not explored
  BLACK: 2 // visited and explored
};

// Helper object to help to store if the vertex has been visited or not
const initializeColor = vertices => {
  const color = {};
  for (let i = 0; i < vertices.length; i++) {
    color[vertices[i]] = Colors.WHITE; // Initialize the color array with the white color
  }
  return color;
};

export const breadthFirstSearch = (graph, startVertex, callback) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();

  const color = initializeColor(vertices); 
  const queue = {}; // Queue object simplified from Loianer Groner Queue class 

  queue[startVertex] = []; // Enqueue startVertex

  // While the queue is not empty
  while (Object.keys(queue).length !== 0) { 
    const u = Object.keys(queue)[0]; // Store first item of the queue in u 
    delete Object.keys(queue)[0]; // Dequeue first item of the queue


    const neighbors = adjList.get(u); // {6}
    color[u] = Colors.GREY; // {7}
    for (let i = 0; i < neighbors.length; i++) { // {8}
      const w = neighbors[i]; // {9}
      if (color[w] === Colors.WHITE) { // {10}
        color[w] = Colors.GREY; // {11}
        queue.enqueue(w); // {12}
      }
    }
    color[u] = Colors.BLACK; // {13}
    if (callback) { // {14}
      callback(u);
    }
  }
};


