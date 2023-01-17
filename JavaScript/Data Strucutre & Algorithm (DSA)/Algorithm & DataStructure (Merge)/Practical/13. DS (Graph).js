                            // ==================================== ⭐GRAPH ==================================== 

// ========================================= Adding a Vertex in an Undirected Graph =========================== 
/* Approach:
-- Note: Here we're going to use Adjacency List in the place of Adjacency Matrix because Most data in the real-world tends to lend itself to sparser and/or larger graphs. 
-- Adding vertex/node is the First thing to build any graph. We're going to store graph in adjacencyList, which will be hash Table/ hash Map.

-- We're going to create a addingVertex function to add vertex in the Graph which accept a vertex and get store as key in adjacencyList. 

-- To avoid duplicate Vertex getting store in the Graph, we'll have the following Condition.
    IF(The vertex accepted from the paramenter is not already existed in adjacencyList, then only enter into this block. !adjacencyList[vertex])
        As, vertex is unique, assign an Empty array[] as a value to that vertex (which get stored as key in adjacencyList).
*/

/*
// CODE IMPLEMENTATION:-
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex){
        //If the vertex isn't already existed in the adjacencyList, then only add it as a key and assign an empty array corresponding to it. Otherwise gives undefined.
        if(!this.adjacencyList[vertex])
            this.adjacencyList[vertex] = [];
    }
}

const graph = new Graph();
 // Execute addVertex:-
    graph.addVertex("Tokyo");
    graph.addVertex("India");
    graph.addVertex("India");
*/
/* Output:-
    graph
    adjacencyList{
        India: []
        Tokyo: []
    }
    undefined                      //Because India has already added in adjacencyList
*/





// ========================================= Adding an Edge in an Undirected Graph =========================== 
/* Visualiztion:
vertex already Added into the Graph:
{
  "Tokyo": [],
  "Dallas": [],
  "Aspen": []
}

Since, This is an Undirected graph, So their will be a 2 way direction between the vertices. Like, Tokyo --> Dallas & Dallas --> Tokyo 
graph.addEdge("Tokyo", "Dallas")
{
  "Tokyo": ["Dallas"],
  "Dallas": ["Tokyo"],
  "Aspen": []
}

graph.addEdge("Dallas", "Aspen")
{
  "Tokyo": ["Dallas"],
  "Dallas": ["Tokyo", "Aspen"],
  "Aspen": ["Dallas"]
}
*/
/* Approach:
-- For adding an Edge between Two Vertices, We consider that, we already added the vertices. 

-- To Adding an Edge between two Vertices, we're going to create a function called 'addEdge(vertex1, vertex2)' accepting Two Vertices.

-- If (As we got the vertex1 as the existed key (consisting an empty array []) in adjacencyList this.adjacencyList[vertex1])
    We're going to push vertex2 to its empty array[].

-- If (As we got the vertex2 as the existed key (consisting an empty array []) in adjacencyList this.adjacencyList[vertex2])
    We're going to push vertex2 to its empty array[].
*/

/*
// CODE IMPLEMENTATION:-
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex){
        //If the vertex isn't already existed in the adjacencyList, then only add it as a key and assign an empty array corresponding to it. Otherwise gives undefined.
        if(!this.adjacencyList[vertex])
            this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2){
        if(this.adjacencyList[vertex1])
            this.adjacencyList[vertex1].push(vertex2);

        if(this.adjacencyList[vertex2])
            this.adjacencyList[vertex2].push(vertex1);
    }
}

const graph = new Graph();
graph.addVertex("Tokyo");
graph.addVertex("Dallas");
graph.addVertex("Aspen");

 // Execute addEdge:-
graph.addEdge("Tokyo", "Dallas");
graph.addEdge("Dallas", "Aspen");
*/

/* Output:-
    graph
    adjacencyList{
        Aspen: ['Dallas']
        Dallas: (2) ['Tokyo', 'Aspen']
        Tokyo: ['Dallas']
    }
    
*/





// ========================================= Removing an Edge in an Undirected Graph =========================== 
/* Visualiztion:
Vertex And their respective Edges already Added into the Graph:
{
  "Tokyo": ["Dallas"],
  "Dallas": ["Tokyo", "Aspen"],
  "Aspen": ["Dallas"]
}

Since, This is an Undirected graph, So their will be a 2 way direction between the vertices. Like, Tokyo (remove)--> Dallas & Dallas (remove)--> Tokyo 
graph.removeEdge("Tokyo", "Dallas")
{
  "Tokyo": [],
  "Dallas": ["Aspen"],
  "Aspen": ["Dallas"]
}
*/

