// Leetcodde: #326 (Power of Three)

//Ex: I/P: 81, O/P: True  | I/P: 99, O/P: False  | I/P: 0, O/P: False

/* Approach:-
-- First Check the Number is Divisible of 3 or Not
-- Divide the Number by 3 till it get 1
-- If we got 1, Number is Power of 3, return True otherwise False.
*/

/* Logic:-
-- Divide Number by 3 till it get to 1
    Ex: 81
    81/3 = 27
    27/3 = 9
    9/3 = 3
    3/3 = 1 return True

-- Edge Case:
    If number is 0, Simply return False because it will always Divisible by 3 but not Power of 3.
*/

/* Pseudo Code:
-- Start looping over the Number if it is Divisible by 3;
-- Divide the Num by 3
-- return True if, num turn to 1, after Divide operation while looping over it, otherwise False.

-- Edge Case:
    If Num ===0, return Fase
*/

//Code Implementation:-
const isPowerOf3 = (n)=>{
    // Edge Case
    if(n ===0) return false;
    
    while(n%3===0){  //81%3 ===0
        n = n/3;  // 81, 27, 9, 3, 1 but 1!=0
    }
    return n ===1;  //if n === 1, return True
}
isPowerOf3(9);


/* BigO:
T.C : O(logn)
S.C : O(1)
*/