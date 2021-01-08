// Based on the tutorial available at https://www.hackerearth.com/de/practice/algorithms/graphs/breadth-first-search/tutorial/
// time complexity: O(V + E), V is the number of nodes and E is the number of edges.

function BFS(graph, root) {
  const nodes = [...graph];
  const level = {}; // integers - to determine the level of each node
  const isVisited = {}; // boolean - isVisited
  
  const queue = []; // integers - queue
  queue.push(root); // enqueue root 

  level[root] = 0; // set the level of the root as 0
  console.log(level);
  isVisited[root] = true; // set the root as visited
  console.log(isVisited);

  while (queue.length !== 0) {
    const current = queue.shift(); // dequeue 1st element and store it in current

    for (let i = 0; i < nodes[current].length; i++){
      if (isVisited[nodes[current][i]] === false) {
        queue.push(nodes[current][i]);
        level[nodes[current][i]] === level[[current]] + 1;
        isVisited[nodes[current][i]] === true;
      }
    }
  }
}

const exGraph = [
  [1, 2, 3],
  [4, 5],
  [6, 7],
  [7],
  [1],
  [1],
  [2],
  [2, 3]
];

const root = 0;

console.log(BFS(exGraph, root));
// const v = []; // array of adjacency lists
// const level = {}; // integers - to determine the level of each node
// const vis = {}; // boolean - isVisited

// // s - source node
// function bfs(s) {
//   const q = []; // integers - queue
//   q.push(s); // add source node to the queue

//   level[s] = 0; // set the level of the source node as 0
//   vis[s] = true; // set the source node as visited

//   while (q.length !== 0) {
//     const p = q.shift(); // remove the 1st element and store it in current `p`
   
//     for (let i = 0; i < v[p].length; i++){
//       if (vis[v[p][i]] === false) {
//         level[v[p][i]] === level[[p]] + 1;
//         vis[v[p][i]] === true;
//       }
//     }
//   }
  
// }

// console.log(graph_bfs())