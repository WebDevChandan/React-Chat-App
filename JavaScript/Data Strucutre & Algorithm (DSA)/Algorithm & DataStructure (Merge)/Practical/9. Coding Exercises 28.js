//DDL Shift-Exercise
class Node {
    constructor(value) {
        this.val = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    unshift(value){
        const newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    shift(){
        if(!this.head) return null;
        
        let rmvNode = this.head;
        this.head = rmvNode.next;
        this.head.prev = null;
        rmvNode.next = null;

        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
        }
        this.length--;
        return rmvNode;
    }
}

const list = new DoublyLinkedList();