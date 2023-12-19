// Leetcode: #438 (Find All Anagrams in a String)

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

/* Given:-
1. I/P: s & p => Two Strings of lowercase Englisht letters only.
2. O/P: an array => consisting of all the start indices of p's anagrams in s.
        You may return the answer in any order.
3. Note: An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/

/* Test Cases:-
Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".

Input: s = "abab", p = "ab"
Output: [0,1,2]
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".

Input: s = "cbaebabacd", p = "abcc"
Output: []

Input: s = "cbaebabaccd", p = "abcc"
Output: [6]
*/

/* Visualization: s = "cbaebabacd", p = "abc"

    //From first loop till first 3 char of p & s 
    i                                        
    a b c
        j
        
    pHasMap{
        a:1,
        b:1,
        c:1
    }
    
    i                                        
    c b a e b a b a c d
        j            
    sHapMap{
        c:1,
        b:1,
        a:1
    }
        
        
      i                                       
    c b a e b a b a c d
          j 
        
        sHapMap{
            c:0,
            b:1,
            a:1,
            e:1
        }
*/

/* Approach_#1:- (BruteForce) [T.C: O(nlogn) & S.C: O(n)]
1. Create an empty 'result' array, sHasMap={}, pHashMap = {}, i=0, j=0;
2. Store all char with respective frequrency of 'p' & 's' string in pHasMap & sHashMap respecitvely;


3. Start a while loop, till j<p.length
    Store all char with respective frequrency of first p's length of 'p' & 's' string in pHashMap & sHasMap respectively;
    j++;
    
4. Start a while loop, till j<s.length
    Create a counter =0;
    
        Check, pHashMap === sHashMap
            For every equal char & their frequency in both hasMap
            Increase 'counter' with += sHashMap[key] ;

        if(counter === p.length) result.push(i);
        
        Update 'j',
            j=j+1;
            if(s.indexOf(j)!==-1)
            if never meet, Add char at j with default frequncy to sHashMap i.e. 1, 
            Otherwise, add char at j with +1;
            
        Reduce char at 'i' from sHashMap by 1;
        
        Update 'i',
            i= i+1;
            
5. return result;
*/



var findAnagrams = function(s, p) { //s = "c b a e b a b a c c d", p = "abcc"
    let result = [], //
        sHashMap = {},
        pHashMap = {},
        i=0, //0
        j=0; //0
    
    //4<4
    while(j<p.length){
        if(!pHashMap[p[j]])
            pHashMap[p[j]] =1;
        else
            pHashMap[p[j]] +=1;
        
        /* pHashMap{
            a:1,
            b:1,
            c:2
        }
        */
        
        if(!sHashMap[s[j]])
            sHashMap[s[j]] =1;
        else
            sHashMap[s[j]] +=1; 
        
        /* sHashMap{
            c:1,
            b:1,
            a:1,
            e:1
        }
        */
        
        j++;
    }
    
    j--;
    
    //9 < 11                              i     j
    while(j<s.length){ //s = "c b a e b a b a c c d", p = "abcc"
        let counter=0; //4
        
        
        for(let key in pHashMap){
            if(pHashMap[key]===sHashMap[key])
                counter+=sHashMap[key];
        }
        
        if(counter===p.length) result.push(i); //[6]
        
        j= j+1; //9
        if(s.indexOf(s[j])!==-1){
            if(!sHashMap[s[j]])
                sHashMap[s[j]] =1;
            else
                sHashMap[s[j]] +=1;
            
        /* sHashMap{
                c:2,
                b:1,
                a:1,
                e:0
            }
        */            
        }
        
        sHashMap[s[i]] -=1; 
        
        i=i+1; //6
    }  

    
    return result;
};