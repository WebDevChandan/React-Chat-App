// =========================================== ⭐ Dijkstra's Algorithm ⭐ ========================

//============================================ Weighted Graph ============================================
/* Visualization:
It would be look like this,
    {
        "A": [{node: "B", weight: 10}]
    }
*/

//Code Implementation:
// class WeightedGraph {
//     constructor() {
//         this.adjacencyList = {};
//     }

//     addVertex(vertex){
//         if(!this.adjacencyList[vertex])
//             this.adjacencyList[vertex] = [];
//     }

//     addEdge(vertex1, vertex2, weight){
//         if(this.adjacencyList[vertex1])
//             this.adjacencyList[vertex1].push({node: vertex2, weight: weight});

//         if(this.adjacencyList[vertex2])
//             this.adjacencyList[vertex2].push({node: vertex1, weight: weight});
//     }
// }
// let weightedGraph = new WeightedGraph();
// //Adding vertex;
// weightedGraph.addVertex('A');
// weightedGraph.addVertex('B');
// weightedGraph.addVertex('C');
// weightedGraph.addVertex('D');
// weightedGraph.addVertex('E');
// weightedGraph.addVertex('F');

// //Adding Edge between Vertices
// weightedGraph.addEdge('A', 'B', 4);
// weightedGraph.addEdge('B', 'E', 3);
// weightedGraph.addEdge('A', 'C', 2);
// weightedGraph.addEdge('C', 'D', 2);
// weightedGraph.addEdge('C', 'F', 4);
// weightedGraph.addEdge('D', 'F', 1);
// weightedGraph.addEdge('D', 'E', 3);
// weightedGraph.addEdge('E', 'F', 1);


//============================================ A Simple Priority Queue ============================================
//Note: This is our Naive Priority Queue. Here, we're sorting which is O(N*log(N)). Although we've an Optimise solution using Binary Heap.

// class PriorityQueue {
//   constructor(){
//     this.values = [];
//   }
//   enqueue(val, priority) {
//       // Going to accept value along with their Priority Order. 
//     this.values.push({val, priority});
//     this.sort();
//   };
//   dequeue() {
//       // dequeue the Lowest priority first.
//     return this.values.shift();
//   };
//   sort() {
//       // Going to sort each value according to their priority. Lowest priority will come at lower index number. Like we usually sort numbers of an array.
//     this.values.sort((a, b) => a.priority - b.priority);
//   };
// }
// const priorityQueue = new PriorityQueue();

/* priorityQueue.enqueue(val, priority);
priorityQueue.enqueue('P', 3);
priorityQueue.enqueue('Q', 1);
priorityQueue.enqueue('R', 5);
priorityQueue.enqueue('S', 4);
*/

/* Output:-
//After Enqueue:
values: Array(4)
0: {val: 'Q', priority: 1}
1: {val: 'P', priority: 3}
2: {val: 'S', priority: 4}
3: {val: 'R', priority: 5}

//After Dequeue: priorityQueue.dequeue();
{val: 'Q', priority: 1}
{val: 'P', priority: 3}
{val: 'S', priority: 4}
{val: 'R', priority: 5}
*/





//============================================ Dijkstra Algorithm Implementation ============================================
// Naive(Unoptimized) Priority Queue
class PriorityQueue {
  constructor(){
    this.values = [];
  }
  enqueue(val, priority) {
      // Going to accept value along with their Priority Order. 
    this.values.push({val, priority});
    this.sort();
  };
  dequeue() {
      // dequeue the Lowest priority first.
    return this.values.shift();
  };
  sort() {
      // Going to sort each value according to their priority. Lowest priority will come at lower index number. Like we usually sort numbers of an array.
    this.values.sort((a, b) => a.priority - b.priority);
  };
}


// Weighted Graph
class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex])
            this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2, weight){
        if(this.adjacencyList[vertex1])
            this.adjacencyList[vertex1].push({node: vertex2, weight: weight});

        if(this.adjacencyList[vertex2])
            this.adjacencyList[vertex2].push({node: vertex1, weight: weight});
    }
}
let weightedGraph = new WeightedGraph();
//Adding vertex;
weightedGraph.addVertex('A');
weightedGraph.addVertex('B');
weightedGraph.addVertex('C');
weightedGraph.addVertex('D');
weightedGraph.addVertex('E');
weightedGraph.addVertex('F');

//Adding Edge between Vertices
weightedGraph.addEdge('A', 'B', 4);
weightedGraph.addEdge('B', 'E', 3);
weightedGraph.addEdge('A', 'C', 2);
weightedGraph.addEdge('C', 'D', 2);
weightedGraph.addEdge('C', 'F', 4);
weightedGraph.addEdge('D', 'F', 1);
weightedGraph.addEdge('D', 'E', 3);
weightedGraph.addEdge('E', 'F', 1);