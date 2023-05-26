/*
    SLL - get Exercise
    Given:-
    Implement the following on the SinglyLinkedList class

    get()

    This function should find a node at a specified index in a SinglyLinkedList. It should return the found node.

    Example:-
    var singlyLinkedList = new SinglyLinkedList();
     
    singlyLinkedList.push(5).push(10).push(15).push(20);
    singlyLinkedList.get(0).val // 5
    singlyLinkedList.get(1).val // 10
    singlyLinkedList.get(2).val // 15
    singlyLinkedList.get(3).val // 20
    singlyLinkedList.get(4) // null
*/

//Code Implementation:-
class Node{
    constructor(val){
        this.val = val
        this.next = null      
    }
}
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
    
    get(index){
        if(index < 0 || index >=this.length) return false;
            
        let counter = 0,
            current = this.head;

        while(counter!==index){
            current = current.next;
            counter++;
        }
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
    
}


var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(10).push(10).push(15).push(20);