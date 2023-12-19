// Leetcode: #2363(Merge Similar Items)

/*
Test Cases:-
items1 = [[1,1],[4,5],[3,8]], items2 = [[3,1],[1,5]]
*/

/* Logic:-

hasMap1{
1:1,
3:8,
4:5
}

hasMap2{
1:5,
3:1
}

ret = [[1,6], [3,9], [4,5]]

*/

var mergeSimilarItems = function(items1, items2) {
    let hasMap1 = {},
        hasMap2 = {},
        ret = [];

    for(let i = 0; i<items1.length; i++){
        hasMap1[items1[i][0]] = items1[i][1];
    }

    for(let j = 0; j<items2.length; j++){
        hasMap2[items2[j][0]] = items2[j][1];
    }

    for(let key in hasMap1){
        if(!hasMap2[key])
            ret.push([parseInt(key), hasMap1[key]]);
        else{
            let sum = hasMap1[key] + hasMap2[key];
            ret.push([parseInt(key), sum]);
        }       
    }

    for(let remKey in hasMap2){
        if(!hasMap1[remKey])
            ret.push([parseInt(remKey), hasMap2[remKey]]);
    }

    return ret.sort((a,b)=>a[0]-b[0]);
};

mergeSimilarItems([[2,9],[24,4],[11,1],[16,3],[1,4],[28,3],[23,8],[3,3]], [[7,6],[12,7],[9,5],[22,4],[6,3],[17,1]]);