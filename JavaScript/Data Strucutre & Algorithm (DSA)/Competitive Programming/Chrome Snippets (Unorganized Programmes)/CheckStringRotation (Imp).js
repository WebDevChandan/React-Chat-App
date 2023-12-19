// Love Babbar: #String (Check whether one string is a rotation of another string )

// Ex:- I/P: "ABACD" & "CDABA", O/P: true | I/P: "ABACD" & "CDAAB", O/P: false

/* Approach:-
-- Check the Str-2 is the rotation of Str-1 
-- Traverse to the Str-1 from the Last Char to the First and reach to the Starting 
   Char.
*/

/* Logic:-
-- A string can be rotation of another Str, iff Both have same length;
-- Becuase the Str-2 is the rotation of Str-1, We've to concate Str-1 with Str-1.
-- Then Check Str-2 is the substring of Str-1 or not, If it is return true otherwise 
   false.

Ex: "ABACD" & "CDABA"
"ABACD" + "ABACD"  = "ABACDABACD"
Checking "CDABA" -->     CDABA    --> Found, Return true
*/

/* Pseudo Code:
-- Specific Case:
    If str1.length !== str2.length --> return false;

-- Store concateStr1 = str1.concate(str1)

-- Search is str2 substring of str1 
    If(concateStr1.search(str2)!== -1) retur true;
    else return false;

--
*/

const CheckStringRotation = (str1, str2) =>{
    if(str1.length !== str2.length) return false;

    
    let concateStr1 = str1+str1;
    
    if(concateStr1.search(str2)!== -1) return true;
    else 
        return false;
    
}
CheckStringRotation("AACD","ACDA");
