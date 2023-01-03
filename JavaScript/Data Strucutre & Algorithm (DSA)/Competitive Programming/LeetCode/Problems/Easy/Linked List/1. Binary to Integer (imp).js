// Leetcode: #1290 (Convert Binary Number in a Linked List to Integer)

var getDecimalValue = function(head) {
  let current = head, 
      total =0;
    
    while(current){
        /*
        total = 0*2 + 1; ==> 1
        total = 1*2 + 0; ==> 2
        total = 2*2 +1; ==> 5
        */
        total = total*2 + current.val;
        current = current.next;
    }
    return total;
};