/* Approach:
-- For removing an Edge between Two Vertices, We consider that, we already added the vertices and corresponding Edges between them. 

-- To Removing an Edge between two Vertices, we're going to create a function called 'removeEdge(vertex1, vertex2)' accepting Two Vertices.

-- If (As we got the vertex1 as the existed key (consisting vertex2) in adjacencyList this.adjacencyList[vertex1])
    We're going to assign a new array to that key, that array would be a returned filtered array, not consisting vertex2 to this array.

-- If (As we got the vertex2 as the existed key (consisting vertex2) in adjacencyList this.adjacencyList[vertex2])
    We're going to assign a new array to that key, that array would be a returned filtered array, not consisting vertex1 to this array.
*/

/*
// CODE IMPLEMENTATION:-
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex){
        //If the vertex isn't already existed in the adjacencyList, then only add it as a key and assign an empty array corresponding to it. Otherwise gives undefined.
        if(!this.adjacencyList[vertex])
            this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2){
        if(this.adjacencyList[vertex1])
            this.adjacencyList[vertex1].push(vertex2);

        if(this.adjacencyList[vertex2])
            this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2){
        if(this.adjacencyList[vertex1])
            //Return a Filter Array, by filterring all the values that is not equal to vertex2 (Means returning array not consisting vertex2)
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(element => element!==vertex2);

        if(this.adjacencyList[vertex2])
            //Return a Filter Array, by filterring all the values that is not equal to vertex1 (Means returning array not consisting vertex1)            
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(element=>element!==vertex1);
            
    }
}

const graph = new Graph();
//Adding Vertex
graph.addVertex("Tokyo");
graph.addVertex("Dallas");
graph.addVertex("Aspen");

//Adding Edges between vertices
graph.addEdge("Tokyo", "Dallas");
graph.addEdge("Dallas", "Aspen");

// Execute removeEdge:-
// graph.removeEdge('Tokyo', 'Dallas');
*/

/* Output:-
    graph
    adjacencyList{
        Aspen: ['Dallas']
        Dallas: ['Aspen']
        Tokyo: []
    }
    
*/






// ========================================= Removing a Vertex in an Undirected Graph =========================== 
/* Visualiztion:
Vertex And their respective Edges already Added into the Graph:
{
  "Tokyo": ["Dallas", "Hong Kong"],
  "Dallas": ["Tokyo", "Aspen", "Hong Kong", "Los Angeles"],
  "Aspen": ["Dallas"],
  "Hong Kong": ["Tokyo", "Dallas", "Los Angeles"],
  "Los Angeles": ["Hong Kong", "Dallas"]
}

Since, This is an Undirected graph, So their will be a 2 way direction between the vertices. Like, Tokyo (remove)--> Dallas & Dallas (remove)--> Tokyo 

graph.removeVertex("Hong Kong");
{
  "Tokyo": ["Dallas"],
  "Dallas": ["Tokyo", "Aspen","Los Angeles"],
  "Aspen": ["Dallas"],
  "Los Angeles": ["Dallas"]
}
*/

/* Approach:
-- For removing a Vertex from the Graph, Firstly, we remove all its adjacentVertex (Means, Vertices connected with its Edges), then completely remove the required Vertex.

-- To Removing a Vertex from the Graph, we're going to create a function called 'removeVertex(vertex)' accepting the 'vertex' need to remove.

-- If (As we got the vertex as the existed key (consisting adjacent Vertices) in adjacencyList this.adjacencyList[vertex])
      Since, the require vertex consisitinng adjacent Vertices inside an array as a value of the require Vertex. So, we've to store array of adjacent Vertices in 'adjVertexArr'  
      
      Start a Loop till the length of adjVertexArr.length
        Store each adjacent Vertex in a varible called 'adjacentVertex';
        Call removeEdge(vertex, adjacentVertex) method by passing, the require 'vertex' that need to remove & 'adjacentVertex' that have a connection between 'vertex' and 'adjacentVertex' by an Edge.
      After removing all edges of require removed Vertex with its adjacent Vertices. Now only an Empty array[] will remain as a value of the require Vertex.
      
       Now, we can completely remove the require vertex from the Graph or say, the require key from the adjacencyList, by doing the following statament:
        delete this.adjacencyList[vertex];
*/

