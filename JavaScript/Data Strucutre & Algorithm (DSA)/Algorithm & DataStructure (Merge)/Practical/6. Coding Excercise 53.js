/*
    Radix Sort Helper - digitCount
    
    Given:-
    Implement a function called digitCount  which accepts a positive integer and returns the number of digits that
    the integer has.

    Examples:-
    
    digitCount(1); // 1
    digitCount(9); // 1
    digitCount(25); // 2
    digitCount(314); // 3
    digitCount(1234); // 4
    digitCount(77777); // 5
     
*/ 

//CODE IMPLEMENTATION:-
function digitCount(num) {
  const numStr = num.toString();
  return parseInt(numStr.length);
}
