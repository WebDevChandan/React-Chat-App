//LeetCode: #2114 ( Maximum Number of Words Found in Sentences)

var mostWordsFound = function(sentences) {
    let maxWord=0;

    for (let i = 0; i < sentences.length; i++) {
            let senLength=sentences[i].split(' ').length;
        if(maxWord<senLength)
            maxWord = senLength;
    }
    return maxWord ;
    
};
mostWordsFound(["please wait", "continue to fight", "continue to win"]);