// CODE IMPLEMENTATION:-
/*
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

  //Add Vertex 
    addVertex(vertex){
        //If the vertex isn't already existed in the adjacencyList, then only add it as a key and assign an empty array corresponding to it. Otherwise gives undefined.
        if(!this.adjacencyList[vertex])
            this.adjacencyList[vertex] = [];
    }

  // Add Edge
    addEdge(vertex1, vertex2){
        if(this.adjacencyList[vertex1])
            this.adjacencyList[vertex1].push(vertex2);

        if(this.adjacencyList[vertex2])
            this.adjacencyList[vertex2].push(vertex1);
    }

  // Remove Edge
    removeEdge(vertex1, vertex2){
        if(this.adjacencyList[vertex1])
            //Return a Filter Array, by filterring all the values that is not equal to vertex2 (Means returning array not consisting vertex2)
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(element => element!==vertex2);

        if(this.adjacencyList[vertex2])
            //Return a Filter Array, by filterring all the values that is not equal to vertex1 (Means returning array not consisting vertex1)          
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(element=>element!==vertex1);
            
    }

  // Remove Vertex
    removeVertex(vertex){
            if(this.adjacencyList[vertex]){
                let adjVertexArr =  this.adjacencyList[vertex];
                for (let i = 0; i < adjVertexArr.length; i++) {
                    //adjacentVertex are the vertices that have connections with vertex, here 'Hong Kong' as vertex
                    let adjacentVertex = adjVertexArr[i];
                    
                    // Remove all the edges of the required vertex (vertex going to be removed from the graph) with their corresponding vertices. And after that, In require vertex, only an Empty Array[] will remain as the value.
                    this.removeEdge(vertex, adjacentVertex);
                }
                    //Delete the Hong Kong Vertex at the End, when only an empty array is left over there.
                    delete this.adjacencyList[vertex];
            }
    }
}

const graph = new Graph();
//Adding Vertex
graph.addVertex("Tokyo");
graph.addVertex("Dallas");
graph.addVertex("Aspen");
graph.addVertex("Hong Kong");
graph.addVertex("Los Angeles");

//Adding Edges between vertices
graph.addEdge("Tokyo", "Dallas");
graph.addEdge("Tokyo", "Hong Kong");
graph.addEdge("Hong Kong", "Los Angeles");
graph.addEdge("Dallas", "Aspen");
graph.addEdge("Dallas", "Hong Kong");
graph.addEdge("Dallas", "Los Angeles");


// Remove a Vertex and their adjacent Vertices:-
graph.removeVertex('Hong Kong');
*/

/* Output:-
    graph.adjacencyList;
    adjacencyList{
        Aspen: ['Dallas']
        Dallas: (3) ['Tokyo', 'Aspen', 'Los Angeles']
        Los Angeles: ['Dallas']
        Tokyo: ['Dallas']
    }
    
*/
































                            // ==================================== ⭐GRAPH TRAVESAL ====================================


// ========================================= Depth First Traversal/Search (Recursively) ================================
/* Visualiztion:-
          A
        /   \
       B     C
       |     |
       D --- E
        \   /
          F    
DFS Possible Solution:
['A', 'B', 'D', 'E', 'C', 'F'] (This is this Code Solution)
['A', 'B', 'D', 'F', 'E', 'C']
['A', 'C', 'E', 'F', 'D', 'B']
['A', 'C', 'E', 'D', 'B', 'F']
*/

/* Approach:-
-- In DFS, Explore as far as possible down one branch before "backtracking"
-- We're going to Depth First Traverse through the graph.
   Means, we've to continuously following through the vertex neighbour and continous to follow neighbours before backtracking.
   Create a function called 'depthFirstRecursive(start)' which accept a starting vertex for Depth First Traversal.

-- Initialize an empty 'result' array, which is going to be the end result after Completion of Depth First Traversal across the Graph.
   Initialize an empty 'visited' object, which is going to store the visited vertex by setting the visited vertex as true.
   Assign Complete AdjacencyList to a varible called adjacencyList.

-- Define an Immediately Invoked function, which is going to call with the starting vertex.
     Inside it, Define a dfs(vertex) function, which is going to accept a vertex and Recursively call this function.
      dfs(vertex) function will return null, if their is no vertex passing through it.

     Just push the vertex in the result array
     Just assign the getting vertex as true while storing it to the visited{} object.

     If we got the vertex, then At adjacencyList their would be an adjacent array(consisitinng adjacentVertex) corresponding to each vertex.
     Start looping over the adjacentArray of corresponding vertex to get every adjacentVertex in it.
        if(the adjacentVertex is not found in visited{} as key )
          Recursively call dfs function with the adjacentVertex. reutrn dfs(adjacentVertex);
*/

