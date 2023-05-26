/*
    SLL - Rotate Exercise
    Given:-
    Implement the following on the SinglyLinkedList class

    rotate()

    This function should rotate all the nodes in the list by some number passed in. For instance, if your list looks like
    1 -> 2 -> 3 -> 4 -> 5 and you rotate by 2, the list should be modified to 3 -> 4 -> 5 -> 1 -> 2. The number passed in
    to rotate can be any integer.
    
    Time Complexity: O(N), where N is the length of the list.
    Space Complexity: O(1)

    Example:-
    var singlyLinkedList = new SinglyLinkedList;
    singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
    singlyLinkedList.head.val; // 5
    singlyLinkedList.tail.val; // 25;
     
    singlyLinkedList.rotate(3);
    singlyLinkedList.head.val; // 20
    singlyLinkedList.head.next.val; // 25
    singlyLinkedList.head.next.next.val; // 5
    singlyLinkedList.head.next.next.next.val; // 10
    singlyLinkedList.head.next.next.next.next.val; // 15
    singlyLinkedList.tail.val; // 15
    singlyLinkedList.tail.next; // null
    var singlyLinkedList = new SinglyLinkedList;
    singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
    singlyLinkedList.head.val; // 5
    singlyLinkedList.tail.val; // 25;
     
    singlyLinkedList.rotate(-1);
    singlyLinkedList.head.val; // 25
    singlyLinkedList.head.next.val; // 5
    singlyLinkedList.head.next.next.val; // 10
    singlyLinkedList.head.next.next.next.val; // 15
    singlyLinkedList.head.next.next.next.next.val; // 20
    singlyLinkedList.tail.val; // 20
    singlyLinkedList.tail.next // null
    var singlyLinkedList = new SinglyLinkedList;
    singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
    singlyLinkedList.head.val; // 5
    singlyLinkedList.tail.val; // 25;
     
    singlyLinkedList.rotate(1000);
    singlyLinkedList.head.val; // 5
    singlyLinkedList.head.next.val; // 10
    singlyLinkedList.head.next.next.val; // 15
    singlyLinkedList.head.next.next.next.val; // 20
    singlyLinkedList.head.next.next.next.next.val; // 25
    singlyLinkedList.tail.val; // 25
    singlyLinkedList.tail.next // null
*/

/*
    Note:
+ve value = rotate anticlockwise
-ve value = rotate clockwise

    Approach:
1. If no. of rotation (-ve or +ve ) % length of list --> val === 0  --> return list

2. if(val !=0 )
     if(val is +ve)
         If any no. of rotation % length of list --> val (0<val<length of list) --> rotate anticlockwise as per val
     if(val is -ve)
         If any no. of rotation % length of list --> val (0<val<length of list) --> rotate clockwise as per val
   
   return list;
*/

//Code Implementation:-
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    rotate(val){
        let noOfRotation = val%this.length;
        if(noOfRotation===0) return this;

        if(noOfRotation>0) return this.anticlockwise(noOfRotation);
        else return this.clockwise(noOfRotation);
    }

    anticlockwise(noOfRotation){
        let currentPointer = this.head,
            counter = 0;
        
        while(counter!=noOfRotation){
            currentPointer = currentPointer.next;
            counter++;
        }
        for (let i = 0; i < noOfRotation; i++) {
            currentPointer = this.head
            this.head = currentPointer.next;
            this.tail.next = currentPointer;
            this.tail = currentPointer;
            currentPointer.next = null;    
        }
        
        return this;
    }

    clockwise(noOfRotation){
        let currentPointer = this.head,
            prevPointer = currentPointer,
            counter = 0,
            rotation = this.length+noOfRotation;
        
        while(counter!=rotation){
            prevPointer = currentPointer;
            currentPointer = currentPointer.next;
            counter++;
        }

        for (let i = 0; i < 1; i++) {
            currentPointer.next = this.head;
            this.head = currentPointer;
            this.tail = prevPointer;
            this.tail.next = null;
        }
        
        
        return this;
    }
}


var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(5).push(10).push(15).push(20);