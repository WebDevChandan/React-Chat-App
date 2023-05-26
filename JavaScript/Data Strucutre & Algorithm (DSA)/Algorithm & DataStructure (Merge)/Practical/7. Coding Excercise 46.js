/*
    SLL - set Exercise
    Given:-
    Implement the following on the SinglyLinkedList class

    rotate()

    This function should remove a node at a specified index in a SinglyLinkedList. It should return the removed node.
    if the index is valid, or undefined if the index is invalid.
  
    Example:-
    var singlyLinkedList = new SinglyLinkedList;
    singlyLinkedList.push(5).push(10).push(15).push(20);
    singlyLinkedList.remove(2).val; // 15
    singlyLinkedList.remove(100); // undefined
    singlyLinkedList.length // 3
    singlyLinkedList.head.val // 5
    singlyLinkedList.head.next.val // 10
    singlyLinkedList.head.next.next.val // 20
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

    shift(){
        let currentPointer = this.head;
        this.head = currentPointer.next;
        currentPointer.next = null;
        this.length--;

        if(this.length==0){
            this.head = null;
            this.tail = null;
        }
        return currentPointer;
    }

    pop(){
        let currentPointer = this.head,
            prevPointer = currentPointer;

        while(currentPointer!=this.tail){
            prevPointer = currentPointer;
            currentPointer = currentPointer.next;
        }
        this.tail = prevPointer;
        this.tail.next = null;
        this.length--;

        if(this.length==0){
            this.head = null;
            this.tail = null;
        }
        return currentPointer;
    }
    
    remove(index){
        if(index<0 || index>=this.length) return undefined;

        if(index ===0) return this.shift();
        if(index === this.length-1) return this.pop();
        
        let currentPointer = this.head,
            prevPointer = currentPointer,
            counter = 0;

        while(counter!=index){
            prevPointer = currentPointer;
            currentPointer = currentPointer.next;
            counter++;
        }
        prevPointer.next = currentPointer.next;
        this.length--;

        if(this.length==0){
            this.head = null;
            this.tail = null;
        }
        return currentPointer;
    }
}


var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(5).push(10).push(15).push(20);