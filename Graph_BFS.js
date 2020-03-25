// Based on the FreeCodeCamp "Data Structures and Algorithms in JavaScript - Full Course for Beginners", available at: https://www.youtube.com/watch?v=t2CEgPsws3U&t=4500s

// Graph - Breadth First Search algorithm
  // The point is to find out how far away every node is from the first node

function graph_bfs(graph, root) {
  const nodesLen = {};

  // Start all the distances at infinity
  for (let i = 0; i < graph.length; i++){
    nodesLen[i] = Infinity; 
  }

  // Distance from the root to the root is 0
  nodesLen[root] = 0;

  // Queue to keep track of the nodes to visit - start at the root
  const queue = [root];
  // Current node that we are traversing
  let current;

  // Keep traversing nodes till there's no more nodes in the queue to traverse
  while (queue.length !== 0) {
    current = queue.shift();

    const curConnected = graph[current];
    // List of nodes connected to the current node
    const neighboorIdx = [];

    // Return the first index which has a 1 value
    let idx = curConnected.indexOf(1); // no node => return -1

    while (idx !== -1) {
      neighboorIdx.push(idx)
      // Update the idx to the next number 1 found
        // The 2nd argument is the starting index for the search
      idx = curConnected.indexOf(1, idx + 1)
    }

    // Loop through the connected nodes and get the distances
    for (let j = 0; j < neighboorIdx.length; j++){
      // If the value of the node is Infinity, the distance hasn't been set yet
      if (nodesLen[neighboorIdx[j]] === Infinity) {
        nodesLen[neighboorIdx[j]] = nodesLen[current] + 1;
        queue.push(neighboorIdx[j]);
      }
    }
  }

  return nodesLen;
};


// Adjacency matrix graph
  // Each nested array in the matrix shows which nodes in the graph are connected to the node at that index
const exBFSGraph = [
  [0, 1, 1, 1, 0], //Node 0 - is connected to Node 1, 2, and 3
  [0, 0, 1, 0, 0], //Node 1 - is connected to Node 2
  [1, 1, 0, 0, 0], //Node 2 - is connected to Node 0 and 1
  [0, 0, 0, 1, 0], //Node 3 - is connected to Node 3
  [0, 1, 0, 0, 0]  //Node 4 - is connected to Node 1
];

//Node 0 is 2 nodes away from the first node (1) - Node 1 is connected to Node 2 and Node 2 is connected to Node 0
/**
 key-value pair: key is the node and the value is it's distance from the root node
 * Object = {
    0: 2,
    1: 0,
    2: 1,
    3: 3, 
    4: Ifinity - impossible to reach from Node 1
  }
 */

// index of the root node: 1

console.log(graph_bfs(exBFSGraph, 1))