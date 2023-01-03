//========================================================= Push Doubly Linked List ==================================================

/* Approach:-
•	Create A Node i.e. Object consisting keys --> value: 'data' & next: null i.e. reference to the next node

•	If(there is No Node i.e. head = null)
Assign head = newNode
Assign tail = newNode
Increase Length   (Imagine: Creating Forward Arrow)
Return List

•	If(There is some number of Nodes i.e head pointing to --> First Node)
    So, tail has been assigning to the lastNode consisting --> value: 'data', next: null  & prev = node
•	Create a newNode.
-	 Assign it's prev pointer to the tail node.
•	Assign tail Node's next pointer to the new node.
-	Set tail to the newNode
•	Increase Length   (Imagine: Creating Forward Arrow)
•	Return DoublyLinkedList

*/

//Code Implementation:-
// class Node {
//     constructor(val) {
//         this.value = val;
//         this.next = null;
//         this.prev = null;
//     }
// }

// class DoublyLinkedList {
//     constructor() {
//      this.head = null;
//      this.tail = null;
//      this.length = 0;
//     }

//     push(val){
//         let newNode = new Node(val);
//         if(!this.head){
//             this.head = newNode;
//             this.tail = this.head;
//         }
//         else{

//         this.tail.next = newNode;
//         newNode.prev = this.tail;
//         this.tail = newNode;
//         }
        
//         this.length++;
//         return this;
//     }
// }

// const list = new DoublyLinkedList();
// list.push(1);
// list.push(2);
// list.push(3);
// list.push(4);
// list.push(5);



//========================================================= Pop Doubly Linked List ==================================================

/* Approach:-

•	If(there is No Node i.e. this.head = null or this.length===0)
    -return undefined 
    
•	If(There is some number of Nodes i.e head pointing to --> First Node)
    So, tail has been assigning to the lastNode might consisting --> value: 'data', next: null  & prev = node

•	Create a pointer remvNode.
    - Set it to the tail Node.

•   Assign tail Pointer to its tail.prev.

•   Assign tail.next = null;

•	Set remvNode.next & remvNode.prev to null.

•	decrease Length  

•	Return remvNode

Edge Case:
    If(while poping, when length of list becomes === 1)
        - Assign this.head = null;
        - Assign this.tail = null; 

*/

//Code Implementation:-
// class Node {
//     constructor(val) {
//         this.value = val;
//         this.next = null;
//         this.prev = null;
//     }
// }

// class DoublyLinkedList {
//     constructor() {
//      this.head = null;
//      this.tail = null;
//      this.length = 0;
//     }

//     push(val){
//         let newNode = new Node(val);
//         if(!this.head){
//             this.head = newNode;
//             this.tail = this.head;
//         }
//         else{

//         this.tail.next = newNode;
//         newNode.prev = this.tail;
//         this.tail = newNode;
//         }
        
//         this.length++;
//         return this;
//     }

    // pop(){
    //     if(!this.head) return undefined;

    //     let remvNode = this.tail;

    //     if(this.length===1){
    //         this.head = null;
    //         this.tail = null;
    //     }else{
    //         this.tail = this.tail.prev;
    //         this.tail.next = null;
    //         remvNode.prev = null;
    //         remvNode.next = null;
    //     }
        

//         this.length--;
//         return remvNode;
//     }
// }

// const list = new DoublyLinkedList();
// list.push(1);
// list.push(2);
// list.push(3);
// list.push(4);
// list.push(5);



//========================================================= Shift Doubly Linked List ==================================================

/* Approach:-

•	If(there is No Node i.e. this.head = null or this.length===0)
    -return undefined 
    
•	If(There is some number of Nodes i.e head pointing to --> First Node)
    So, tail has been assigning to the lastNode might consisting --> value: 'data', next: null  & prev = node

•	Create a pointer remvNode.
    - Set it to the head Node.

•   Edge Case:
    If(while poping, when length of list becomes === 1)
        - Assign this.head = null;
        - Assign this.tail = null;

•   Assign head Pointer to its head.next.

•   Assign tail.prev = null;

•	Set remvNode.next & remvNode.prev to null.

•	decrease Length  

•	Return remvNode 

*/

//Code Implementation:-
// class Node {
//     constructor(val) {
//         this.value = val;
//         this.next = null;
//         this.prev = null;
//     }
// }

// class DoublyLinkedList {
//     constructor() {
//      this.head = null;
//      this.tail = null;
//      this.length = 0;
//     }

//     push(val){
//         let newNode = new Node(val);
//         if(!this.head){
//             this.head = newNode;
//             this.tail = this.head;
//         }
//         else{
//         this.tail.next = newNode;
//         newNode.prev = this.tail;
//         this.tail = newNode;
//         }
        
