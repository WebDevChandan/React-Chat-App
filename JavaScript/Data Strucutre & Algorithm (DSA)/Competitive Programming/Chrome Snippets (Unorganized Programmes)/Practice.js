var wordSubsets = function(words1, words2) {
   let hasmap = {},
       arr = [];

    for (let i = 0; i < words2.length; i++) {
        for (let j = 0; j < words2[i].length; j++) {
        if(!hasmap[words2[i][j]])
            hasmap[words2[i][j]] = 1;
        else
            hasmap[words2[i][j]] += 1;            
        }

    
    }

        
        for (let i = 0; i < words1.length; i++) {
            let tempHasMap = {};
                
            for (let j = 0; j < words1[i].length; j++) {
                if(!tempHasMap[words1[i][j]])
                    tempHasMap[words1[i][j]] = 1;
                else
                    tempHasMap[words1[i][j]] +=1;

            }
             let counter = 0;
            for (let k = 0; k < words2.length; k++) {

                for (let z = 0; z < words2[k].length; z++) {
                if(hasmap[words2[k][z]] <= tempHasMap[words2[k][z]])
                    counter++;                    
                else{
                if(counter===words2.length)
                     arr.push(words1[i]);
                    }
                }


                
            }
            
           
        }
    return arr;
};
wordSubsets(["warrior","world"], ["wrr"]);