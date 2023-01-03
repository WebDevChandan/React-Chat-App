//Leetcode: Contest #310

//⭐ #6176 (Most Frequent Even Element)

/* 
    Given:-
1. nums=> An Integer Array
2. return the most Frequent even element
3. If there is a tie, return the smallest one. If there is no such element, return -1.


    Test Cases:-
Input: nums = [0,1,2,2,4,4,1]
Output: 2
Explanation:
The even elements are 0, 2, and 4. Of these, 2 and 4 appear the most.
We return the smallest one, which is 2.

Input: nums = [4,4,4,9,2,4]
Output: 4
Explanation: 4 is the even element appears the most.

Input: nums = [29,47,21,41,13,37,25,7]
Output: -1
Explanation: There is no even element.


    Approach_#1:-
1. Create an empty hashMap and a max variable assign with 0;
2. Stores the even element from 'nums' into hashMap as key along with frequency as values.
    Like this: [0,1,2,2,4,4,1]
        hashMap{
            0: 1,
            2: 2,
            4: 2
        }
3. if length of hashMap is 0. return -1;

4. loop over the hashMap
    store the max value of key into max;

5. again loop over the hashMap
    If any first key's values matches with max
        return key;
*/


//CODE IMPLEMENTATION:-
// var mostFrequentEven = function(nums) { //[0,1,2,2,4,4,1]
//     let hashMap = {},
//         max = 0; //2

//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i]%2 === 0){
//             if(!hashMap[nums[i]])
//                 hashMap[nums[i]] = 1;
//             else
//                 hashMap[nums[i]] +=1;
//         }
//     }

//     if((Object.values(hashMap).length )=== 0) return -1;

//     //0
//     for(let key in hashMap){
//         //2 , 2
//         max = Math.max(hashMap[key], max);
//     }

//     for(let key in hashMap){
//         if(hashMap[key] === max)
//             return parseInt(key);
//     }
// };

// mostFrequentEven([0,1,2,2,4,4,1]);



//⭐ #2407 (Longest Increasing Subsequence II) 
/* 
    Given:-
1. nums => an Integer Array
2. k => an Integer
3. Find the longest subsequence of nums that meets the following requirements:
    The subsequence is strictly increasing and
    The difference between adjacent elements in the subsequence is at most k.
4. Return the length of the longest subsequence that meets the requirements.


    Test Cases:-
Input: nums = [4,2,1,4,3,4,5,8,15], k = 3
Output: 5
Explanation:
The longest subsequence that meets the requirements is [1,3,4,5,8].
The subsequence has a length of 5, so we return 5.
Note that the subsequence [1,3,4,5,8,15] does not meet the requirements because 15 - 8 = 7 is larger than 3.

Input: nums = [7,4,5,1,8,12,4,7], k = 5
Output: 4
Explanation:
The longest subsequence that meets the requirements is [4,5,8,12].
The subsequence has a length of 4, so we return 4.

Input: nums = [1,5], k = 1
Output: 1
Explanation:
The longest subsequence that meets the requirements is [1].
The subsequence has a length of 1, so we return 1.

Input: nums = [1,2,3,4,5,7,4,5,1,8,12,4,7,4,4,4,5,5,5,19,5,4,3,2,1], k = 1
Output: 5

Input: nums = [1,2,3,4,5,7,4,5,1,8,12,4,7,4,4,4,5,5,5,19,5,4,3,2,1], k = 50
Output: 9

Input: nums = [1,1,1,1,1,1], k = 50
Output: 1

Input: nums = [1,1,1,1,1,1], k = 1
Output: 1

Input: nums = [1,2,3,5,2], k = 1
Output: 3

Input: nums = [1,3,3,4], k = 1
Output: 2


    Approach_#1:-
1. Create an empty hashMap.
2. Store index of element of nums as key along with corresponding element as 
    Like: [4,2,1,4,3,4,5,8,15]
        hashMap{
            0: 4,
            1: 2,
            2: 1,
            3: 4,
            4: 3,
            5: 4,
            6: 5,
            7: 8,
            8: 15
        }
3. let hashValues = Object.values(hashMap);   [4,2,1,4,3,4,5,8,15]

4. sort nums array;
    Like this: [4,2,1,4,3,4,5,8,15]
        [1, 2, 3, 4, 4, 4, 5, 8, 15]

4. start a while loop from i=0 < nums.length-1
    let j = i+1;
    if(nums[j] - nums[i] <=k){
        if(hashValues.indexOf(nums[i]) > nums.indexOf(nums[j])){
            hashValues.splice(hashValues.indexOf(nums[i]), 1);
            nums.splice(nums.indexOf(nums[j]), 1);
        }else
            i++;
    }


    Visualization:-
hashValues:  [4, 2, 1, 4, 3, 4, 5, 8, 15]

             j-i<=0 -->i || j-i > k -->j                                                                                                                                                                     
            [4, 5, 8, 12, 4, 7]
                       i  j                                     

*/

//CODE IMPLEMENTATION
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var lengthOfLIS = function(nums, k) { //[4, 5, 8, 12], k = 5
    let i =0;

    //3<3
    while(i < nums.length-1) {
        let j = i+1; //4

        //7-12 <=0
        if(nums[j]-nums[i]<=0){
            if(i!==0){
                //7-8
                if(nums[j]-nums[i-1]<=0)
                    nums.splice(j, 1);
                else
                    nums.splice(i, 1);
            }
            else
              nums.splice(i, 1); 
            
        }       //4-1 >k
        else if(nums[j]- nums[i]>k){
            nums.splice(j, 1);
        }
        else
            i++;
    }

    return nums.length;
};

// lengthOfLIS([4,2,1,4,3,4,5,8,15], 3);
// lengthOfLIS([7,4,5,1,8,12,4,7], 5);
// lengthOfLIS([1,5], 1);
// lengthOfLIS([1,2,3,4,5,7,4,5,1,8,12,4,7,4,4,4,5,5,5,19,5,4,3,2,1], 1);      //5
// lengthOfLIS([1,2,3,5,2], 1);                                               //3
lengthOfLIS([1,3,3,4], 1);                                                   //2
