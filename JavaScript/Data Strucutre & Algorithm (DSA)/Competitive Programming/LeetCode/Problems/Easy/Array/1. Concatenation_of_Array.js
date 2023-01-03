//LeetCode: #1929
var getConcatenation = function(nums) {
    let ans = [];

    for (let i = 0; i < nums.length; i++) {
        ans.push(nums[i]);
    }

    for (let j = 0; j < nums.length; j++) {
        ans.push(nums[j]);
    }
    return ans;
};
getConcatenation([1,3,2,1]);


// Another Method
// var getConcatenation = function(nums) {
    // let ans = [...nums];

    // for (let i = 0; i < nums.length; i++) {
        // ans.push(nums[i]);
    // }

    // return ans;
// };
// getConcatenation([1,3,2,1]);