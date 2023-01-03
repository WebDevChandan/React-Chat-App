//Leetcode:  #6185 (Maximum Matching of Players With Trainers

/*

//players = [4,7,9], trainers = [8,2,5,8]
    Approach_#1:-(BruteForce)
1. count =0;
2. Start a looper over Players
    Start a nested loop over Trainers
        if(plaers[i]===trainers[j])
            count++;
            trainers.splice(trainers[j]);
            break;
3. return count;
*/


//CODE IMPLEMENTATION:-
var matchPlayersAndTrainers = function(players, trainers) { //players = [1,1,1], trainers = [10]
// debugger;
  let count =0; //1

    //3<3
    for (let i = 0; i < players.length; i++) {
        //0<0
        for(let j =0; j<trainers.length; j++){ //[]

                //1<=10
            if(players[i]<=trainers[j]){
                count++;
                trainers.splice(j, 1);
                break;                
            }
        }
    }

    return count; //2
};
matchPlayersAndTrainers([4,7,9], [8,2,5,8]);

// matchPlayersAndTrainers([1,1,1],[10]);