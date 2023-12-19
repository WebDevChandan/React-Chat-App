//Leetcode: #1859 (Sorting the Sentence)

var sortSentence = function(s) {
    let strArr = s.split(' '),
        hasMap ={},
        orgStr=[];
        

    for (let i = 0; i < strArr.length; i++) {
        if(!hasMap[parseInt(strArr[i][strArr[i].length-1])]){
            hasMap[parseInt(strArr[i][strArr[i].length-1])]= strArr[i].slice(0, strArr[i].length-1);
        }
    }
    
    for (let j = 1; j <= strArr.length; j++) {
        orgStr.push(hasMap[j]);
    }
    return orgStr.join(' '); 
};
sortSentence("is2 sentence4 This1 a3");