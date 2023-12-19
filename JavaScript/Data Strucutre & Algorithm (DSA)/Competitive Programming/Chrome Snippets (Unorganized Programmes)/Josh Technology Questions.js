/* Q.1. N people are standing in line from left to right. Each person wants to know how the height of the person to left him having height less than him. 
        If there are multiple such people he wants to know the height of the person closes to him.

    If there is no such person report -1;

    Return 'No person found' if no peson is present in line.

Your Task: 
    The tak is to complete getHeight() function and print the output, which has the argument heights i.e. array of Integers denoting the heights of the
    person.
    Output should contain N space separate integers, the ith integer should be the height reported to ith person (-1 if no person to the left is found
    whose height is less)

Expected T.C:
    O(N^2)

Test CAses:
    Input: [1, 2, 3, 4, 5]     | Output: -1 1 2 3 4 
    Input: [1, 1]              | Output: -1 -1
    Input: [2, 6, 4, 7, 3]     | Output: -1 1 1 3 1
*/ 

/* Given:-
1. N people stading from left to right
2. Each person wants to know how the height of the person left to him having 'height less than him'. (Means left person should be smaller in height)
3. If there is no such person return -1. (Means if left person Greater in height, return -1);
4. I/P: heights => An Array of Integers
5. O/P: Integers having space between them.
*/


/* Bruteforce Approach:-
1. Declare an empty result array;

2. Edge CAse: Alwasy push -1 for the elment at 0th Idx number. So, just push -1 at the beiggning.

3. Run a loop starting from j = heights.length-1 till j >0
    Create a pointer, i = j-1, and declare a counter with 0 initiallization;
    Run an inner loop, while(i>=0);
        Check, IF(j>i)
            Increament the counter++;

    if(counter!==0)
        arr.push(counter)
    else
        arr.push(-1);

4. return the arr;

5. For Ex:-
    i                                
    1 2 3 4 5
            j

*/
function getHeight(heights){ //[1, 2, 3, 4, 5]
    let arr = []; //5,3,2,1,-1

    //1>0
    for (let j = heights.length-1; j > 0; j--) {
        let i = j-1, //0
        counter = 0; //1
        
        //-1>=0
        while(i>=0){ 
            //2>1
            if(heights[j] > heights[i]){
                counter++;
                i--;
            }
            else
                i--;
        }

        if(counter!==0)
            arr.push(counter);
        else
            arr.push(-1);
    }

    arr.push(-1);

     console.log(arr.reverse().join(' '));
}

getHeight([1, 2, 3, 4, 5]);