/*
// CODE IMPLEMENTATION
class Graph {
  constructor() {
    this.adjacencyList={};
  }

  addVertex(vertex){
    if(!this.adjacencyList[vertex])
      this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2){
    if(this.adjacencyList[vertex1])
      this.adjacencyList[vertex1].push(vertex2);

    if(this.adjacencyList[vertex2])
      this.adjacencyList[vertex2].push(vertex1);
  }

  depthFirstRecursive(start){
debugger;
    const result = [],           //Storing Key Vertex
          visited = {},          //Storing Adjacent Vertices
          adjacencyList = this.adjacencyList;

    // We're going to call this 'Immediately Invoked Function' Recursively.
    (function dfs(vertex) {
      debugger;
      // Edge Case or Base Case to stop recursion
      if(!vertex) return null;
      
      result.push(vertex);
      visited[vertex] = true;

      // Here, current context of 'this' pointing to dfs(), where, this.adjacencyList is not defined. That's why we defined it in a variable called adjacencyList. 
      adjacencyList[vertex].forEach(neighbour =>{
        if(!visited[neighbour])
          return dfs(neighbour);
      });
    }
    )(start);

    return result;
  }
}
const graph = new Graph();
// Adding Vertex
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

// Adding Edge between vertices
graph.addEdge("A","B");
graph.addEdge("A","C");
graph.addEdge("B","D");
graph.addEdge("C","E");
graph.addEdge("D","E");
graph.addEdge("D","F");
graph.addEdge("E","F");


// Depth First Traversal Recursively
graph.depthFirstRecursive('A');
*/ 






// ========================================= Depth First Traversal/Search (Iteratively) ================================
/* Visualiztion:-
          A
        /   \
       B     C
       |     |
       D --- E
        \   /
          F    
DFS Possible Solution:
['A', 'C', 'E', 'F', 'D', 'B'] (This is this Code Solution)
['A', 'C', 'E', 'D', 'B', 'F']
['A', 'B', 'D', 'E', 'C', 'F'] 
['A', 'B', 'D', 'F', 'E', 'C']
*/

/* Approach:-
-- We're going to Depth First Traverse through the graph in iterative way.
   Means, we've to continuously following through the vertex neighbour and continous to follow neighbours before backtracking.
   Create a function called 'depthFirstIterative(start)' which accept a starting vertex for Depth First Traversal.

-- Initialize a 'stack' with an empty array, which is going to keep track of vertices & ADD the Starting vertex to the stack;
   initialize an empty 'result' array or say list, to store the end result, to be return at the very end.
   Initialize an empty 'visited' ojbect, to store the visited vertex by assigning the visited vertex as true.
   Just declare the 'currentVertex';

-- Mark the starting vertex as visited by assigning it as true in visited object

-- Run a loop till their is something in the stack.
   - Popout the next vertex from the stack and assign it in the 'currentVertex';
   - Push the currentVertex to the result list.
   - Since, the currentVertex has its own adjacentArray consisitinng adjacentVertices or say neighbours.
    -- So, If(the neighbour is not visited yet !visited[neighbour], means undefined and !undefined is === true)
       - Mark it as visited by assigning it as true.
       - Push it to the stack.

-- return the result list.
*/

/*
//CODE IMPLEMENTATION:-
class Graph {
  constructor() {
    this.adjacencyList={};
  }

  addVertex(vertex){
    if(!this.adjacencyList[vertex])
      this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2){
    if(this.adjacencyList[vertex1])
      this.adjacencyList[vertex1].push(vertex2);

    if(this.adjacencyList[vertex2])
      this.adjacencyList[vertex2].push(vertex1);
  }

  depthFirstIterative(start){
    const stack = [start],        //keep track of vertices & Added the Starting vertex to the stack;
          result = [],           //list to store the end result
          visited = {};         //object to store visited vertices
    let currentVertex;

    visited[start] = true;    // Marked the starting vertex as visited

    while(stack.length){
      currentVertex = stack.pop();
      result.push(currentVertex);
      
        this.adjacencyList[currentVertex].forEach(neighbour => {
          if(!visited[neighbour]){
            visited[neighbour] = true;
            stack.push(neighbour);
          } 
        });
      
    }
    
    return result; 
  }
}
const graph = new Graph();
// Adding Vertex
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

// Adding Edge between vertices
graph.addEdge("A","B");
graph.addEdge("A","C");
graph.addEdge("B","D");
graph.addEdge("C","E");
graph.addEdge("D","E");
graph.addEdge("D","F");
graph.addEdge("E","F");

// Depth First Traversal Iteratively
graph.depthFirstIterative('A');
*/

