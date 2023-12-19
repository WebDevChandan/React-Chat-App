// Leetcode: #876 ( Middle of the Linked List)

/* Given:-
1. head => Singly Linked List
2. Return the Middle Node of the LInked LIst.
3. If there are two middle node, return the second node.

  Test CAses:-
Input: head = [1,2,3,4,5]        | Output: [3,4,5]
Input: head = [1,2,3,4,5,6]      | Output: [4,5,6]
Input: head = [1]                | Output: [1]
Input: head = [1,2]              | Output: [2]
Input: head = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]      | Output: [4,5,6]

  1st Approach:-
1. Create a 'current' pointer assign it to the head.

3. Start traversing current pointer throughout the list.

2. If length of the list is Odd:
        Traverse through the list till half the length of the list.
    If length of the list is Even:
        Traverse through the list till half the length of the list + 1;

3. Set head pointer to the place of 'current' pointer
    And change the length of the list to its mid value;

4. return the list.;
*/

//CODE IMPLEMENTATION:-
class Node {
    constructor(value) {
        this.val = value;
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
        // return newNode;
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        
        this.length++;
        return this;
    }

    print(){
        let current = this.head,
            arr = [];
        
        //printing list into an array;
        while(current){
            arr.push(current.val);
            current = current.next;
        }
        return arr;
    }

    findMiddle(){
        let current = this.head,
            counter = 1,
            mid;
        //Edge Case;
        if(this.length<=2) return null;
        
        if(this.length%2!==0)
            mid = Math.ceil(this.length/2);
        else
            mid = (this.length/2)+1;

        while(counter!==mid){
            current = current.next;
            counter++;
        }

        this.head = current;
        this.length = mid;

        return this;
    }
}

const list = new SinglyLinkedList();
//Creating List
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);





//====================================== Leetcode Answers =========================
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/* Given:-
1. head => Singly Linked List
2. Return the Middle Node of the LInked LIst.
3. If there are two middle node, return the second node.
*/

/* Test CAses:-
Input: head = [1,2,3,4,5]        | Output: [3,4,5]
Input: head = [1,2,3,4,5,6]      | Output: [4,5,6]
Input: head = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]     
Output: [11,12,13,14,15,16,17,18,19,20]



/* 1st Approach:-
1. Assign head to 'current' pointer
2. Initialize 'length' to 0, 'counter' to 1 and declare mid
3. run loop while current cross the list to null and increase length while travesing. 
    Now, we got the length of the list
4. If length<2 return head
5. if( length is odd) get its half to the upper value and assign it to mid
    if( length is even) get its half + 1 and assign it to mid
6. Again run loop while counter !== mid length of the list.
    while traversing, move head pointer up to the middle node.
    Increase counter++
7. return head;
*/

//Code Implementation:
// var middleNode = function(head) { //[1,2]
//    let current = head,
//         length = 0, //2
//        counter = 1,
//             mid;
        
//         //null
//         while(current){
//             length++;
//             current = current.next;
//         }
    
//         //Edge Case;
//         if(length<2) return head;
        
//         if(length%2!==0)
//             mid = Math.ceil(length/2);
//         else
//             mid = (length/2)+1;

    
//         while(counter!==mid){
//             head = head.next;
//             counter++;
//         }

//         return head;
// };


/* 2nd Approach:-
1. Since, we need to find the middle of the linked list. Means half;


Logic:
1. Whenever we want to conver half of the list, we can create 3 pointer. fast pointer, VirtualFast pointer & slow pointer.

2. if we move the virtualFast pointer just 1 step ahead from fast pointer just for checking, and move fast pointer 2 steps ahead from slow pointer, & slow
    pointer moves only 1 step noramlly, then we can think till fast pointer reaches the end of the list (which is moving 2x speef of slow pointer), then 
    slow pointer will reach at the middle of the list (because it is moving 1/2 half the speed of fast pointer.

3. Traversing of list is requried, so to trace when fast pointer reach the end of the list, we'll use virtualFast pointer which would be only just1 step 
    ahead/after of of fast pointer. So when fast pointer reaches the end of the list. virtualFast pointer stand just after it, means beyound the link 
    having null node. So we'll stop traversing the list.  

    Virtualization:-
                                                      FN                                                                                                                                                
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20] 
                                                      f                                                                 
                      s                                                                 
*/

//Code Implementation:
// var middleNode = function(head) {
//     let fast = slow = head;
//     while (fast && fast.next) {
//         fast = fast.next.next;
//         slow = slow.next;
//         }
//     return slow;
    
// };