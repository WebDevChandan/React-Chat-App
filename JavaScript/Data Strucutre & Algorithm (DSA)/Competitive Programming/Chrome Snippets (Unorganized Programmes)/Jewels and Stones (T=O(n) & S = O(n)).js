// Leetcode: #771 (Jewels and Stones)

var numJewelsInStones = function(jewels, stones) {
  let hasMap ={},
    count = 0;

    for (let i = 0; i < stones.length; i++) {
        if(!hasMap[stones[i]]){
          hasMap[stones[i]] = 1;
        }else{
          hasMap[stones[i]] += 1;
        }
    }

  for (let j = 0; j < jewels.length; j++) {
      if(hasMap[jewels[j]])
        count += hasMap[jewels[j]];
  }
  return count;
};

numJewelsInStones("z", "ZZ");