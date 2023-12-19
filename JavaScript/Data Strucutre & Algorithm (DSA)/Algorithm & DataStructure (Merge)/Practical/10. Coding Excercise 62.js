/*
    Binary Search Tree - DFS Exercise
    
    Given:-
    Implement the following functions on the BinarySearchTree.prototype. insert has been implemented for you to help with testing.


    DFSPreOrder
    
    This function should search through each node in the binary search tree using pre-order depth first search and return an array containing each
    node's value.
    
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
    binarySearchTree.DFSPreOrder() // [15, 10, 1, 5, 12, 20, 50]


    DFSInOrder
    
    This function should search through each node in the binary search tree using in-order depth first search and return an array containing each 
    node's value.
    
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
    binarySearchTree.DFSInOrder() // [1, 5, 10, 12, 15, 20, 50]


    DFSPostOrder
    
    This function should search through each node in the binary search tree using post-order depth first search and return an array containing each
    node's value.
    
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
    binarySearchTree.DFSPostOrder() // [5, 1, 12, 10, 50, 20, 15]  
     
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

  depthFirstSearchPreOrder() {
      if(!this.root) return undefined;
      
      let resultArr = [];

      function traverse(current){
          resultArr.push(current.value);
          
          if(current.left) traverse(current.left);
          if(current.right) traverse(current.right);
      }

      traverse(this.root);

      
      return resultArr;
  }
    
  depthFirstSearchInOrder() {
    
    if(!this.root) return undefined;
      
    let resultArr = [];
  
    function traverse(currentNode){
      if(currentNode.left) traverse(currentNode.left);
      
      resultArr.push(currentNode.value);
      
      if(currentNode.right) traverse(currentNode.right);
    }
    
    traverse(this.root);
      
      return resultArr;
      
  }
    
  depthFirstSearchPostOrder() {
      if(!this.root) return undefined;

      let resultArr = [];

    function traverse(currentNode){
      if(currentNode.left) traverse(currentNode.left);
      if(currentNode.right) traverse(currentNode.right);
      resultArr.push(currentNode.value);
    }
    
    traverse(this.root);
    
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
