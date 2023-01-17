// =========================================== ⭐ Dijkstra's Algorithm ⭐ ========================

//============================================ Weighted Graph ============================================
/* Visualization:
         4                   
       A -- B                          
     2/ 2   3 \ 3                   
     C -- D -- E                      
     4\    1\ /1                        
       \-----F                  

It would be look like this,
    {
        "A": [{node: "B", weight: 10}]
    }
*/

/*
//CODE IMPLEMENTATION:
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

//INPUT:- 
//Adding vertex;
weightedGraph.addVertex('A');
weightedGraph.addVertex('B');
weightedGraph.addVertex('C');
weightedGraph.addVertex('D');
weightedGraph.addVertex('E');
weightedGraph.addVertex('F');

//Adding Edge between Vertices
weightedGraph.addEdge('A', 'B', 4);
weightedGraph.addEdge('A', 'C', 2);
weightedGraph.addEdge('B', 'E', 3);
weightedGraph.addEdge('C', 'D', 2);
weightedGraph.addEdge('C', 'F', 4);
weightedGraph.addEdge('D', 'F', 1);
weightedGraph.addEdge('D', 'E', 3);
weightedGraph.addEdge('E', 'F', 1);
*/


//============================================ A Simple Priority Queue ============================================
//Note: This is our Naive Priority Queue. Here, we're sorting which is O(N*log(N)). Although we've an Optimise solution using Binary Heap.
/*
//CODE IMPLEMENTATION:
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
const priorityQueue = new PriorityQueue();

// INPUT:-
priorityQueue.enqueue('P', 3);
priorityQueue.enqueue('Q', 1);
priorityQueue.enqueue('R', 5);
priorityQueue.enqueue('S', 4);

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





//============================================ ⭐ Dijkstra Algorithm Implementation ⭐ ============================================
/**/
//CODE IMPLEMENTATION:
// Naive(Unoptimized) Priority Queue
class PriorityQueue {
  constructor(){
    // work as the visited array
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
  
    // Add Vertex
    addVertex(vertex){
        if(!this.adjacencyList[vertex])
            this.adjacencyList[vertex] = [];
    }

    // Add Edge between the two Vertices.
    addEdge(vertex1, vertex2, weight){
        if(this.adjacencyList[vertex1])
            this.adjacencyList[vertex1].push({node: vertex2, weight: weight});

        if(this.adjacencyList[vertex2])
            this.adjacencyList[vertex2].push({node: vertex1, weight: weight});
    }

    // Dijkstra Algorithm
    Dijkstra(start, finish){
      const nodes = new PriorityQueue();

      // Store the shortest distances from vertex 'A' to each vertex
      const distances ={};

      // Store the vertex for each particular vertex that let us know from where it came from.
      const previous = {};
      
      let smallest;

      // build up initial State
      for(let vertex in this.adjacencyList){
        if(vertex === start){
          distances[vertex] = 0;
          // Store distances value as priority
          nodes.enqueue(vertex, 0);
        } 
        else{
          distances[vertex] = Infinity;
          nodes.enqueue(vertex, Infinity); 
        }
        previous[vertex] = null; 
      }
      //as long as there is something to visit
      while(nodes.values.length){
        // get the smallest node(Smallest Node will whatever the actual node we're visiting is.) 
        smallest = nodes.dequeue().val;
    
        if(smallest === finish){
          //We're DONE;
          // BUILD UP PATH TO RETURN AT END
          let path = [];
          
          while(previous[smallest]){
              path.push(smallest);
              // updating smallest till starting vertex(having value = null);
              smallest = previous[smallest];
            }
          
          return path.concat(smallest).reverse();
        }
          
        if(smallest || distances[smallest]!==Infinity){
          for(let neighbor in this.adjacencyList[smallest]){
            let nextNode = this.adjacencyList[smallest][neighbor];
            
            //Calculate new distances to neighboring node
            let candidate = distances[smallest] + nextNode.weight,
                nextNeighbor = nextNode.node;
            if(candidate < distances[nextNeighbor]){
              // updating new smallest distance to neighbor
              distances[nextNeighbor] = candidate;
            
              // updating previous - How we got to neighbor
              previous[nextNeighbor] = smallest;
              
              //enqueue in priority queue with new priority
              nodes.enqueue(nextNeighbor, candidate);
            }
          }
        }
      }
    }
}
let graph = new WeightedGraph();
//Adding vertex;
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

//Adding Edge between Vertices
graph.addEdge('A', 'B', 4);
graph.addEdge('B', 'E', 3);
graph.addEdge('A', 'C', 2);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'F', 1);
graph.addEdge('D', 'E', 3);
graph.addEdge('E', 'F', 1);

// Find the shortest path from vertex 'A' to 'E'
graph.Dijkstra('A', 'E');
