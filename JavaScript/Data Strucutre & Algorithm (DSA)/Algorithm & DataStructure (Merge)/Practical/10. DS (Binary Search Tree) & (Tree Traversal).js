// ==================== Simple Binary Search Tree ============

/* Information:
-- Every node in the Right Side of BST should be Greater than the Root
-- Every node in the Left Side of BST should be Less than the Root.

-- Every Node in the right of Parent Node should be Greater than its Parent.
-- Every Node in the left of Parent Node should be Smaller than its Parent.
*/

/* Approach:
-- Every node should have value and connecting with left & Right Node.
-- Create a Node (Class) with property initializes with left = null & right = null.
-- Create a Root and initializes with null.
                10
              /    \
             7      15
             \
              9
*/

//Code Implementation:
// class Node{
//     constructor(value){
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BinarySearchTree{
//     constructor(){
//         this.root = null;
//     }
// }

// const tree = new BinarySearchTree();
// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right =  new Node(9);



// ========================================== ⭐Inserting in Binary Search Tree⭐ ==========================================
/* Visualization:-
                10
              /   \
             7     13
            / \   /  \
           5   9  11  15

insert(12):
                10
              /   \
             7     13
            / \   /  \
           5   9  11  15
                    \
                     12
*/ 

/* Approach:
-- Create a newNode

-- if there is no root
    - Assign newNode to the root.

-- If there is Root
    -- Create a current Pointer assign it on to the root node, that will traverse over the tree.

    -- Start a Loop
    -- If (required value is < than value of the Node where current Pointer is pointing on it)
        -- Check If(their is no Left Node on its left Side)
            -- Assign left Node of current Pointer to the newNode
        -- If(Left Node is there)
            -- Move/Set current pointer to that node.
            -- And Keep looping till not find the leaf node

    -- If (required value is > than value of the Node where current Pointer is pointing on it)
        -- Check If(their is no Right Node on its Right Side)
            -- Assign Right Node of current Pointer to the newNode
        -- If(Right Node is there)
            -- Move/Set current pointer to that right node.
            -- And Keep looping till not find the leaf node
*/
//Code Implementation:
// class Node{
//     constructor(value){
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BinarySearchTree{
//     constructor(){
//         this.root = null;
//     }

//     insert(value){
//         const newNode = new Node(value);
//         if(!this.root){
//             this.root = newNode;
//             return this;
//         }else{
//             let current = this.root;
//             while(true){
//                 if(value === current.value) return undefined;
//                 if(value<current.value){
//                  if(!current.left){
//                      current.left = newNode;
//                      return this;
//                  }else{
//                      current = current.left;
//                  }
//                 }
                
//                 if(value>current.value){
//                     if(!current.right){
//                         current.right = newNode;
//                         return this;
//                     }else{
//                         current = current.right;
//                     }
//                 }
//            }
//         }
//     }
// }

// const tree = new BinarySearchTree();

// tree.insert(10);
// tree.insert(7);
// tree.insert(5);
// tree.insert(9);
// tree.insert(13);
// tree.insert(11);
// tree.insert(15);
// tree.insert(12);




// ========================================== ⭐Finding a Node in Binary Search Tree⭐ ==========================================
/* Visualization:-
                10
              /   \
             7     13
            / \   /  \
           5   9  11  15

find(12):
                10
              /   \
             7     13
            / \   /  \
           5   9  11  15
                    \
                     12
*/ 

/* Approach:
-- Find Methond will accept the value of the node

-- if there is no root node
    - return "No Root"

-- Create a current Pointer assign it on to the root node.

-- If(value === current.value) return current;
    -- Start a Loop
    -- If (required value is < than value of the Node where current Pointer is pointing on it)
        -- Check If(their is no Left Node on its left Side)
            -- return undefined;
        -- If(Left Node is there)
            -- Move/Set current pointer to that node.
            -- IF(value === current.value) return current;

    -- If (required value is > than value of the Node where current Pointer is pointing on it)
        -- Check If(their is no Right Node on its Right Side)
            -- return undefined;
        -- If(Right Node is there)
            -- Move/Set current pointer to that right node.
            -- IF(value === current.value) return current node;
*/
//Code Implementation:
// class Node{
//     constructor(value){
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BinarySearchTree{
//     constructor(){
//         this.root = null;
//     }

//     insert(value){
//         const newNode = new Node(value);
//         if(!this.root){
//             this.root = newNode;
//             return this;
//         }else{
//             let current = this.root;
//             while(true){
//                 if(value === current.value) return undefined;
//                 if(value<current.value){
//                  if(!current.left){
//                      current.left = newNode;
//                      return this;
//                  }else{
//                      current = current.left;
//                  }
//                 }
                
//                 if(value>current.value){
//                     if(!current.right){
//                         current.right = newNode;
//                         return this;
//                     }else{
//                         current = current.right;
//                     }
//                 }
//            }
//         }
//     }


//     find(value){
//         if(!this.root) return "No Root";
//         let current = this.root;
        
//         if(value === current.value) return current;

//         while(true){

//             //Left Side
//             if(value<current.value){
//                 if(!current.left) return undefined;
//                 else{
//                     current = current.left;
//                     if(value === current.value)
//                         return current;
//                 }
//             }

//             //Right Side
//             if(value>current.value){
//                 if(!current.right) return undefined;
//                 else{
//                     current = current.right;
//                     if(value === current.value)
//                         return current;
//                 }
//             }
//         }
//     }
// }


// const tree = new BinarySearchTree();

// tree.insert(10);
// tree.insert(7);
// tree.insert(5);
// tree.insert(9);
// tree.insert(13);
// tree.insert(11);
// tree.insert(15);
// tree.insert(12);






// ========================================== ⭐TREE TRAVERSAL (Breadth-First Search)⭐ ==========================================

/* Visualization:-
                10
              /   \
             6     15
            / \      \
           3   8      20

BFS():
       -->     10
              /   \
       -->   6     15
            / \      \
       --> 3   8      20

Traverse: [10, 6, 15, 3, 8, 20]
*/ 

/* Approach:
-- Crate a Node Pointer pointing to Root Node
-- Declare a 'data' & 'queue' variable with an empty array

-- push Root Node to the queue

-- Start a Loop till queue is not empty
    - shift the node/element from the queue and store it in a variable called 'dequeued'. (Note:, Queue follow FIFO principle).
    - push the value of the dequeued node in data array.
    - IF(dequeuedNode has left Node) push it into queue
    - IF(dequeuedNode has right Node) push it into queue

-- return data Array. (This data will be the value of the node in Breadth-First Search order of the Tree).
*/

//Code Implementation:
// class Node{
//     constructor(value){
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BinarySearchTree{
//     constructor(){
//         this.root = null;
//     }

//     insert(value){
//         const newNode = new Node(value);
//         if(!this.root){
//             this.root = newNode;
//             return this;
//         }else{
//             let current = this.root;
//             while(true){
//                 if(value === current.value) return undefined;
//                 if(value<current.value){
//                  if(!current.left){
//                      current.left = newNode;
//                      return this;
//                  }else{
//                      current = current.left;
//                  }
//                 }
                
//                 if(value>current.value){
//                     if(!current.right){
//                         current.right = newNode;
//                         return this;
//                     }else{
//                         current = current.right;
//                     }
//                 }
//            }
//         }
//     }

//     BFS(){
//         let node = this.root,
//             data = [],
//             queue = [];
//         queue.push(node);

//         while(queue.length){
//             let dequeued = queue.shift();
//                 data.push(dequeued.value);
//             if(dequeued.left) queue.push(dequeued.left);
//             if(dequeued.right) queue.push(dequeued.right);
//         }

//         return data;
//     }

// }


// const tree = new BinarySearchTree();

// tree.insert(10);
// tree.insert(6);
// tree.insert(3);
// tree.insert(8);
// tree.insert(15);
// tree.insert(20);



// ========================================== ⭐TREE TRAVERSAL (Deapth-First Search - Pre Order)⭐ ==========================================

/* Visualization:-
                10
              /   \
             6     15
            / \      \
           3   8      20

DfsPreOrder():
       ⬇       10
              /   \
       ⬇     6     15
            / \      \
       ⬇   3   8      20

Traverse: [10, 6, 3, 8, 15, 20]
*/ 

/* Approach:
-- We're going to perform DFS-Pre Order using Recursion. This is Pre-Order, We visit the node first, then left, then right.

-- Declare a 'data' variable with an empty array

-- Create a Helper Function called 'Traverse'. Accept each nodes as Argument and Passing each node as Node Paramenter. Starting with Root Node.
    - push value of each node into 'data' array.
    - Check if(passing node has left node) recall the traverse Function with Argument (node.left Node) .
    - Check if(passing node has right node) recall the traverse Function with Argument(node.right Node).


-- return data Array. (This will contain the value of the node in Depth-First Search in (Pre-order) treaversal of the Tree).
*/

//Code Implementation:
// class Node{
//     constructor(value){
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BinarySearchTree{
//     constructor(){
//         this.root = null;
//     }

//     insert(value){
//         const newNode = new Node(value);
//         if(!this.root){
//             this.root = newNode;
//             return this;
//         }else{
//             let current = this.root;
//             while(true){
//                 if(value === current.value) return undefined;
//                 if(value<current.value){
//                  if(!current.left){
//                      current.left = newNode;
//                      return this;
//                  }else{
//                      current = current.left;
//                  }
//                 }
                
//                 if(value>current.value){
//                     if(!current.right){
//                         current.right = newNode;
//                         return this;
//                     }else{
//                         current = current.right;
//                     }
//                 }
//            }
//         }
//     }

//     DfsPreOrder(){
//         let data = [];

//         function traverse(node) {
//             data.push(node.value);

//             if(node.left) traverse(node.left);
//             if(node.right) traverse(node.right);
//         }
//         traverse(this.root);
        
//         return data;
//     }
// }


// const tree = new BinarySearchTree();

// tree.insert(10);
// tree.insert(6);
// tree.insert(3);
// tree.insert(8);
// tree.insert(15);
// tree.insert(20);




// ========================================== ⭐TREE TRAVERSAL (Deapth-First Search - Post Order)⭐ ==========================================

/* Visualization:-
                10
              /   \
             6     15
            / \      \
           3   8      20

DfsPreOrder():
       ⬆       10
              /   \
       ⬆     6     15
            / \      \
       ⬆   3   8      20

Traverse: [3, 8, 6, 20, 15, 10]

Visual Implementation:
    Recursion(10)
        hasLeft Recursion(6)
            hasLeft Recursion(3)
            Doesn't have left (3)
            Doesn't have right (3)
            push --> 3

    Recursion(10)
        hasLeft Recursion(6)
        left Pushed (6) --> 3            
            hasRight Recursion(8)
            Doesn't have left (8)
            Doesn't have right (8)
            push --> 8    

    Recursion(10)
        hasLeft Recursion(6)
        left Pushed (6) --> 3
        right Pushed (6) --> 8
        push --> 6 


    Recursion(10)
        hasRight Recursion(15)
            Doesn't have right (15)

    Recursion(10)
        hasRight Recursion(15)
            hasLeft (20)
            Doesn't have left (20)
            Doesn't have right (20)
            push --> 20   

    Recursion(10)
        hasRight Recursion(15)
            Left Pushed (20)
            push --> 15

    Recursion(10)
        Left Pushed (6)
        Right Pushed (15)
        push -- 10
            
*/ 

/* Approach:
-- We're going to perform DFS-Post Order using Recursion. This is Pre-Order, We visit the LeafNode first, then Parent, then root.
    Post-Order Traversal is just arrangement of single line of code of Pre-Order Traversal.

-- Declare a 'data' variable with an empty array

-- Create a Helper Function called 'Traverse'. Accept each nodes as Argument and Passing each node as Node Paramenter. Starting with Root Node.
    - Check if(passing node has left node) recall the traverse Function with Argument (node.left Node) .
    - Check if(passing node has right node) recall the traverse Function with Argument(node.right Node).
    - push value of each node into 'data' array.


-- return data Array. (This will contain the value of the node in Depth-First Search in (Post-order) treaversal of the Tree).
*/

// Code Implementation:
// class Node{
//     constructor(value){
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BinarySearchTree{
//     constructor(){
//         this.root = null;
//     }

//     insert(value){
//         const newNode = new Node(value);
//         if(!this.root){
//             this.root = newNode;
//             return this;
//         }else{
//             let current = this.root;
//             while(true){
//                 if(value === current.value) return undefined;
//                 if(value<current.value){
//                  if(!current.left){
//                      current.left = newNode;
//                      return this;
//                  }else{
//                      current = current.left;
//                  }
//                 }
                
//                 if(value>current.value){
//                     if(!current.right){
//                         current.right = newNode;
//                         return this;
//                     }else{
//                         current = current.right;
//                     }
//                 }
//            }
//         }
//     }


//     DfsPostOrder(){
//         let data = [];

//         function traverse(node) {
//             if(node.left) traverse(node.left);
//             if(node.right) traverse(node.right);

//             data.push(node.value);
//         }
//         traverse(this.root);
        
//         return data;
//     }

// }


// const tree = new BinarySearchTree();
// tree.insert(10);
// tree.insert(6);
// tree.insert(3);
// tree.insert(8);
// tree.insert(15);
// tree.insert(20);




// ========================================== ⭐TREE TRAVERSAL (Deapth-First Search - In Order)⭐ ==========================================

/* Visualization:-
                10
              /   \
             6     15
            / \      \
           3   8      20

DfsPreOrder():
       ⬆⬇      10
              /   \
       ⬆⬇    6     15
            / \      \
       ⬆⬇  3   8      20

Traverse: [3, 6, 8, 10, 15, 20]

Visual Implementation:
    Recursion(10)
        hasLeft Recursion(6)
            hasLeft Recursion(3)
            Doesn't have left (3)
            push --> 3
            Doesn't have right (3)


    Recursion(10)
        hasLeft Recursion(6)
        left Pushed (3) 
            push --> 6
                hasRight Recursion(8)
                Doesn't have left (8)
                push --> 8
                Doesn't have right (8)
                

    Recursion(10)
        hasLeft Recursion(6)
        left Pushed (3)
        pushed (6)        
        right Pushed (8)
         


    Recursion(10)
        right Pushed (6)
        push --> 10
        hasRight Recursion(15)
            Doesn't have right of (15)
            push --> 15   

    Recursion(10)
        hasRight Recursion(15)
            hasLeft Recursion(20)
            Doesn't have left (20)
            push --> 20           
            Doesn't have right of (20)
            

    Recursion(10)
        hasRight Recursion(15)            
        Right Complete
        pushed (15)
        Left Pushed (20)
            
            

    Recursion(10)
        Left Pushed (6)
        push --> 10
        Right Pushed (15)
        
            
*/ 

/* Approach:
-- We're going to perform DFS-In Order using Recursion. This is In-Order, We visit the LeafNode first, then Parent, then child.
    In-Order Traversal is just arrangement of single line of code of Post-Order Traversal.

-- Declare a 'data' variable with an empty array

-- Create a Helper Function called 'Traverse'. Accept each nodes as Argument and Passing each node as Node Paramenter. Starting with Root Node.
    - Check if(passing node has left node) recall the traverse Function with Argument (node.left Node) .
    - push value of each node into 'data' array.
    - Check if(passing node has right node) recall the traverse Function with Argument(node.right Node).


-- return data Array. (This will contain the value of the node in Depth-First Search in (In-order) treaversal of the Tree).
*/

//Code Implementation:
// class Node{
//     constructor(value){
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BinarySearchTree{
//     constructor(){
//         this.root = null;
//     }

//     insert(value){
//         const newNode = new Node(value);
//         if(!this.root){
//             this.root = newNode;
//             return this;
//         }else{
//             let current = this.root;
//             while(true){
//                 if(value === current.value) return undefined;
//                 if(value<current.value){
//                  if(!current.left){
//                      current.left = newNode;
//                      return this;
//                  }else{
//                      current = current.left;
//                  }
//                 }
                
//                 if(value>current.value){
//                     if(!current.right){
//                         current.right = newNode;
//                         return this;
//                     }else{
//                         current = current.right;
//                     }
//                 }
//            }
//         }
//     }


//     DfsInOrder(){
//         let data = [];

//         function traverse(node) {
//             if(node.left) traverse(node.left);
//             data.push(node.value);
//             if(node.right) traverse(node.right);

            
//         }
//         traverse(this.root);
        
//         return data;
//     }

// }


// const tree = new BinarySearchTree();
// tree.insert(10);
// tree.insert(6);
// tree.insert(3);
// tree.insert(8);
// tree.insert(15);
// tree.insert(20);





/*
    Tips & Tricks to remember Traversal:-

Inorder:-

-- Traverse the left sub-tree, (recursively call inorder(root -> left).

-- Visit and print the root node.

-- Traverse the right sub-tree, (recursively call inorder(root -> right).

Tips to remember –

Direction : Clockwise direction

Rule : LCR i.e. Left ,Center(root), Right



Preorder:-

-- Visit and print the root node.

-- Traverse the left sub-tree, (recursively call Preorder(root -> left).

-- Traverse the right sub-tree, (recursively call Preorder(root -> right)

Tips to remember –

Direction : Anti-Clockwise direction

Rule : CLR i.e. Center(root) ,left, Right


Postorder:-

-- Traverse the left sub-tree, (recursively call Postorder(root -> left).

-- Traverse the right sub-tree, (recursively call Postorder(root -> right).

-- Visit and print the root node

Tips to remember –

Direction : Anti-Clockwise direction

Rule : LRC i.e. Left, Right, Center(root)

*/