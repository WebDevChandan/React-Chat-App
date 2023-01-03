// Leetcode: #66(Plus One)
var plusOne = function(digits) {

    for (let i = digits.length-1; i >=0; i--) {
        if(digits[i]<9){
            digits[i]+=1;
            return digits;
        }
        else{
            digits[i] = 0;
        }
    }
    //Edge Case
    digits.unshift(1);
    return digits;
}
plusOne([1,3,9,9]);

/* Approach:
[1,2,3] --> +1 to last Elment = [1,2,4]
[4,3,2,1] --> +1 to last Elment = [4,3,2,2]
[4,3,2,9] --> +1 to last Elment & and Add Carry to the Element from the last = [4,3,3,0]
[9,9,9,9] --> +1 to last Elment = [10000]
*/

/* Logic:-
-- If last Elmt is < 9, Simply Add +1, return arr;
-- If last Elmt is = 9, Simply Assign it with 0;

Edge Case:
What if the last Elmt till to the first Elmt of Array is = 9 ? Ex: [9,9]
--Simply Assign All 9 with 0;
-- When loop end, unshift -->1 and return arr;
*/
