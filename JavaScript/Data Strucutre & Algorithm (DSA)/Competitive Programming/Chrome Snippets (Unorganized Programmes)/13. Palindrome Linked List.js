// Leetcode: #234 (Palindrome Linked List)

/* Given:-
1. There is a Singly Linked List and its head is given.
2. return true if the list is true otherwise, return false.
*/

/* Test Cases: 
Input: head = [1,2,2,1]   | Output: true
Input: head = [1,2]       | Output: false
*/

/* 1st Approach:-
1. Traverse through the list. and store each node inside an empty array.
2. Check the elements inside an array is Palindrome or not.
3. T.C: O(n)  & S.C: O(n)
*/

//CODE IMPLEMENTAIOTN:-
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

    isPalindrome(){
        let current = this.head,
            arr = [];
        
        //printing list into an array;
        while(current){
            arr.push(current.val);
            current = current.next;
        }

        //Palindrome Checker
        let i = 0,
            j = arr.length-1;
        
        while(i<j){
            
            if(arr[i]!== arr[j]) return false;
    
            if(arr[i]=== arr[j]){
                i++;
                j--;
            }
                
        }
        return true;
    }
}

const list = new SinglyLinkedList();
//Creating List
list.push('r');
list.push('a');
list.push('c');
list.push('e');
list.push('c');
list.push('a');
list.push('r');

//Checking list is Palindrome or not? 
list.isPalindrome();
