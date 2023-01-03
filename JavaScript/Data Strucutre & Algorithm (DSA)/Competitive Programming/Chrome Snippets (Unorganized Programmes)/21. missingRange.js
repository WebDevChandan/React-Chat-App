// Leetcode: #163 (Find missing elements of a range)

/* Scenario:-
I/P: [10, 12, 11, 15], low = 10, high = 15  |  [1, 14, 11, 51, 15], low = 50, high = 55
O/P:              13, 14                                  50, 52, 53, 54 55                            
*/

/* Approach:-
-- Loop from low to High Num
-- While Looping, store those number that are not available in the array
-- return those number
*/

/* Logic:-
-- Looping from Number low to High including low & High
-- While Looping
    If( any Number of index === -1 in the array)
        push it into an another array
-- return those number from the array.
*/

/*Pseudo Code:-
-- Initialize an array getNum[];
-- Start looping from Low to High
    IF(arr.indexOf(n)=== -1)
        getNum.push(n);

-- return parseInt(arr.split('').join(' '));
*/

// CODE IMPLEMENTAION:-
const missingRange = (arr, low, high)=>{
    let getNum = [];

    for (let n = low; n <=high; n++) {
        if(arr.indexOf(n)===-1)
            getNum.push(n);
    }

    return getNum;
}
missingRange([1, 14, 11, 51, 15], 50, 55);
