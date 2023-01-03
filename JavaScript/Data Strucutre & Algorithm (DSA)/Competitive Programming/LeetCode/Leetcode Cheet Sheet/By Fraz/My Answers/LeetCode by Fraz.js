//================= ARRAY (Easy) ===================
// 1. Two Sum

// var twoSum = function(nums, target) {
//     let hasMap = {},
//         result = [];
//     for (let i = 0; i < nums.length; i++) {

//             hasMap[nums[i]] =i;
//     }
//     for(let i =0; i<nums.length; i++){
//         let y = target - nums[i];

//         if(hasMap[y] === 0){
//             result.push(hasMap[y]);
//         hasMap[y] -= hasMap[y];
//         }
//         if(hasMap[y]){
//             result.push(hasMap[y]);
//         hasMap[y] -= hasMap[y];
//         }
//     }

//     return result;
// };

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let tempTrgt = nums[i] + nums[i + 1];

        if (tempTrgt === target)
            return [i, i + 1];
    }
};

twoSum([2, 7, 11, 15], 9);
