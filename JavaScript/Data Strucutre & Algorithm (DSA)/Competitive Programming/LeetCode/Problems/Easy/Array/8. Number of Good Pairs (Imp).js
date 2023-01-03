// Leetcode: #1512 (Number of Good Pairs)

//---- Naive Solution: Time: O(n^2) & Space: O(1)
// var numIdenticalPairs = function(nums) {
//     let goodPairs = 0;
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i+1; j < nums.length; j++) {
//             if(nums[i]===nums[j])
//                 goodPairs++;
//         }
//     }
//     return goodPairs;
// };

// numIdenticalPairs([1,2,3,1,1,3]);


//--Optimized Solution Time: O(n) & Space: O(n)
var numIdenticalPairs = function(nums) {
    
    let goodPairs = 0,
        hasMap = {};
    for (let i = 0; i < nums.length; i++) {

        if(!hasMap[nums[i]])
            hasMap[nums[i]] = 1;
        else{
            goodPairs += hasMap[nums[i]];
            hasMap[nums[i]] += 1;
            }
    }
    
    return goodPairs;
};

numIdenticalPairs([1,2,3]);


/*Note:-
If we want to form Pairs of (r) Integer like (int1,int2, int3,....intr) of any
Given number (n), then Total Number of Pairs would be:
                                        n^Cr = n!/n!(n-r)!

So, here, we've to form Pairs of 2 Integer (int1, int2) of Given Number (n),
then total Number of Pairs would be:
                                    n^C2 = n!/n!(n-2)!
*/