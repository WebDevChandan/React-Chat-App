//Leetcode: #231 (Power of Two)

/* Given:-
1. n=> an Integer
2. return true, if n is power of 2. Otherwise false
*/

/* Test Cases:-
Input: n = 1        | Output: true
Input: n = 16       | Output: true
Input: n = 16       | Output: true
Input: n = 3        | Output: true
Input: n = 1        | Output: true
Input: n = 0        | Output: false
Input: n = -27      | Output: false
Input: n = -8       | Output: false
*/

/* Optimal Approach:- (without using Math.pow() method) Using Interation
1. Edge Case: 
    if(n===0) return false;
2. Start a loop while n is even,So when n/2===1 it will become an odd number
3  if(n/2) ===1 return true
3.  Otherwise return false.
*/


var isPowerOfTwo = function(n) { //16
    if(n===0) return false;
    while(n%2===0){
        n = n/2; //1
    }
    if(n===1) return true;
    
    return false;
};