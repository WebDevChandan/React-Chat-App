// [Incomplete] Leetcode: #1684 (Count the Number of Consistent Strings)

var countConsistentStrings = function(allowed, words) {

    let setArr = [],
        hashMap = {},
        counter=0;

    for (let i = 0; i < words.length; i++) {
        let set = new Set(words[i]);
          setArr.push(Array.from(set).join(''));
    }

    for (let i = 0; i < allowed.length; i++) {
        if(!hashMap[allowed[i]])
            hashMap[allowed[i]]=1;
    }

    for (let i = 0; i < setArr.length; i++) {
        for (let j = 0; j < setArr[i].length; j++) {
            if(!hashMap[setArr[i][j]])
                continue;
            else if(hashMap[setArr[i][setArr[i].length-1]])
                counter++;
                
        }

    }
        //     if(counter%2!==0)
        //     counter +=1;
        // else
        //     counter = counter/2;
    return counter;
};
countConsistentStrings("abc", ["a","b","c","ab","ac","bc","abc"]);