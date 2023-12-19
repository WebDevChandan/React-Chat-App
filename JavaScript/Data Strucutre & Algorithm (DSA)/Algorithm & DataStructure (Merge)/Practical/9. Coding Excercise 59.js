/*
    Queues - enqueue Exercise
    
    Given:-
    Implement the following methods on the Queue class.
    
    enqueue

    This function adds the value to the end of the queue. This should be an O(1) operation and return the new size of the queue.

    Note:
    - Queue Follows First In First Out (FIFO) principle
    
    Examples:-
    
    var queue = new Queue();
    queue.enqueue(10) // 1
    queue.size // 1
    queue.enqueue(100) // 2
    queue.size // 2
    queue.enqueue(1000) // 3
    queue.size // 3
     
*/ 

//CODE IMPLEMENTATION:-
class Node{
    constructor(val){
        this.value = val
        this.next = null;      
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    } 
    enqueue(val){

      let newNode = new Node(val);
        
      if(!this.first){
          this.first  = newNode;
          this.last = newNode;
      }else{
          this.last.next = newNode;
          this.last = newNode;
      }
        return ++this.size;
    }
}

var queue = new Queue();
queue.enqueue(10) // 1
queue.size // 1
queue.enqueue(100) // 2
queue.size // 2
queue.enqueue(1000) // 3
queue.size // 3

