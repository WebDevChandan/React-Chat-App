/*
    Binary Search Tree - BFS Exercise
    
    Given:-
    Implement the following function on the BinarySearchTree.prototype. insert is implemented to help with testing.


    breadthFirstSearch

    This function should search through each node in the binary search tree using breadth first search and return an array containing each node's value.
    
    Examples:-
   var binarySearchTree = new BinarySearchTree();
    binarySearchTree
        .insert(15)
        .insert(20)
        .insert(10)
        .insert(12)
        .insert(1)
        .insert(5)
        .insert(50);
    binarySearchTree.breadthFirstSearch() // [(15, 10, 20, 1, 12, 50, 5)]; 
     
*/ 

//CODE IMPLEMENTATION:-
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
    
  insert(value){
    const newNode = new Node(value);
        
    if(!this.root) {this.root = newNode; return this;} 
    
    else{
        let current = this.root; 

        while(true){
          if(value < current.value ){
              if(!current.left){
                  current.left = newNode;
                  return this;
              }else{
                  current = current.left;
              }
          }else{
              if(!current.right){
                  current.right = newNode;
                  return this;
              }else{
                  current = current.right;
              }
          }

        }

    }

    }

 
    breadthFirstSearch() {
     const resultArr = [],
         queue=[];
        queue.push(this.root);
        
        while(queue.length){
        let dequeuedNode = queue.shift();
            resultArr.push(dequeuedNode.value);
            
            if(dequeuedNode.left) queue.push(dequeuedNode.left);
            if(dequeuedNode.right) queue.push(dequeuedNode.right);
        }

        return resultArr;
     
    }
}

const binarySearchTree = new BinarySearchTree();
binarySearchTree
    .insert(15)
    .insert(20)
    .insert(10)
    .insert(12)
    .insert(1)
    .insert(5)
    .insert(50);
