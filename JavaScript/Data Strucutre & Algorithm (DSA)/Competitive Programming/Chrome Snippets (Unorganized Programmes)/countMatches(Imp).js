//Leetcode: #1773 (Count Items Matching a Rule)

var countMatches = function(items, ruleKey, ruleValue) {
    // debugger
    let hasMap = {},
        arr = ["type", "color", "name"],
        counter = 0;

    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items[i].length; j++) {
            if(!hasMap[arr[j]])
            hasMap[arr[j]] = items[i][j];
            else
                hasMap[arr[j]] = `${hasMap[arr[j]]} ${items[i][j]}`;
        }
    }

        let tempArr = hasMap[ruleKey].split(' ');
    for (let value of tempArr) {
        if(value === ruleValue)
            counter++;
    }
    
    return counter;
};
countMatches([["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]],"type" , "phone");