//         this.length++;
//         return this;
//     }

    // shift(){
    //     if(!this.head) return undefined;

    //     let remvNode = this.head;

    //     if(this.length===1){
    //         this.head = null;
    //         this.tail = null;
    //     }else{
    //         this.head = this.head.next;
    //         this.head.prev = null;
    //         remvNode.prev = null;
    //         remvNode.next = null;
    //     }
        

//         this.length--;
//         return remvNode;
//     }
// }

// const list = new DoublyLinkedList();
// list.push(1);
// list.push(2);
// list.push(3);
// list.push(4);
// list.push(5);




//========================================================= Unshift Doubly Linked List ==================================================

/* Approach:-
-- Create a newNode with some value.

•	If(there is No Node i.e. this.head = null or this.length===0)
    -Assign this.head & this.tail pointer to newNode
    
•	If(There is some number of Nodes i.e head pointing to --> First Node)
    So, tail has been assigning to the lastNode might consisting --> value: 'data', next: null  & prev = node


•   Assign headNode.prev to newNode.

•   Assign newNode.next to headNode;

•	Set head Pointer to newNode

•	Increase Length  

•	Return this.head; 

*/

//Code Implementation:-
// class Node {
//     constructor(val) {
//         this.value = val;
//         this.next = null;
//         this.prev = null;
//     }
// }

// class DoublyLinkedList {
//     constructor() {
//      this.head = null;
//      this.tail = null;
//      this.length = 0;
//     }

//     push(val){
//         let newNode = new Node(val);
//         if(!this.head){
//             this.head = newNode;
//             this.tail = this.head;
//         }
//         else{
//         this.tail.next = newNode;
//         newNode.prev = this.tail;
//         this.tail = newNode;
//         }
        
//         this.length++;
//         return this;
//     }

    // unshift(val){
    //     let newNode = new Node(val);
        
    //     if(!this.head){
    //         this.head = newNode;
    //         this.tail = newNode;
    //     }else{
    //         this.head.prev = newNode;
    //         newNode.next = this.head;
    //         this.head = newNode;
    //     }
        
    //     this.length++;
    //     return this.head;            
    // }
// }

// const list = new DoublyLinkedList();
// list.push(1);
// list.push(2);
// list.push(3);
// list.push(4);
// list.push(5);


//========================================================= Get Doubly Linked List ==================================================

/* Approach:-
-- Get method accept, an Index(index);

•	If(index <0 || index>= list's length) return null;

•   Initialize a counter with 0 & Define a pointer current;

•	If(index <= listLenght/2)
    - Assign Current = this.head.next;
    - Traverse list from Start to end, till current !== index;
    - counter++;

•	If(index > listLenght/2)
    - Assign Current = this.tail.prev;
    - counter = this.length-1;
    - Traverse list from end to Start, till current !== index;
    - counter--;

•	Return current; 

*/

//Code Implementation:-
// class Node {
//     constructor(val) {
//         this.value = val;
//         this.next = null;
//         this.prev = null;
//     }
// }

// class DoublyLinkedList {
//     constructor() {
//      this.head = null;
//      this.tail = null;
//      this.length = 0;
//     }

//     push(val){
//         let newNode = new Node(val);
//         if(!this.head){
//             this.head = newNode;
//             this.tail = this.head;
//         }
//         else{
//         this.tail.next = newNode;
//         newNode.prev = this.tail;
//         this.tail = newNode;
//         }
        
//         this.length++;
//         return this;
//     }

//     get(index){
//         if(index<0 || index>=this.length) return null;

//         let counter =0, current;
//         if(index <= this.length/2){
//             current = this.head;

//             while(counter!==index){
//                 current = current.next;
//                 counter++;
//             }
//         }
//         if(index > this.length/2){
//             current = this.tail;
//             counter = this.length-1;

//             while(counter!==index){
//                 current = current.prev;
//                 counter--;
//             }
//         }
//         return current;
//     }
// }

// const list = new DoublyLinkedList();
// list.push(1);
// list.push(2);
// list.push(3);
// list.push(4);
// list.push(5);




//========================================================= Set Doubly Linked List ==================================================

/* Approach:-
-- Set method accept, an Index & Value (index, val);

•   Create a foundNode and Assign the return Node using get method at given index;

•	If(Node Found)
    - Change the value of the foundNode.
    - return true;
    else
        - return false;

*/

//Code Implementation:-
// class Node {
//     constructor(val) {
//         this.value = val;
//         this.next = null;
//         this.prev = null;
//     }
// }

// class DoublyLinkedList {
//     constructor() {
//      this.head = null;
//      this.tail = null;
//      this.length = 0;
//     }

