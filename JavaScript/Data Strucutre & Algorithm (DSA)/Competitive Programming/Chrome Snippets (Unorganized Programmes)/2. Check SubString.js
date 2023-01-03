//Maventic Exam: Check string str1 is a substring of string str2. If occurence is more than once, then return number of occurences;

/* Given:-
1. str2: Given string
2. str1: substring of str2
3. O/P: return Boolean or Number
        If(only one existed) return true;
            if(more than one existed ) return number of occurence;
        else (not existed) return false;
*/

/* Test Cases:-
Input:- str2:'chandan', str1:'ch'     | Output:- true
Input:- str2:'chandan', str1:'han'    | Output:- true
Input:- str2:'chandan', str1:'had'    | Output:- false
Input:- str2:'chandan', str1:'anh'    | Output:- false
Input:- str2:'chandan', str1:'an'     | Output:- 2

*/

/* Approach_#1:- (Two Pointer Approach) [T.C: O(n) & O.C: O(n)]
1. Initialize 'i' & 'j' variable with 0;
2. Start a loop, j<str2.length

    if(i === str1.length-1) i=0;

    if(str2[j]===str1[i])
        i++;
        j++;
    else
        j++;
        i=0;
3. if(i !== str1.length-1) return false;

4. return true;
*/


//CODE IMPLEMENTATION:-
function checkSubstring(str2, str1) { //str2:'chandan', str1:'an'
    let i=0, //2
        j=0, 
        count=0; //1

    //7<7
    while(j<str2.length){
        // n===n
        if(str2[j]===str1[i]){
            i++;
            j++;
        }else{
            j++;
            i=0;
        }

        //2===2
        if(i===str1.length){
          count++;
            i=0;  
        } 
    }

    if(count===1) return true;

    if(count===0) return false;

    if(count>1) return count;
}