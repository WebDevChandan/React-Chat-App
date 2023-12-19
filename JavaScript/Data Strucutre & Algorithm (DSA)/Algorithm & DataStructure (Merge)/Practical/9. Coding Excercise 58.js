/*
    Stack with 2 Queues
    
    Given:-
    Implement a stack using two queues:
    
    You should implement the following functions:
    
    - push (returns the stack)
    
    - pop (returns the value popped)
    
    Comment on your time complexity for all of these operations:
    
    Examples:-
    
    var s = new Stack()
    s.push(10).push(20).push(30)
    s.pop() // 30
    s.pop() // 20
    s.pop() // 10
    s.pop() // null
    s.push(30).push(40).push(50)
    s.pop() // 50
    s.push(60)
    s.pop() // 60
     
*/ 

//CODE IMPLEMENTATION:-
class Stack{
    constructor(){
        this.first = null;
        this.last = null;  
        this.size = 0;
    }
    push(val){
        var node = new Node(val);

        if (!this.first){
            this.first = node;
            this.last = node;
        } else {
            var tmp = this.first;
            this.first=node;
            this.first.next=tmp;
        }
        ++this.size;
        
        return this;
    }

    pop(){
        if(!this.last && !this.first)  return null;

        let removedElement = this.first.value;
        
        if(this.first===this.last){ 
            this.first = null;
            this.last = null;
        }else{
            this.first = this.first.next;
        }

        this.size--;
        
        return removedElement; 
    }
}

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(data) {
        var node = new Node(data);

        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }

        return ++this.size;
    }

    dequeue() {
        if (!this.first) return null;

        var temp = this.first;
        if (this.first == this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}
 var s = new Stack();
 s.push(10).push(20).push(30);