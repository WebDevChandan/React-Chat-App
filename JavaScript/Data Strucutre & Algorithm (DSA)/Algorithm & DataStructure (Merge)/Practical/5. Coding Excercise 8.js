/*
    Given:-
Sliding Window - minSubArrayLen
Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function.
If there isn't one, return 0 instead.

Time Complexity - O(n)
Space Complexity - O(1)


    Test Cases:-
minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0


    Approach_#1:- (BruteForce Approach)
1. let length = arr.length-1;
2. Loop over the arr
    if(arr[i]>=int) return 1;

2. Start a while loop from i=2 to till length-1
    call slidingWindow(arr, int, i);

3. slidingWindow(arr, int, size){

    let sizeVal =0  //5

    for(let j=0; j<arr.length; j++){

        let sizeVal = arr[j] + arr[j+1];

        if(sizeVal>=int) return size;
    }
   }

*/


//Code Implementation:-

function minSubArrayLen (arr, int) {
    let length = arr.length-1;
    
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]>=int) return 1;
    }

    let i=2;
    while ( i > arr.length-1){
        let minLength = slidingWindow(arr, int, i);
        
        if(minLength>=int) return sizeVal;
        
    }

function slidingWindow(arr, int, size){

    let sizeVal =0  //5

    for(let j=0; j<arr.length; j++){
        let sizeVal = arr[j] + arr[j+1];
        if(sizeVal>=int) return sizeVal;
    }
   }

}
minSubArrayLen([2,3,1,2,4,3], 7)
