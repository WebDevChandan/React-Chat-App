/*
    SLL - insert Exercise
    Given:-
    Implement the following on the SinglyLinkedList class

    insert()

    This should insert a node at a specified index in a SinglyLinkedList. It should return true if the index is valid,
    and false if the index is invalid (less than 0 or greater than the length of the list).

    Example:-
    var singlyLinkedList = new SinglyLinkedList();
    singlyLinkedList.push(5).push(10).push(15).push(20);
    singlyLinkedList.insert(2,12); // true
    singlyLinkedList.insert(100,12); // false
    singlyLinkedList.length // 5
    singlyLinkedList.head.val // 5
    singlyLinkedList.head.next.val // 10
    singlyLinkedList.head.next.next.val // 12
    singlyLinkedList.head.next.next.next.val // 15
    singlyLinkedList.head.next.next.next.next.val // 20
     
    singlyLinkedList.insert(5,25); // true
    singlyLinkedList.head.next.next.next.next.next.val //25
    singlyLinkedList.tail.val // 25
*/

//Code Implementation:-
class Node{
    constructor(val){
        this.val = val
        this.next = null      
    }
}
var pushCount = 0;
class SinglyLinkedList{
    constructor(val){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    push(val){
        // YOUR CODE GOES HERE
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
            
        }
        this.length++;
        return this;
    }

    unshift(val){
        let newNode = new Node(val),
            currentPointer = newNode;
        newNode.next = this.head;
        this.head = currentPointer;
        this.length++;

        return true;
    }
    
    set(index, val){
        if(index<0 || index>=this.length) return false;

        let counter=0,
            current = this.head;
            while(counter !== index){
                current = current.next;
                counter++;
            }

        current.val = val;

        return true;
    }

    insert(index, val){
        if(index<0 || index>this.length) return false;
        
        if(index===0)return this.unshift(val);
        if(index===this.length) {
            this.push(val);
            return true;
        }
        
        let currentPointer = this.head,
            prevPointer = currentPointer,
            counter =0;
        
        while(counter!=index){
            prevPointer = currentPointer;
            currentPointer = currentPointer.next;
            counter++;
        }
        let newNode = new Node(val);
        prevPointer.next = newNode;
        newNode.next = currentPointer;
        this.length++;
        
        return true;
    }
    
}


var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(5).push(10).push(15).push(20);