/* Output:-
['A', 'C', 'E', 'F', 'D', 'B']
*/






// ========================================= Breadth First Traversal/Search ================================
/* Visualiztion:-
          A
      1 /   \ 1 (level/height)
       B      E
     2 |\    /| 2
       C \2 / F
      3 \ \/ / 3 
           D    

Note: 
- Here, We're first taking the neighbors of A i.e. ['B', 'E']
- Then taking the neighbors of B i.e. ['C', 'D']
- The taking the neighbors of E i.e. ['D', 'F'], But 'D' already traversed. So, 'D' will not traverse again.

BFS Possible Solution:
[‘A’, ‘B’, ‘E’, ‘C’, ‘D’, ‘F’] (Alphabetical Order)
                Or
['A', 'E', 'B', 'D', 'F', 'C']

*/

/* Approach:-
-- In BFS, Visit neighbors (Adjacent Vertices) at current depth first!

--We're going to Breadth First Traverse through the graph.
   Means, We're going to visit all of the neighbours at a given depth/level/height before moving downwards or visiting neighbours of neighbours.
   Create a function called 'breadthFirstTraversal(start)' which accept a starting vertex for Breadth First Traversal.

-- Initialize a 'queue' with an empty array, which is going to keep track of vertices & ADD the Starting vertex to the queue;
   Initialize an empty 'result' array or say list, to store the end result, to be return at the very end.
   Initialize an empty 'visited' object, to store the visited vertex by assigning the visited vertex as true.
   Just declare the 'currentVertex';

-- Mark the starting vertex as visited by assigning it as true in visited object

-- Run a loop till their is something in the queue.
   - shift() the previous vertex from the queu and assign it in the 'currentVertex';
   - Push the currentVertex to the result list.
   - Since, the currentVertex has its own adjacentArray consisiting adjacentVertices or say neighbours in the AdjacencyList.
    -- So, If(the neighbour is not visited yet !visited[neighbour], means undefined and !undefined is === true)
       - Mark it as visited by assigning it to true.
       - Push it to the queue.

-- return the result list.


*/

/*
// CODE IMPLEMENTATION

class Graph {
  constructor() {
    this.adjacencyList={};
  }

  addVertex(vertex){
    if(!this.adjacencyList[vertex])
      this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2){
    if(this.adjacencyList[vertex1])
      this.adjacencyList[vertex1].push(vertex2);

    if(this.adjacencyList[vertex2])
      this.adjacencyList[vertex2].push(vertex1);
  }

  breadthFirstTraversal(start){
    const queue = [start],        //keep track of vertices & Added the Starting vertex to the queue;
          result = [],           //list to store the end result
          visited = {};         //object to store visited vertices
    let currentVertex;

    visited[start] = true;    // Marked the starting vertex as visited

    while(queue.length){
      currentVertex = queue.shift();
      result.push(currentVertex);

      // //WithOut Reversing the neighbour of currentVertex
      // this.adjacencyList[currentVertex].forEach(neighbour=>{
      //   if(!visited[neighbour]){
      //     // Marking the neighbour as visited
      //     visited[neighbour] = true;
      //     queue.push(neighbour);
      //   }
      // });

      // Reversing the Traversing (means, Rather than going with left neighbour, Starting vertex will go with the right neighbour by reverse the adjacentArray).
      this.adjacencyList[currentVertex].reverse().forEach(neighbour=>{
        if(!visited[neighbour]){
          // Marking the neighbour as visited
          visited[neighbour] = true;
          queue.push(neighbour);
        }
      });
    }
    return result;
  }
  
}
const graph = new Graph();
// Adding Vertex
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

// Adding Edge between vertices
graph.addEdge("A","B");
graph.addEdge("A","E");
graph.addEdge("B","C");
graph.addEdge("B","D");
graph.addEdge("C","D");
graph.addEdge("E","F");
graph.addEdge("E","D");
graph.addEdge("D","F");

// Breadth First Traversal
graph.breadthFirstTraversal('A');
*/

/* Output:-
[‘A’, ‘B’, ‘E’, ‘C’, ‘D’, ‘F’]
              OR
['A', 'E', 'B', 'D', 'F', 'C']                 //When we reverse the array.
*/
