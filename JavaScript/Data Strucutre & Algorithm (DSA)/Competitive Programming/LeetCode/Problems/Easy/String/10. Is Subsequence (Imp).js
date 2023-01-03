//Leetcode: #392 (Is Subsequence)
/* Give:-
1. s & t => Two Strings
2. return true, if s is subsequence of t, or otherwise false.
3. Note: A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
*/

/* Test CAses:-
Input: s = "abc", t = "ahbgdc"      | Output:  true
Input: s = "axc", t = "ahbgdc"      | Output:  true
*/

/* 1st Appraoch:-
1. Going to use two pointer Pattern. Both pointer (i, j) would be at the first char of string.
2. Start a loop, while i<s.length && j<t.length 
    if(s[i] mathches wiht t[j])
        Increase i++;
        Increase j++;
    else (if s[i] doesn't matches with t[j])
        just increase j++;
    
    if(j>=t.length)
        return false;

3. return true;
*/

/* Logic:-
If i traverse 's' completely, means s is substring, because i<s.length becomes false due to which while loop will get terminated. If j traverse completely 't' but i doesn't, then 's' is not substring, becuaes j<t.length becomes false and terminate the while loop, but i still smaller than length of s. So we've to check is i reaches to length of s?, if reaches return true. otherwise just return false.
*/

var isSubsequence = function(s, t) { //Input: s = "axc", t = "ahbgdc" 
    let i =0,
        j =0;
    
    //3<3 && 6<6
    while(i<s.length && j<t.length){
        if(s[i] === t[j]){ //c===c
            i++;
            j++
        }else
            j++;
        
    }
    
    if(i===s.length) return true;
        
    return false;
    
};