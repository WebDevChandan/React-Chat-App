// Leetcode:  #206 (Reverse Linked List)

/* Given:-
1. head => A SinglyLinkedList
2. reverse the list 
3. return the reversed list.
*/

/* Approach:-
1. Firstly, swap the head & tail pointer with each other with the help of creating 3rd variable called 'node'.
     We've to keep in mind while reversing the list that, In SinglyLinkedList, next reference of tail node should be null & nex reference of head node
     shouldn't be null. 
2. Create 3 pointers namely: 'prev', 'next' & node. & declare a 'counter' variable with 0;

3. Since, node already created while swapping, and we swapped in such a way that 'node' variable pointing to the tail node that took place of head node 
   after swapping.

4. Initally, Declare & Initiallize 'prev' with null & Just Declare the 'next' pointer; 
    
5. Run a loop while counter !== length of the list. 
*/
//CODE IMPLEMENTAIOTN:-
class Node {
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Creating the List
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

    print(){
        let current = this.head,
            arr = [];

        while(current){
            arr.push(current.val);
            current = current.next;
        }
        return arr;
    }
    reverse(){
        let node = this.head;
            this.head = this.tail;
            this.tail = node;

        let prev = null,
            next,
            counter =0;
    
        while(counter!==this.length){ 
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
            counter++;
        }
        
        return this;
    }

    
}

const list = new SinglyLinkedList();
//Creating List
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);



// My Solution at Leetcode:-
/*
        h                           
        1, 2, 3, 4, 5
   <--  N > N>N > N>N>N                                  
nul<--  p < P < P<P<P                        
null    

1--> null
*/

var reverseList = function(head) {
    let node = head,
        prev = null,
        next;
    
    while(node){
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
    }
    
    return prev;
};

//ES6 Syntax:
var reverseList = function(head) {
    let [prev, current] = [null, head]
    while(current) {
        [current.next, prev, current] = [prev, current, current.next]
    }
    return prev
}