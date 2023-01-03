// Love Babbar: #String (Check whether a string is a valid shuffle of two strings or not)

//Ex:- I/P: "XY", "12" & "X1Y2" O/P: valid | I/P: "XY", "12" & "X2Y1", O/P: valid  
/* Approach:-
-- We'll Take 3 Strings and store it, str1, str2 & res
-- Check res is shuffle of str1 & str2 or not.

-- Follow Shuffle Condition
   First Check Sum of length of str1 & str2 must be === lengthof res
   Order must be followed of str1 & str2 in res. 
*/

/* Logic:-
-- Loop through res, str1 & str2 till end.
    Check every char of res matches str1 & str2 without returning Invalid

-- If loop over res. is completed -->  return "Valid" 
*/

/*Pseudo Code:
-- Store length of str1, str2, str1+str2 & res in some Var.
-- IF (str1+str2 !== lengthOf res) return "Invalid" 

-- Loop over Res till end
    IF(Each Char of res matches with either of str1 or str2)
        str1[i]++ or str2[i]++;
        res[i]++;
    ELSE
        return "Invalid";

-- return "Valid"
*/

//CODE IMPLEMENTATION:-
const validShuffleString = (str1, str2, res)=>{
    let ls1 = str1.length,
        ls2 = str2.length,
        lr = res.length;

    if((ls1+ls2)!==lr) return "Invalid";

    let i=0,j=0,k=0;
    while(i<lr){
        if(j<ls1 && res[i]===str1[j]){
            j++;
            i++;
        }else if(k<ls2 && res[i]===str2[k]){
            k++;
            i++;
        }else
            return "Invalid";
    }

    return "Valid";
}
validShuffleString("AAAAABAA", "AAAB", "AAABAAAAABAA");