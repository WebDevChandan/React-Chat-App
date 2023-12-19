// Leetcode: #205 (Isomorphic Strings)

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/*Given:-
1. s & t => Two Strings
2. Determine if they are isomorphic. Return true if they are Otherwise, return false.
3. Isomorphic Strings: 
    All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same
    character, but a character may map to itself.

Note: 
    Same/Single 'key' shouldn't map with different values
    Different/Multiple 'key' shoudn't map with the same values.
*/


/* Test Cases:-
Input: s = "egg", t = "add"               || Output: true    
Input: s = "bbbaaaba", t = "aaabbbba"     || Output: false    
Input: s = "badc", t = "baba"             || Output: false    
Input: s = "abba", t = "abab"             || Output: false
Input: s = "abcdefghijklmnopqrstuvwxyzva", t = "abcdefghijklmnopqrstuvwxyzck"  || Output: false
*/


/* 1st Approach:-
1. Edge Case:
    if(s.length!==t.length) return false;
    if(s === t) return true;
2. We're going to use One hasMap: hasMap= {};
3. hasMap:
     Store: Strings of 's' as key & Strings of 't' as corresponding value;

4. Start a loop till length of 1st str 's'
    As we got strings of 's'
    Check, 
        If(!hasMap1[s[i]]){
            hasMap1[s[i]] = t[i];
        }
        else (If strings of s already met before in hasMap){
            Check,
                If(value of hasMap for the same key should be same of not.)
                
                Note_#1: Same/Single 'key' shouldn't map with different values
                    If(not)
                        return false;
        }
        
    
5. Note_#2: Different/Multiple 'key' shouldn't map with same values
    So, if values would be same, then Set of values of hasMap.lenght !== array of hasMap.length; //return false Or if equal return true;
    return new Set(Object.values(hasMap)) === Object.values(hasMap).length;
    
    

    "badc"
    "baba"
    hasMap1{
       b:b,
       a:a;
       d:b,
       c:a,
    }
     
   [b,a].length === [b,a,b,a].length //false
         
*/


// Code Implementation: #1st Method (Custom hasMap)
//  var isIsomorphic = function(s, t) { //"egg", "add"
//   let hasMap = {};
//      if(s.length!==t.length) return false;
     

//      if(s===t) return true;
    
//      //0<3      
//      for(let i=0; i<s.length; i++){
         
//         if(!hasMap[s[i]]){
//             hasMap[s[i]] = t[i];
//         }

//         else{
//             if(hasMap[s[i]]!==t[i]) //d !==d
//                 return false;   
//         } 
         
//     }
     
//      return Array.from(new Set(Object.values(hasMap))).length === Object.values(hasMap).length;

// };


// Code Implementation: #2nd Method using Map() Constructor
 var isIsomorphic = function(s, t) { //"egg", "add"
  let map = new Map();
     if(s.length!==t.length) return false;
     

     if(s===t) return true;
    
     //0<3      
     for(let i=0; i<s.length; i++){
         
        if(!map.has(s[i])){
            map.set(s[i],t[i]);
        }

        else{
            if(map.get(s[i])!==t[i]) //d !==d
                return false;   
        } 
         
    }
     
     return new Set([...map.values()]).size === map.size;

};