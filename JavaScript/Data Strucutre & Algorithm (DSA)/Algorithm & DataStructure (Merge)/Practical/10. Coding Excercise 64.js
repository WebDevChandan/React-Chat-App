/*
    Binary Search Tree - remove Exercise
    Implement the following function on the BinarySearchTree.prototype. insert is implemented to help with testing.
    
    remove
    
    This function should remove a node from a binary search tree. Your remove function should be able to handle removal of the root node, removal of a 
    node with one child and removal of a node with two children. The function should return the node removed.
    
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
    binarySearchTree.remove(50);
    binarySearchTree.root.right.value // 20
    binarySearchTree.root.right.right // null
     
    binarySearchTree.remove(5);
    binarySearchTree.root.left.left.value // 1
    binarySearchTree.root.left.left.right // null
     
    var binarySearchTree = new BinarySearchTree();
    binarySearchTree
        .insert(15)
        .insert(20)
        .insert(10)
        .insert(12)
        .insert(1)
        .insert(5)
        .insert(50);
     
    binarySearchTree.remove(1);
    binarySearchTree.root.left.left.value // 5
    binarySearchTree.root.left.left.left // null
    binarySearchTree.root.left.left.right // null
     
    binarySearchTree.remove(20);
    binarySearchTree.root.right.value // 50
    binarySearchTree.root.right.right // null
    binarySearchTree.root.right.left // null
     
    var binarySearchTree = new BinarySearchTree();
    binarySearchTree
        .insert(15)
        .insert(20)
        .insert(10)
        .insert(12)
        .insert(1)
        .insert(5)
        .insert(50)
        .insert(60)
        .insert(30)
        .insert(25)
        .insert(23)
        .insert(24)
        .insert(70);
     
    binarySearchTree.remove(10);
    binarySearchTree.root.left.value // 12
    binarySearchTree.root.left.left.value // 1
    binarySearchTree.root.left.left.right.value // 5
     
    binarySearchTree.remove(50);
    binarySearchTree.root.right.value // 20
    binarySearchTree.root.right.right.value // 60
    binarySearchTree.root.right.right.left.value // 30
     
    var binarySearchTree = new BinarySearchTree();
    binarySearchTree
        .insert(22)
        .insert(49)
        .insert(85)
        .insert(66)
        .insert(95)
        .insert(90)
        .insert(100)
        .insert(88)
        .insert(93)
        .insert(89)
     
    binarySearchTree.remove(85);
    binarySearchTree.root.right.right.value // 88
    binarySearchTree.root.right.right.right.left.left.value // 89
     
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

 
    BFS(){
        if(!this.root) return undefined;
        let resultArr =[],
            queue = [];
        queue.push(this.root);

        while(queue.length){
            let dequeuedNode = queue.shift();
            resultArr.push(dequeuedNode.value);
            
            if(dequeuedNode.left) queue.push(dequeuedNode.left);
            if(dequeuedNode.right) queue.push(dequeuedNode.right);
        }
        return resultArr;
    }

    remove(val){
        let BSTArr = this.BFS(),
            removedValIdx = BSTArr.indexOf(val);
        return removedValIdx;
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