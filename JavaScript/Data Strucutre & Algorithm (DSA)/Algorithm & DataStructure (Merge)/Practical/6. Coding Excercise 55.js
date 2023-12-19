/*
    Radix Sort
    
    Given:-
    Finally, you're ready to implement Radix Sort! Write a function called radixSort  which accepts an array of 
    numbers and sorts them in ascending order.
    
    You'll need to make use of the helper functions from the previous exercises here. Good luck!
 
    Examples:-
    
    radixSort([8, 6, 1, 12]); // [1, 6, 8, 12]
    radixSort([10, 100, 1, 1000, 10000000]); // [1, 10, 100, 1000, 10000000]
    radixSort([902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593]); 
    // [4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637]
     
*/ 

//CODE IMPLEMENTATION:-
function getDigit(num, i) {
    return Math.floor(Math.abs(num)/Math.pow(10, i))%10;
}
function digitCount(num) {
    if(num ===0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}
function mostDigitCount(nums){
    let maxDigit = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigit = Math.max(maxDigit, digitCount(nums[i]));
    }
    return maxDigit;
}

function radixSort(nums) {
    let maxDigitCount = mostDigitCount(nums);  // largest number of digits

    for (let k = 0; k < maxDigitCount; k++) {
        //Create 10 Empty Array upto k times.
        let digitBucket = Array.from({length:10}, ()=>[]);
        
        for (let i = 0; i < nums.length; i++) {
            //Getting Digit of Num at Kth position. For Ex: 2 at 0th position of 9852
            let digit = getDigit(nums[i], k);
            digitBucket[digit].push(nums[i]);
        }
        console.log(digitBucket);
        //Get the sorted numbers from the digitBucket for every Iteration.
        nums = [].concat(...digitBucket);
        console.log(nums);
    }

    return nums;
}
