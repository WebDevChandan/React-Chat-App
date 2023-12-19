/*
    Stacks - push Exercise
    
    Given:-
    Implement the following methods on the Stack class

    push - takes in a node and puts it at the top of the stack. Should return the new size of the stack.

    Note: Stack follows Last In First Out (LIFO) Principle
    Examples:-
    
    var stack = new Stack();
 
    stack.push(10) // 1
    stack.first.value // 10
    stack.last.value // 10
    stack.push(100);
    stack.first.value // 100
    stack.last.value // 10
    stack.push(1000);
    stack.first.value // 1000
    stack.last.value // 10
     
    var stack = new Stack();
     
    stack.push(10) // 1
    stack.size // 1
    stack.push(100) // 2
    stack.size // 2
    stack.push(1000) // 3
    stack.size // 3
     
*/ 

//CODE IMPLEMENTATION:-
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;  
        this.size = 0;
    }
    push(val){
        const newNode = new Node(val);
        
        if(!this.first){
            this.last = newNode;
            this.first = newNode;
        }else{
            let temp = this.first;
            this.first = newNode;
            newNode.next = temp;
        }
        
        this.size++;
        
        return this.size;
    }
}

var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5); 
    
     
    