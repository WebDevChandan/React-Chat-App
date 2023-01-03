//Leetcode: Contest #309

//[#2399] (Check Distances Between Same Letters)
/*
    Given:-
1. s => string of only lowercase English letters, where each letter in s appears exactly twice
2. distance  =  integer array of length 26
3. Note:
    Each letter in the alphabet is numbered from 0 to 25
    In a well-spaced string, the number of letters between the two occurrences of the ith letter is distance[i]. If the ith letter does not appear in s, 
    then distance[i] can be ignored.
4. Return true if s is a well-spaced string, otherwise return false.
Constrants:-
    2 <= s.length <= 52
    s consists only of lowercase English letters.
    Each letter appears in s exactly twice.
    distance.length == 26
    0 <= distance[i] <= 50

    Test Cases:-
Input: s = "abaccb", distance = [1,3,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
Output: true
Explanation:
- 'a' appears at indices 0 and 2 so it satisfies distance[0] = 1.
- 'b' appears at indices 1 and 5 so it satisfies distance[1] = 3.
- 'c' appears at indices 3 and 4 so it satisfies distance[2] = 0.
Note that distance[3] = 5, but since 'd' does not appear in s, it can be ignored.
Return true because s is a well-spaced string.

Input: s = "aa", distance = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
Output: false
Explanation:
- 'a' appears at indices 0 and 1 so there are zero letters between them.
Because distance[0] = 1, s is not a well-spaced string.


    Approach_#1 (BruteForce):-
1. Create a hashMap;
2. Store The very first char of 's' in hashMap as key and its charCodeAt-97th index at distance[] as corresponding value;
    hashMap{
        a: 1,
        b: 3,
        c: 0
    }
3. Run a loop over the hashMap
    As we got the first char key. For Instance, 'a':1
    Since, index of 'a' at 's' would return the indexOf first char of a i.e. 0. Store it in 'fstCharIdx'

        Run another loop over 's' string from let i = fstCharIdx+1 till i < s.length
        if(s[i] === key)
            if(hashMap[key] !== i)
                return false;

4. return true;
*/

//CODE IMPLEMENTATION
var checkDistances = function(s, distance) { //"abaccb", [1,3,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    let hashMap= {};

    for (let i = 0; i < s.length; i++) {
        if(!hashMap[s[i]])
            hashMap[s[i]] = distance[s[i].charCodeAt()-97];
    }

    /* 
    hashMap{
        a:1,
        b:3,
        c:0,
    }
    */
    
    //c
    for(let key in hashMap){
        let fstCharIdx = s.indexOf(key),//3
            count = 0; //0

        // 4< 6
        for (let i = fstCharIdx+1; i < s.length; i++) {
           //  c === c 
            if(s[i]===key){
                // 0 !== 0
                if(hashMap[key]!==count)
                    return false;
                else
                    break;
            }
            count++;
        }
    }

    return true;
};

// checkDistances("abaccb", [1,3,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
checkDistances("aa", [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