//     push(val){
//         let newNode = new Node(val);
//         if(!this.head){
//             this.head = newNode;
//             this.tail = this.head;
//         }
//         else{
//         this.tail.next = newNode;
//         newNode.prev = this.tail;
//         this.tail = newNode;
//         }
        
//         this.length++;
//         return this;
//     }

//     get(index){
//         if(index<0 || index>=this.length) return null;

//         let counter =0, current;
//         if(index <= this.length/2){
//             current = this.head;

//             while(counter!==index){
//                 current = current.next;
//                 counter++;
//             }
//         }
//         if(index > this.length/2){
//             current = this.tail;
//             counter = this.length-1;

//             while(counter!==index){
//                 current = current.prev;
//                 counter--;
//             }
//         }
//         return current;
//     }

//     set(index, val){
//         let foundNode = this.get(index);

//         if(foundNode){
//             foundNode.value = val;
//             return true;    
//         }
//         else
//             return false;
//     }
// }

// const list = new DoublyLinkedList();
// list.push(1);
// list.push(2);
// list.push(3);
// list.push(4);
// list.push(5);




//========================================================= Insert Doubly Linked List ==================================================

/* Approach:-
-- Insert method accept, an Index & Value (index, val) to Insert a newNode with some value at any position;

•   If(index === 0) return unshift(val);

•   If(index === this.length) return push(val);

•   Create a newNode;

•   If(!this.head);
    - Assign head & tail pointer to newNode

•   Otherwise:
    - Assign the found node at index-1 position to beforeNode using get();
    - Assign the beforeNode.next to afterNode
    - Assign the beforeNode.next to newNode
    - Assign the afterNode.prev to newNode
    - Assign the newNode.prev to beforeNode
    - Assign the newNode.next to afterNode

•	Increase length++;

•	return newNode;

*/

//Code Implementation:-
// class Node {
//     constructor(val) {
//         this.value = val;
//         this.next = null;
//         this.prev = null;
//     }
// }

// class DoublyLinkedList {
//     constructor() {
//      this.head = null;
//      this.tail = null;
//      this.length = 0;
//     }

//     push(val){
//         let newNode = new Node(val);
//         if(!this.head){
//             this.head = newNode;
//             this.tail = this.head;
//         }
//         else{
//         this.tail.next = newNode;
//         newNode.prev = this.tail;
//         this.tail = newNode;
//         }
        
//         this.length++;
//         return this;
//     }

//     unshift(val){
//         let newNode = new Node(val);
        
//         if(!this.head){
//             this.head = newNode;
//             this.tail = newNode;
//         }else{
//             this.head.prev = newNode;
//             newNode.next = this.head;
//             this.head = newNode;
//         }
        
//         this.length++;
//         return this.head;            
//     }
    
//     get(index){
//         if(index<0 || index>=this.length) return null;

//         let counter =0, current;
//         if(index <= this.length/2){
//             current = this.head;

//             while(counter!==index){
//                 current = current.next;
//                 counter++;
//             }
//         }
//         if(index > this.length/2){
//             current = this.tail;
//             counter = this.length-1;

//             while(counter!==index){
//                 current = current.prev;
//                 counter--;
//             }
//         }
//         return current;
//     }

//     insert(index, val){

//         //Note: !! always gives true, if the function return something. Otherwise gives false. 
//         if(index === 0) return !!this.unshift(val);
//         if(index === this.length) return !!this.push(val);

//         let newNode = new Node(val);
//         if(!this.head){
//             this.head = newNode;
//             this.tail = newNode;
//         }else{
//             let beforeNode = this.get(index-1);
//                 if(beforeNode){
//                 let afterNode = beforeNode.next;
//                 beforeNode.next = newNode;
//                 afterNode.prev = newNode;
//                 newNode.prev = beforeNode;
//                 newNode.next = afterNode;
//                 }
//                 else
//                     return false;           
//         }

//         this.length++;
//         return !!newNode;
//     }
// }

// const list = new DoublyLinkedList();
// list.push(1);
// list.push(2);
// list.push(3);
// list.push(4);
// list.push(5);





//========================================================= Remove Doubly Linked List ==================================================

/* Approach:-
-- Remove method accept, only Index (index) to remove a Node at any position;

•   If(index === 0) return shift();

•   If(index === this.length-1) return pop();

•   Create a foundNode;

•   If(!this.head);
    - return null;

•   - Assign the found node at index position to removeNode using get();
    - Assign the removeNode.next to afterNode
    - Assign the removeNode.prev to beforeNode
    - Assign the removeNode.next to null
    - Assign the removeNode.prev to null
    - Assign the beforeNode.next to afterNode
    - Assign the afterNode.prev to beforeNode
    - Assign the newNode.next to afterNode

•	If(this.length ===1);
    - this.head = null;
    - this.tail = null;

•	Decrease length--;

•	return removeNode;

*/

