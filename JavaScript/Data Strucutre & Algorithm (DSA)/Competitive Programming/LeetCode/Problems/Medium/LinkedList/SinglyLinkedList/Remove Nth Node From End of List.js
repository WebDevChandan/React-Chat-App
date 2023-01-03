// Leetcode: #19 (Remove Nth Node From End of List)

/*
    Given:-
1. head: Head of the linked Given list (As per Leetcode, this is the whole linked list) 
2. n: Nth node
3. Remove the nth node from the end of the list and return its head.


    Test Cases:-
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Explanation:
2nd Node got removed from the last of the linked list

Input: head = [1], n = 1
Output: []

Input: head = [1,2], n = 1
Output: [1]


    Visualization:-
Input:
    Head:
    1 --> 2 --> 3 --> 4 --> 5

n: 2

Oputput:
    Head:
    1 --> 2 --> 3 --> 5


    Logic:-
1. We just need to perform remove operation over the linked list as we got the index
2. n would be nth node from the back of linked list.
3. Since, Linked list would give, 
    So as we traverse over the linked list, we got its length
4. As we got length, 
    let's say 5
    n: 2
    So, Idx = 5-2 => 3
    Means 4th node from the beigning and 2nd node from the last.

    Similarly, 
    let's say length of linked is 5
    n: 4 (menas 4th node from the last === 2nd node from the beigning)
    So, Idx = 5-4 => 1
    Means 2nd node from the beigning and 4th node from the last.    
*/


//⭐CODE IMPLEMENTATION⭐
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value){
        let newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length++;
        
        return this;
    }

    pop(){
        if(!this.head) return null;
        let current = this.head,
            newTail = current;

        while(current.next!==null){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if(this.length===0){
            this.head = null;
            this.tail = null;
        }

        return current;
    }

    shift(){
        if(!this.head) return null;

        let current = this.head;
        this.head = current.next;
        this.length--;

        if(this.length===0){
            this.head = null;
            this.tail = null;
        }

        return current;
    }

    unshift(value){
        let newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            let current = newNode;
            current.next = this.head;
            this.head = current;
        }
        this.length++;
        return this;
    }

    getIdx(n){
       let index = this.length-n;
        return index;
    }

    //Removing nth node from the last;
    removeNode(nth){
        if(nth===0 || nth>this.length) return null;
        
        if(nth === 1) return this.pop();
        
        if(nth === this.length) return this.shift();
        
        const idx = this.getIdx(nth);
        let count = 0,
            current = this.head,
            prevPointer = current;

        //3 !== 3
        while(count !== idx){
            prevPointer = current;
            current = current.next;
            count++;
        }

        prevPointer.next = current.next;
        current.next = null;
        this.length--;

        return current;
    }
}

const singlyLinkedList = new SinglyLinkedList();
// singlyLinkedList.push(1);  
// singlyLinkedList.push(2); 
// singlyLinkedList.push(3);
// singlyLinkedList.push(4);
// singlyLinkedList.push(5);





//⭐My Leetcode Solution⭐
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let length = 0,
        current = head,
        prevPointer = current;
    
    while(current!==null){
        prevPointer = current;
        current = current.next;
        length++;
    }
    
    const idx = length - n;
    let count = 0,
        fstPointer = head,
        secPointer = fstPointer;
    
    if(n === length) return shift(length, head);
    
    while(count!==idx){
        secPointer = fstPointer;
        fstPointer = fstPointer.next;
        count++;
    }
    
    secPointer.next = fstPointer.next;
    fstPointer.next = null;
    length--;
    
    return head; 
    
};

function shift(len, hd){
    if(len===0) return null;
    
    let current = hd;
    hd = current.next;
    current.next = null;
    len--;
    
    return hd;
}












