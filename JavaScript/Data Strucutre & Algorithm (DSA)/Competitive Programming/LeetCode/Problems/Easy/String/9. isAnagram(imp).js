//Leetcode: #242 (Valid Anagram)

/* Scenario:-
I/P: "aacc", "ccac"  |  "ab", "a"  |  "a", "ab"  |  "a", "b"  |  "anagram", "nagaram"  |  "rat", "car"
O/P:      false             false         false         false           true                  false                                                        
*/

/* Information:-
-- A valid Anagram is that where,
    Both string should contain same Character with same Frequency
*/

/* Approach:-
-- Here we're going to use hasMap Approach.
    Where, we store the Characters and the Frequency of the 1st string.

-- Then Check the Characters & the Frequency of 2nd String matches or not.

-- If Doesn't matches return false, otherwise true;
*/

/* Logic:-
-- We store the Characters and the Frequency of the 1st string in the hasMap

-- If(Character of 2nd String are present in hasMap along with their Frequency shouldn't === 0)
    - Decrease Frequency of each matched Character by 1
    else
    - return false;

-- Traverse the HaasMap & check IF Frequency of all Character !== 0
    - return false;

-- If all Character with Frequency === 0
    return true;
*/

var isAnagram = function(s, t) {
   let hasMap = {};
    
    for (let i = 0; i < s.length; i++) {
        if(!hasMap[s[i]]){
            hasMap[s[i]] = 1;
        }else
            hasMap[s[i]] += 1;
    }

    for(let j=0; j<t.length; j++){
        if(hasMap.hasOwnProperty(t[j]) && hasMap[t[j]]!==0)
            hasMap[t[j]] -= 1;
        else
            return false;
    }

    for(let k=0; k<s.length; k++){
        if(hasMap[s[k]] !==0)
            return false;
    }
    
    return true;;
};