//Code Implementation:-
// class Node {
//     constructor(val) {
//         this.value = val;
//         this.next = null;
//         this.prev = null;
//     }
// }

// class DoublyLinkedList {
//     constructor() {
//      this.head = null;
//      this.tail = null;
//      this.length = 0;
//     }

//     push(val){
//         let newNode = new Node(val);
//         if(!this.head){
//             this.head = newNode;
//             this.tail = this.head;
//         }
//         else{
//         this.tail.next = newNode;
//         newNode.prev = this.tail;
//         this.tail = newNode;
//         }
        
//         this.length++;
//         return this;
//     }
    
//     pop(){
//         if(!this.head) return undefined;

//         let remvNode = this.tail;

//         if(this.length===1){
//             this.head = null;
//             this.tail = null;
//         }else{
//             this.tail = this.tail.prev;
//             this.tail.next = null;
//             remvNode.prev = null;
//             remvNode.next = null;
//         }
//         this.length--;
//         return remvNode;
//     }
        
//     shift(){
//         if(!this.head) return undefined;

//         let remvNode = this.head;

//         if(this.length===1){
//             this.head = null;
//             this.tail = null;
//         }else{
//             this.head = this.head.next;
//             this.head.prev = null;
//             remvNode.prev = null;
//             remvNode.next = null;
//         }
//         this.length--;
//         return remvNode;
//     }
    
//     get(index){
//         if(index<0 || index>=this.length) return null;

//         let counter =0, current;
//         if(index <= this.length/2){
//             current = this.head;

//             while(counter!==index){
//                 current = current.next;
//                 counter++;
//             }
//         }
//         if(index > this.length/2){
//             current = this.tail;
//             counter = this.length-1;

//             while(counter!==index){
//                 current = current.prev;
//                 counter--;
//             }
//         }
//         return current;
//     }

//     remove(index){

//         //Note: !! always gives true, if the function return something. Otherwise gives false. 
//         if(index === 0) return !!this.shift();
//         if(index === this.length-1) return !!this.pop();

//         if(!this.head) return null;
        
//             let removeNode = this.get(index);
//                 if(removeNode){
//                     let beforeNode = removeNode.prev,
//                     afterNode = removeNode.next;
//                     removeNode.next = null;
//                     removeNode.prev = null;
//                     beforeNode.next = afterNode;
//                     afterNode.prev = beforeNode;
//                 }
//                 else
//                     return false;
                    


        
//             if(this.length===1){
//                 this.head = null;
//                 this.tail = null;
//             }
        
//         this.length--;
//         return !!removeNode;
//     }
// }

// const list = new DoublyLinkedList();
// list.push(1);
// list.push(2);
// list.push(3);
// list.push(4);
// list.push(5);




//========================================================= Reverse Doubly Linked List ==================================================
/* Information:-
-- Reversing DoublyLinkedList means, list must follow this rule (head.prev == null, head.next == node  && tail.next == null, tail.prev == node) even after reverse.
    - Before Reverse: 
               head                          tail                                                       
      null <-- 0 --> 1 --> 2 --> 3 --> 4 --> 5 --> null                                                             
           prev  <--   <--   <--   <--   <--   nxt  
      arr: [0,1,2,3,4,5]


    - After Reverse:
               tail                          head                                                       
      null <-- 0 <-- 1 <-- 2 <-- 3 <-- 4 <-- 5 --> null                                                             
           next  -->   -->   -->   -->   -->   prev  
      arr: [5,4,3,2,1,0]
*/

/* Approach:-
-- Swap tail pointer with head pointer.
    - So, node pointer would be at tail node pointing same by head pionter after Swapping. 
    - Although node at tail & head pointer still acting like headNode & tailNode respectively.

-- Initialize prevNode with null & counter with 0;

-- Loop through the list from head pointer till counter !== this.length
    - Assign node.next to node.prev;
    - Set node.prev to null (As per the property of head node in Doubly Linked List)
    - Set prevNode to node pointer
    - Set node pointer to node.next
    - Increase counter++;

-- return this (DoublyLinkedList);
    
*/

//Code Implementation:-
class Node {
    constructor(val) {
        this.value = val;
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

    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }
        else{
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        }
        
        this.length++;
        return this;
    }

    reverse(){
        //Swapping
        let node = this.tail;
            this.tail = this.head;
            this.head = node;

        let prevNode = null,
            counter =0;

        while(counter !== this.length){
            node.next = node.prev;
            node.prev = prevNode;
            prevNode = node;
            node = node.next;

            counter++;
        }

        return list;
    }

    print(){
        let arr=[],
            current = this.head;

        while(current){
            arr.push(current.value);
            current = current.next;
        }
       return arr;
    }
}

const list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);





