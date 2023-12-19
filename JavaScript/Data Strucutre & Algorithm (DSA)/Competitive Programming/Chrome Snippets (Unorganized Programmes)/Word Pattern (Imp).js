// Leetcode: #290 (Word Pattern)

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */

/* Given:-
1. I/P: pattern & s => string
2. Find if s follows the same pattern
    If Yes, return true, otherwise false
*/

/* Approach_#1:-
1. Convert string s to an array. sArray = s.split(' ')
2. if(pattern.length !== sArray.length) return false;
2.Create an empty hasMap
3. Start a loop till length of pattern
    if(string of patter never met before in hasMap)
        hasMap[patter[i]] = sArray[i];
    else (If already map)
        Check,
         if value of that same key is different with element of sArrray.
            If( hasMap[patter[i]] !== sArray[i])
                return false;
4. Check, 
    It might be possible that, different key mapped with the same value. 
    (means duplicate value existed in hasMap which is not allowed )
    return false (If duplicate existed)
        Or
    return true (If duplicate doesn't exitsed)
*/



/* Logic:-
    Same key shouldn't map with different value
        Ex: False ==>  {a:dog, a: cat}
            True ==> {a: dog, a: dog}
            
    Different key shouldn't map with same value
        Ex: False ==> {a: dog, b: dog}
            True ==>  {a: dog, b: cat}  
*/
var wordPattern = function(pattern, s) { //"abba", s = "dog cat cat dog"
    const sArray = s.split(' '); //[""dog", "cat", "cat", "dog"]
    let hasMap = {};
    
    //Edge Case
    if(pattern.length !== sArray.length) return false; //4 !== 4
    
    //0<4
    for(let i=0; i<pattern.length; i++){
        if(!hasMap[pattern[i]])
            hasMap[pattern[i]] = sArray[i];
        
        /*
        hasMap{
            a: 'dog',
            b: 'cat',
        }
        */
        else{
            //dog !== fish
            if(hasMap[pattern[i]] !== sArray[i])
                return false;
        }
    }
    
    return Array.from(new Set(Object.values(hasMap))).length === Object.values(hasMap).length;
};