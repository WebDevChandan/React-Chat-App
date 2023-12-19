/*
    Radix Sort Helper - mostDigits
    
    Given:-
    Implement a function called mostDigits  which accepts an array of integers and returns a count of the number 
    of digits for the number in the array with the most digits.

    It may help to use your digitCount  code from the previous exercise in this function.

    Examples:-
    
    mostDigits([1, 9, 10, 100, 99]); // 3
    mostDigits([100, 1010, 1, 500]); // 4
    mostDigits([0, 100000, 400, 12, 8]); // 6
    mostDigits([]); // 0
*/ 

//CODE IMPLEMENTATION:-
function digitCount(num) {
  const numStr = num.toString();
  return parseInt(numStr.length);
}

function mostDigits(nums) {
  let maxCount = 0;
  
  for (let i = 0; i < nums.length; i++) {
      maxCount = Math.max(digitCount(nums[i]), maxCount);
  }

    return maxCount;
}
mostDigits([1, 9, 10, 100, 99]);