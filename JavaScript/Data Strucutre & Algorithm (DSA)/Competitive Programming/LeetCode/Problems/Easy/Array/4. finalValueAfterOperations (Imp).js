//LeetCode: #2011 ( Final Value of Variable After Performing Operations)
/*
Perform the following Operations:
++X and X++ increments the value of the variable X by 1.
--X and X-- decrements the value of the variable X by 1.
*/


var finalValueAfterOperations = function(operations) {
    let X =0;
    for (let i = 0; i < operations.length; i++) {
        if(operations[i]==="X++" || operations[i]==="++X"){
           X =  ++X; 
        }
        else
        X =  --X; 
    }
    return X;
};
finalValueAfterOperations(["X++","++X","--X","X--"]);