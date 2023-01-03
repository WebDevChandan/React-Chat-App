//Leetcode: #2390 (Removing Stars From a String)

/* Given:-
1. s => string which contains stars *
2. Return the string by removing teh closes non-start character to its left, as well as remove the start itself.
*/

/* Test Cases:-
Input: s = "leet**cod*e"        |   Output: "lecoe"
Input: s = "erase*****"         |   Output: ""
*/

/* 1st Approach:- Using Stack [T.C: O(n) & S.C: O(n)]
1. Start a loop over the string s
    As we got non-star string push it into the stack
    AS we got star string:
        Don't push that string into the stack. Moreover pop out the last in string from the stack.
        
2. return all the strings from the stack.
*/

//Code Implementation: [T.C: O(n) & S.C: O(n)]
var removeStars = function(s) {
    let stack = [];
    
    for(let i =0; i<s.length; i++){
        if(s[i]!=='*')
            stack.push(s[i]);
        else
            stack.pop();
    }
    return stack.join('');
};