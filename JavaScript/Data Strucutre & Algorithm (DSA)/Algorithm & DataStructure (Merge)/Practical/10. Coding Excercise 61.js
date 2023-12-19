/*
    BinarySearchTree - find
    
    Given:-
    Implement the following functions on the `BinarySearchTree.prototype`. insert has been implemented for you to help with testing.

    findIteratively
    
    This function should find a node in a binary tree. It should return the node if found, otherwise return `undefined`. This should be solved using
    iteration or recursion. The tests for this method assume that insertIteratively has been implemented correctly.
    
    Examples:-
    var binarySearchTree = new BinarySearchTree();
    binarySearchTree
        .insert(15)
        .insert(20)
        .insert(10)
        .insert(12);
    var foundNode = binarySearchTree.find(20);
    foundNode.value // 20
    foundNode.left // null
    foundNode.right // null
     
    var binarySearchTree = new BinarySearchTree();
     
    binarySearchTree
        .insert(15)
        .insert(20)
        .insert(10)
        .insert(12);
    var foundNode = binarySearchTree.find(120);
    foundNode // undefined
     
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

    find(value){
        if(!this.root) return undefined;
        if(this.root.value === value) return value;

        let current = this.root;
        while(true){
            if(value>current.value){
                if(current.right){
                    current = current.right;
                    if(current.value === value)
                        return current; 
                }else
                    return undefined;
            }else{
                if(current.left){
                    current = current.left;
                    if(current.value === value)
                        return current;
                }else
                    return undefined;
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
