//Leetcode: #121 (Best Time to Buy and Sell Stock)

/* Given:-
1. prices => an Array
    where, princes[i] is the prices of a given stock.
2. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
2. return the maximum profit. If you cannot achieve any profit, return 0.
*/

/* Test Cases:-
1. Input: prices = [7,1,5,3,6,4]         | Output: 5
2. Input: prices = [7,6,4,3,1]           | Output: 0
3. Input: prices = [12,5,19,8,10,5,7]    | Output: 14
4. Input: prices = [2,4,1]               | Output: 2
4. Input: prices = [3,4,2,1]             | Output: 2
*/

/* Bruteforce Approach:- T.C: O(N^2) & S.C: O(1)
1. Create a max variable,  ,max=0;
2. Loop over the prices array for each price. till < prices.length-1
    create a j pointer ahead of i pointer. j= i+1, till < prices.length
    Loop another array after  the price of first loop.
        let diff = prices[j]-prices[i];
        if(diff>0)
        max = Math.max(max, diff);
        
3. return 0;
*/

// var maxProfit = function(prices) {   //[2,4,1]
//   let max =0;
    
//     for(let i=0; i<prices.length-1; i++){
//         for(let j=i+1; j<prices.length; j++){
//             let diff = prices[j]-prices[i];
            
//             if(diff>0)
//                 max = Math.max(max, diff);
//         }
//     }
    
//     return max;
// };



/* Optimial Approach:- T.C: O(N) & S.C: O(1)
1. Declare a 'min' variable (going to store minimum prices) & Inialize it with the first price like: min = prices[0];

2. Declare a 'maxProfit' varible and intialize it with 0. Because if their is no profit, just return 0 profit.

3. Start traversing the price array. from 1st index till the length of prices array.
    As we moving forward, we're going to update 'min' & 'maxProfit' as per requirement
    
    if(The current prices is minimum than the price store in 'min' variable)
        update 'min' with the current price
    else (As we got bigger price than the 'min' price)
        Get the difference b/w current price & 'min'; & store it to 'diff' variable.
        Update the 'maxProfit' with the current Profit, if the current profit is greater than the previous one. 
        
4. return profit;
*/
var maxProfit = function(prices) { // [2,4,1]
  let min = prices[0], //1
      maxProfit = 0; //2
    
    //3<3
    for(let i=1; i<prices.length; i++){
        if(prices[i]<min) //1<2
            min = prices[i];
        else{
            let diff = prices[i]-min; //4-2==2
            maxProfit = Math.max(diff, maxProfit); //(2, 0)
        }           
    }
    
    return maxProfit; //2
};




