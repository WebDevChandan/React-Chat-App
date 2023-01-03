//⭐ Leetcode: #6188 (Sort the People)

var sortPeople = function(names, heights) {
    let hashMap = {},
        result= [];

    for (let i = 0; i < heights.length; i++) {
        hashMap[heights[i]] = names[i];
    }

    for(let key in hashMap){
        result.push(hashMap[key]);
    }
    return result.reverse();
};
// sortPeople(["Alice","Bob","Bob"], [155,185,150]);
// sortPeople( ["Mary","John","Emma"], [180,165,170]);



//⭐ Leetcode: #6189 (Longest Subarray With Maximum Bitwise AND)

/*
    Given:-
1. nums: An integer Subarray
2. let k be the maximum value of the bitwise AND of any subarray of nums. Then, only subarrays with a bitwise AND equal to k should be considered.
3. Return the length of the longest such subarray.
4. Note: A subarray is a contiguous sequence of elements within an array.


    Logic:-
1. We have to find the length of the subarray of nums which having maximum value of Bitwise AND.
2. Point to be noted that:-
    subarray is the contiguous elements of array nums.
    Maximum value of Bitwise AND of a number will either be with itself or number greater than itself
    For Ex:- 
        3&4: 0
        4&4: 4
        4&5: 4
    Means, Maximum Number value in the array === Maximum value of Bitwise AND operation of those Numbers as compare to other numbers from the 'nums' array.

3. Since, we just need to return the length of subarray consisting elements having max Bitwise AND value in nums array.
    So, In subarray:
        There would be contiguous maximum Number value of 'nums' array.
        Ex: nums: [1,2,3,3,3,4,4,4,3,4] ==> subarray: [4,4,4]

4. And count of contiguous maximum Number value of 'nums' array would be the length of subarray


    Approach_#1:-
1. Set count, max to 0 & Set First element of 'nums' to maxElement
2. Start a loop over nums and store the maximum Element of 'nums' array to 'maxElement' 
3. Again run a loop over the nums array.
    if(the element of nums would === to maxElement)
        Increase its count
    else(If found other element not the maxElement)
        Update the 'max' with count if(it is maximum than value of max otherwise no need to update)
        Again, set count to 0;

3. Update max with count (if needed)
4. return max;
*/

var longestSubarray = function(nums) { //[311155,311155,311155,311155,311155,311155,311155,311155,201191,311155]
    let count=0, //8
        max =0,
        maxElement = nums[0];
    
    for (let i = 0; i < nums.length; i++) {
        maxElement = Math.max(nums[i], maxElement);
    }
    
   for (let i = 0; i < nums.length; i++) {
       if(nums[i] === maxElement){
            count++;
       }else{
           max = Math.max(max, count);
           count =0;
       }
    }

       max = Math.max(max, count);
    

    return max;
};
// longestSubarray([1,2,3,3,2,2]);
// longestSubarray([1,2,3,4]);
// longestSubarray([1,2,3,3,3,4,4,4,3,4]);
// longestSubarray([311155,311155,311155,311155,311155,311155,311155,311155,201191,311155]);
// longestSubarray([395808,395808,395808,395808,395808,395808,395808,395808,395808,395808,395808,395808,395808,395808,395808,395808,395808,395808,395808,395808,395808,395808,395808,395808,395808,395808,395808,395808,395808,395808,395808,395808,395808,395808,395808,395808,395808,395808,395808,395808,395808,395808,395808,395808,395808,470030,470030,470030,470030,470030,470030,470030,470030,470030,470030,470030,470030,470030,470030,470030,470030,470030,470030,470030,470030,470030,470030,470030,470030,153490,330001,330001,330001,330001,330001,330001,330001,37284,470030,470030,470030,470030,470030,470030,156542,226743]);

