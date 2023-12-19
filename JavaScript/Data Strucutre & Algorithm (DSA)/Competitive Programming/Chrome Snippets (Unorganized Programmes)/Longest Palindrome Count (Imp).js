//Leetcode: #409 (Longest Palindrome)

/**
 * @param {string} s
 * @return {number}
 */

/* Given:-
1. I/P: s => string consits of lowercase or uppercase letters
2. O/P: return longest palindrome
*/

/* Test Cases:-
Input: s = "abccccdd"    |   Output: 7
Input: s = "a"           |   Output: 1
Input: s = "qlwekrJ"     |   Output: 1
Input: s = "bb"          |   Output: 2
Input: s = "ccc"         |   Output: 3
Input: s = "ababac"      |   Output: 5
Input: s = "adasdfcacabad"      |   Output: 9
*/

/* #1_ Approach:-
1. Create an empty hasMap={} & declare an 'oddCount' & 'evenCount = 0' variable
2. Start a loop to store frequency of char of 's' in hasMap
3. Start another loop over the hasMap
    if(frequency of each char is is even)
        Add its frequency to 'evenCount'
    else
        oddCount = 1
        
4. return oddCount + evenCount;
*/

var longestPalindrome = function(s) { //adasdfcacabad
    let hasMap = {},
        oddCount=0, //1
        evenCount = 0; //2
    
    for(let i =0; i<s.length; i++){
        if(!hasMap[s[i]])
            hasMap[s[i]] = 1;
        else
            hasMap[s[i]] +=1;
    }
    
    /* 
    hasMap{
        a:5,
        d:3,
        s:1,
        f:1,
        c:2,
        b:1
    }*/
    
    for(let key in hasMap){     
        
        if(hasMap[key]%2===0)
            evenCount +=hasMap[key];
        else{
            oddCount = 1;
                if(hasMap[key]>2)
                    evenCount += hasMap[key]-1;
        }
    }
    
    return oddCount+evenCount; 
};