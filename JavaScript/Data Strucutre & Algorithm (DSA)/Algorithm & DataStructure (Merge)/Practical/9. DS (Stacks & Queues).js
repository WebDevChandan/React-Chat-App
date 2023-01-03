// ===================================== Pushing & Popping in Stack =================================

// class Node {
//     constructor(val) {
//         this.value = val;
//         this.next = null;
//     }
// }

// // Should Follow Last In Last Out Principle
// class Stack {
//     constructor() {
//         this.first = null;
//         this.last = null;
//         this.size = 0;
//     }

//     //Should work like unshift
//     push(val){
//         let newNode = new Node(val);
        
//         if(!this.first){
//             this.first = newNode;
//             this.last = newNode;
//         }else{
//             let temp = this.first;
//             this.first = newNode;
//             newNode.next = temp;
            
//         }

//         return ++list.size;
        
//     }

//     //Should work like shift
//     pop(){
//         if(!this.first) return null;
        
//         let removedNode = this.first;
           
//         if(this.first === this.last){
//             this.first = null;
//             this.last = null;
//         }else{
//                 this.first = removedNode.next;
//                 removedNode.next = null;
//         }

//         this.size--;
//         return removedNode.value;
//     }
// }

// let stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);
// stack.push(5);




// ===================================== Enqueue & Dequeue in Stack =================================


class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

// Should Follow First In First Out Principle
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    //Should work like push
    enqueue(val){
        let newNode = new Node(val);
        
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
            
        }

        this.size++;
        return this;
        
    }

    //Should work like shift
    dequeue(){
        if(!this.first) return null;
        
        let dequeueNode = this.first;
           
        if(this.first === this.last){
            this.first = null;
            this.last = null;
        }else{
                this.first = dequeueNode.next;
                dequeueNode.next = null;
        }

        this.size--;
        return dequeueNode.value;
    }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);