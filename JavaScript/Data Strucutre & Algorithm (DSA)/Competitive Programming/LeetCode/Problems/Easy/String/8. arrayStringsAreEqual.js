//Leetcode: #1662 (Check If Two String Arrays are Equivalent)
var arrayStringsAreEqual = function(word1, word2) {
    let str1,
        str2;

    for (let j = 0; j < word1.length; j++) {
        
        if(!str1)
            str1 = word1[j];
        else
            str1 +=word1[j];
        
    }

    for (let i = 0; i < word2.length; i++) {
        if(!str2)
            str2 = word2[i];
        else
            str2 +=word2[i];
    }
    if(str1 === str2)
            return true;
    
    return false;
    
};
arrayStringsAreEqual(["a"],["a","b"]);