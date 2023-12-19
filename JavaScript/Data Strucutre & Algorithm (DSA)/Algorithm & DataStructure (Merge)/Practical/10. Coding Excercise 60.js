/*
    Binary Search Tree - insert Exercise
    
    Given:-
    Write a function on the BinarySearchTree class

    insert - accepts a value and inserts it into the BST in the correct position. The function should return the
    binarysearch tree. 
    
    
    Examples:-
    
    
    var binarySearchTree = new BinarySearchTree();
    binarySearchTree.insert(15);
    binarySearchTree.insert(20);
    binarySearchTree.insert(10);
    binarySearchTree.insert(12);
    binarySearchTree.root.value // 15
    binarySearchTree.root.right.value // 20
    binarySearchTree.root.left.right.value // 12
     
    var binarySearchTree = new BinarySearchTree();
    binarySearchTree
        .insert(15)
        .insert(20)
        .insert(10)
        .insert(12);
    binarySearchTree.root.value // 15
    binarySearchTree.root.right.value // 20
    binarySearchTree.root.left.right.value // 12
     
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
}

const binarySearchTree = new BinarySearchTree();
binarySearchTree
    .insert(15)
    .insert(20)
    .insert(10)
    .insert(12);
