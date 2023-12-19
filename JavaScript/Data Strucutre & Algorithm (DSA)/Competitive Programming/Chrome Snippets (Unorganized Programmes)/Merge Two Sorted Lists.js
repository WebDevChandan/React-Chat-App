// Leetcode: #21 (Merge Two Sorted Lists)

/* Given:-
1. list1 & list2 => Given Two sorted list along with their Heads
2. Need to merge the two sorted list in a one sorted list.
    Note: the list should be made by splicing together the nodes of the first two lists.
3. Return the head of the merged linked list, means just return the merged linked list.
4. Note: This list is a Singly Linked List.
*/

/* Test Cases:-
Input: list1 = [1,2,4], list2 = [1,3,4]         |   Output: [1,1,2,3,4,4]
Input: list1 = [], list2 = []                   |   Output: []
Input: list1 = [], list2 = [0]                  |   Output: [0]
Input: list1 = [1,2,4], list2 = [0]             |   Output: [0,1,2,4]
*/

/* 1st Approach:-
1. Edge Cases for No Node:
    If there is no head in list1 --> return list2;
    If there is no head in list2 --> return list1;


2. Get the each node from list1 
    And start traversing list2. 
    
    As we got any node in list2 Equal or smaller to node of list1, then check that node after node of list2 should be Greater than node of list1, then
    we're going to add node of list1 after smaller node of list2;

    As we got any node in list2 Greater than the node of list1, we're going to add node of list1 before node of list2;
    
*/

class Node {
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}

class List1 {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value){
        let newNode = new Node(value);
        // return newNode;
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        
        this.length++;
        return this;
    }

}
const list1 = new List1();
//Creating List
list1.push(1);
list1.push(2);
list1.push(3);


class List2 extends List1 {
    constructor(L1head, L1tail) {
        super(L1head, L1tail);
        this.head = null;
        this.tail = null;
        this.length = 0;
        this.head1 = L1head;
    }

    check(){
        return List1.head;
    }
    
}

const list2 = new List2();
//Creating List1
list2.push(4);
list2.push(5);
list2.push(6);



