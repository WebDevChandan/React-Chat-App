// Leetcode: #152 (Maxium Product SubArray)


//I/P:- arr: [2,3,-2,4], O/P:- 6 (2*3=6)

/* Approach:-
-- Loop through the array.
-- Take the product of element with every next elements in contiguous manner & compare their product.
-- return Max Product
*/

/* Logic:-
-- Take Max Num as Current Num or product of Current & previous
-- Take Min Num as Current Num or product of Current & previous
-- Store Max-Num Seprately & Min Num Seprately
-- Return Max Num

Edge Case:
-- If num is -ve,
    swap (max, min)
     //Because product of a -ve number with Max num will always be smaller than product of -ve numbe with Min Num. 
    //Ex: Max=5*-2 & Min=-5*-2 --> Max= -10 & Min = 10, Max<Min 
    //Ex: Max=6*-2 & Min=5*-2 --> Max= -12 & Min = -10, Max<Min 
*/

/* Pseudo Code:
-- Create a var ans = arr[0]
-- Create a var ma = arr[0]
-- Create a var mi = arr[0]

-- Traverse the array from i = i+1; 
-- Store ma = max(arr[i] or ma * arr[i])
-- Store mi = min(arr[i] or mi * arr[i])

-- If(ans>=ma)
   Assign ans = max;

Edge Case:
-- if arr[i] === -ve
    swap(max, min);

-- Store max = arr[i] or max * arr[i]
-- Store min = arr[i] or min * arr[i]

-- If(ans>=max)
   Assign ans = max;

return ans;
*/


// Code Implementation:
const maxProductSubarray =(arr)=>{
    let ans = arr[0],
        ma = ans,
        mi = ans;

    for (let i = 1; i < arr.length; i++) {
        if(arr[i]<0){
            ma = ma + mi; //9
            mi = ma - mi; //6 
            ma = ma - mi; //3
        }
        ma = Math.max(arr[i], ma*arr[i]);
        mi = Math.min(arr[i], mi*arr[i]);

        if(ans<=ma)
            ans = ma;
    }
    return ans;
}
maxProductSubarray([-2]);