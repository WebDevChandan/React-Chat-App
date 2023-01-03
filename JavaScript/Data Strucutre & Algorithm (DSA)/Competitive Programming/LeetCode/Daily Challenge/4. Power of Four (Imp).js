// Leetcode: #342 (Power of Four)

/* Given:-
1. n => an Integer
2. return true if, n is power of 4, otherwise false.
*/

/*Test Cases:-
Input: n = 16       | Output: true
Input: n = 0        | Output: false
Input: n = 4        | Output: true
Input: n = 64       | Output: true
Input: n = 81       | Output: false
Input: n = 1        | Output: true


*/

/* Bruteforce Approach:- O(n)
1. Start a loop upto n
    For every number (upto n) of power of 4, Check if Math.pow(4,i) greater than > n return false. If it equals to n return true. 
*/

var isPowerOfFour = function(n) { //4
    
    //Edge Case
    if(n===0) return false;

    if(n===1) return true;

      // 4<16                           
    for(let i=1; i<=Math.abs(n); i++){
        
        if(Math.pow(4,i)===n) //16===16
            return true;
        
        if(Math.pow(4,i)>n) // 1>16
            return false;

    }
    
};
