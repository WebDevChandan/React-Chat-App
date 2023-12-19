// Leetcode: #1431 (Kids With the Greatest Number of Candies)
var kidsWithCandies = function(candies, extraCandies) {
    let max=0,
        result=[];

    for (let i = 0; i < candies.length; i++) {
        if(candies[i]>max)
            max = candies[i];
    }

    for (let j = 0; j < candies.length; j++) {
        let GreatestNumber = candies[j] + extraCandies; 
        if(GreatestNumber>=max)
            result.push(true);
        else
            result.push(false);
    }
    
    return result;
    
};


//===========  Another Method
// var kidsWithCandies = function(candies, extraCandies) {
//     let max=0,
//         result=[];

//     for (let i = 0; i < candies.length; i++) {
//         candies[i] > max && (max = candies[i]);

//     }

//     for (let j = 0; j < candies.length; j++) {
//        result.push(candies[j]+extraCandies >=max);
//     }
    
//     return result;
    
// };


kidsWithCandies([2,3,5,1,3], 3);



/*
Logic:-
First we've to find the maximum value from the array of candies, Then
matching the GreatestNumber (candies+extraCandies) of candies with the
maximum value.

If GreatestNumber>= maximumValue, result would be True,
else GreatestNumber< maximumValue, result would be False.



*/