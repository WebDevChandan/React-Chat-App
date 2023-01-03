/*
    Given:-
Multiple Pointers - isSubsequence
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the 
characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second
string, without their order changing.

Your solution MUST have AT LEAST the following complexities:
Time Complexity - O(N + M)

Space Complexity - O(1)


    Test Cases:-
isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)


    Approach_#1:-[T.C: O(N) & S.C: O(1)]
1. Again we're going to use Two Pointers approach on Both the String;
2. Initialize 'i'=0, 'j'=0; 
3. Edge Case:
    if(str1.length > str2.length) return false;
4. Start a while loop till j<str2.length || i<str1.length
    if(str1[i] === str2[j]){
        i++;
        count++;
        j++;
    }
    j++;
5. if(Check 'i' === str1.length) return true;
6. return false;
*/


//CODE IMPLEMENTATION:-
function isSubsequence(str1, str2) { //'abc', 'abracadabra'
    let i=0, //3
        j=0; //5

    //Edge Case
    //4 > 11
    if(str1.length > str2.length) return false;

    // 5<11 || 3<3
    while(j<str2.length && i<str1.length){ 
        
        //c === c
        if(str1[i] === str2[j]){
            i++;
            j++;
        }
        else
            j++;
    }

    if(i === str1.length) return true;
    
    return false;
}
isSubsequence('abc', 'abracadabra');