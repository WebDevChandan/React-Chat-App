//[Incomplete] Leetcode: #637 (Average of Levels in Binary Tree)

/* 
    Given:-
1. I/P: root => root of a binary tree
2. O/P: array=> average value of the nodes on each level in the form of an array.

    Test Cases:-
Input: root = [3,9,20,null,null,15,7]
Output: [3.00000,14.50000,11.00000]
Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
Hence return [3, 14.5, 11]. 

Input: root = [3,9,20,15,7]
Output: [3.00000,14.50000,11.00000]


    Approach_#1:-
1. Build a Binary Tree, having at most 2 children of the parent node. (Not necessarily BST)
2. We've to take average of Node values at each level of Binary Tree. So, we've to perform Breadth First Traversal/Search over the Binary Tree.
3. While BFS Traversal over each level of Tree, Take average of nodes at each level.
    Then, push that average to an empty array called 'result'. Means At the end of BFS Traversal (length of result === height of tree)
4. return result arr.
*/


//CODE IMPLEMENTATION:-
//Create a Node
class Node {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

//Build Binary Tree
class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(val){
        let newNode = new Node(val);

        if(!this.root){
            this.root = newNode;
            return this;
        }
        else{
            let current = this.root;

            while(true){
                if(current.val === val) return undefined
                
                if(!current.left){
                    current.left = newNode;
                    return this;
                }else
                    current = current.right;

                if(!current.right){
                    current.right = newNode;
                    return this;
                }else
                    current = current.left;
            }
        }
    }
}

const binaryTree = new BinaryTree();
binaryTree.insert(3);
binaryTree.insert(9);
binaryTree.insert(20);
binaryTree.insert(null);
binaryTree.insert(null);
binaryTree.insert(15);
binaryTree.insert(7);
