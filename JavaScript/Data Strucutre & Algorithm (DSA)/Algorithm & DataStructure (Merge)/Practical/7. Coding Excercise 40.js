/*
    SLL - set Exercise
    Given:-
    Implement the following on the SinglyLinkedList class

    set()

    This function should accept an index and a value and update the value of the node in the SinglyLinkedList at the
    index with the new value. It should return true if the node is updated successfully, or false if an invalid index 
    is passed in.

    Example:-
    var singlyLinkedList = new SinglyLinkedList();
 
    singlyLinkedList.set(0,10) // true
    singlyLinkedList.set(1,2) // true
    singlyLinkedList.length // 2
    singlyLinkedList.head.val // 10
     
    singlyLinkedList.set(10,10) // false
     
    singlyLinkedList.set(3,100) // true
    singlyLinkedList.head.next.next.next.val; // 10
*/

//Code Implementation:-
class Node{
    constructor(val){
        this.val = val
        this.next = null;      
    }
}

class SinglyLinkedList{
    constructor(val){
        this.val = val
        this.next = null;      
    }
    push(val){
        var newNode = new Node(val);
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
    
    get(index){
        if(index<0 || index>=this.length)return false;
        
        let currentPointer = this.head,
        counter = 0;
        
        while(counter!=index){
            currentPointer = currentPointer.next;
            counter++;
        }
        return currentPointer;
    
    }
    
    set(index, val){
        if(index<0 || index>=this.length)return false;
        
        let currentPointer = this.head,
        counter = 0;
        
        while(counter!=index){
            currentPointer = currentPointer.next;
            counter++;
        }
        currentPointer.val = val;
        
        return true;
    }
}



var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(5).push(10).push(15).push(20);