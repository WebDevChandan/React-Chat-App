 //------------------    ProblemSolvingPattern      ----------------------

/*                                                           FREQUENCY COUNTER 
                                                            ==================                                 */
/*Q:- Write a function called same, which accepts two arrays. The function should return true if every value
 in the array has it's corresponding value squared in the second array. The frequency of values must be the same.*/

// //Answers:                                        #Naive Solution
// function same(arr1, arr2){

    // if(arr1.length !== arr2.length){
        // return false;
    // }
    // for(let i = 0; i < arr1.length; i++){
        // let correctIndex = arr2.indexOf(arr1[i] ** 2)
        // if(correctIndex === -1) {
            // return false;
        // }
        // arr2.splice(correctIndex,1);
    // }
    // return true
// }
// same([1,2,3], [4,1,9]);


//                                                 #Refactored
// function same(arr1, arr2){
    // if(arr1.length !== arr2.length){
        // return false;
    // }
    // let frequencyCounter1 = {}
    // let frequencyCounter2 = {}
    // for(let val of arr1){
        // frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    // }
    // for(let val of arr2){
        // frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    // }
    // for(let key in frequencyCounter1){
        // if(!(key ** 2 in frequencyCounter2)){
            // return false
        // }
        // if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            // return false
        // }
    // }
    // return true
// }
// same([1,2,3], [4,1,9]);

 //Frequency Pattern: validAnagram__________
 /*Q.Given two strings, write a function to determine if the second string is an anagram of the first.
 An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed 
 from iceman */
// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true
 // function validAnagram(str1, str2){
            // let fstObjt = {};                                   //O(1)
            // let secObjt = {};                                   //O(1)

            // for(let arr1 of str1){                              //O(n)
                // arr1 = arr1.toLowerCase();
                // fstObjt[arr1] = (fstObjt[arr1] || 0) +1;            
            // }
            
            // for(let arr2 of str2){                              //O(n)
                // arr2 = arr2.toLowerCase();
                // secObjt[arr2] = (secObjt[arr2] || 0) +1;
            // }
    
            // for(let key in fstObjt){                               //O(n)
                   // if(!(key in secObjt)){
                       // return false;
                   // }
                   // if(fstObjt[key] !== secObjt[key]){
                       // return false;
                   // }
            // }

            // return true;                                        //O(1)
    // }

// validAnagram('chandan', 'Ncandah');


/*                                                           Multiple Pointers
                                                            ==================                                 */
/*Q:1. Write a function called sumZero which accepts a sorted array of integers. The function should find the first
 pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does 
 not exist.*/
/*Test Cases: 
sumZero([-3,-2,-1,0,1,2,3]) // [-3,3] 
sumZero() // undefined
sumZero([1,2,3]) // undefined   */
  
//  //                                              #Naive Solution 
// function sumZero(arr){
  // for(let i=0; i<arr.length; i++){                    //O(n)
    // for(let j=i+1; j<arr.length; j++){                //O(n)
        // let sum = arr[i] +arr[j];
      // if(sum === 0){
        // return [arr[i], arr[j]];
      // }
    // }
  // }
// }

// sumZero([-1,0,1,2,3]);                              //O(n^2)

                                              // #REFACTORED
// function sumZero(arr){
  // let left = 0;
  // let right = arr.length-1;
  // while(left < right){                                   //O(n)                        
    // sum = arr[left] + arr[right];
    // if(sum === 0){
      // return [arr[left], arr[right]];
    // }else if(sum>0){
        // right--;
    // }else{
      // left++;
    // }
  // }
// }

// sumZero([-3,-2,-1,0,1]);                                   //O(n)


//Multiple Pointers Pattern: CountUniqueValues_______
/*Q:2. Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values
 in the array. There can be negative numbers in the array, but it will always be sorted.
 */

/*Test Cases: 
countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4

 Approach:
                      i                 
[1,2,3,4,4,4,7,7,12,12,13]    1+1+1+1+1+1
                       j

/*                                                           #Actual SOLUTION                                 */
// function countUniqueValues(arr){
  // let count = 0                                           //O(1)

  // for(let i=0;i<arr.length;i++){                          //O(n)
    // let down = arr[i+1];
    // let up = arr[i];

    // if(up!==down){
      // count+=1;
      
    // }else{
      // down++;
    // }
  // }
// return count;
// }
// countUniqueValues([1,1,1,1,1,1,1,1,1,11]);                       //O(n)



/*                                                     SLIDING WINDOW PATTERN
                                                       ======================                                 */
/*Q:1. Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function
should calculate the maximum sum of n consecutive elements in the array.*/

/*Test Cases: 
maxSubarraySum([1,2,5,2,8,1,5],2) // 10
maxSubarraySum([1,2,5,2,8,1,5],4) // 17
maxSubarraySum([4,2,1,6],1) // 6
maxSubarraySum([4,2,1,6,2],4) // 13
maxSubarraySum([],4) // null
 
Approach:
       i              
[1,2,5,2,8,1,5]     //for every i++, j will loop upto 4(n). So at the end of j, i must stop                                                      
             j             
/*                                                           #NAIVE SOLUTION                                 */
