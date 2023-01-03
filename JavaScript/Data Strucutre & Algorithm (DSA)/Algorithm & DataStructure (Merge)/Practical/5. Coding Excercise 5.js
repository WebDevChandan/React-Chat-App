/*
    Given:-
Multiple Pointers - averagePair
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where
the average of the pair equals the target average. There may be more than one pair that matches the average target.

Bonus Constraints:
Time: O(N)

Space: O(1)


    Test Cases:-
averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false


    Approach_#1: [T.C: O(N) & S.C:O(1)];
1. Since, the array is already sorted. Hence, here we can use Two Pointers Approach.
2. Initialize 'i'=0 & 'j' = arr.length-1;
3. Start a while loop i<j;
    let currAvg = (arr[i] + arr[j])/2;
    if(currAvg > avg)
        j--;
    else if(currAvg<avg)
        i--;
    else
        true;

4. return false;
*/

//CODE IMPLEMENTATION:-
function averagePair(arr, avg){ //[1,3,3,5,6,7,10,12,19], 8
   let i=0, //0
       j=arr.length-1; //7

    // 0<8
    while(i<j){
        let currAvg = (arr[i] + arr[j])/2; ///(1+12)/2 == 6.5

        //10>8
        if(currAvg > avg)
            j--;
        else if(currAvg<avg)
            i++;
        else
            return true;
    }

return false;
    
}
averagePair([1,3,3,5,6,7,10,12,19], 8); // true