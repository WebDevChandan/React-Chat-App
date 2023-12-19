//🌟CAPGEMINI QUESTIONS from Coding Round

//------------------------------------------------ ⭐Question-1⭐ -------------------------------------
/*
    Given:-
1. N: An integer number
2. If N is odd then print the value of the product of digits of the number N
    otherwise print the value of the sum of digits of the number N.

    Test Cases:-
I/P: 11, O/P: 1
Explanation: Since, 11 is Odd. So, 1*1 = 1

I/P: 464, O/P: 14
Explanation: Since, 464 is Even. So, 4+6+4 = 14

    Visualization:-
N: 11

Convert N to string str = '11'

if(ODD)
11%2!==0
  result = 1 * 1 =>1
else
    result = 4+6+4 => 14
*/

function prodSum(n) {
    let str = n.toLocaleString().replace(/[',']/g,''),
        result;

    if(n%2!==0){
        let prod=1;
        
        for (let i = 0; i < str.length; i++) {
            prod *= parseInt(str[i]); 
        }
        result = prod;
    }else{
        let sum =0;
        for (let i = 0; i < str.length; i++) {
            sum += parseInt(str[i]);
        }
        result = sum;
    }
    
    return result;
}
// prodSum(11);
// prodSum(464);
// prodSum(555552);



//------------------------------------------------ ⭐Question-2⭐ -------------------------------------
/*
    Given:-
1. arr: an Array
2. k: an integer
3. Find and Print the element of the array 'arr' which has the maximum occurence of digit k.
4. return -1, if the arr is empty
5. return 0 , if there is no occurence of digit k in the array
6. Only one number has the maximum number of occurence of digit k.


    Test Cases:-
I/P: [37, 823, 122, 2322, 6017] & k: 2  || O/P: 2322


    Visualization:-
hashMap{
    37: 0,
    823: 1,
    122: 2,
    2322: 3,   --> Max occurence of 2 i.e. 'k'
    6017: 0
}
*/

function maxOccurence(arr, k){
    let strArr = [], hashMap = {};


    //Edge Cases:
    if(arr.length ===0) return -1;
    
    for (let i = 0; i < arr.length; i++) {
        strArr.push(arr[i].toLocaleString().replace(/[',']/g, ''));
    }

    for (let i = 0; i < strArr.length; i++) {
        let count = 0;
        for (let j = 0; j < strArr[i].length; j++) {
            if(strArr[i][j] === k.toLocaleString())
                count++;
        }
        hashMap[arr[i]] = count;
    }

    const sortedFreqArr = Object.values(hashMap).sort((a,b)=>a-b);
    
    //Edge Case:
    if(sortedFreqArr[sortedFreqArr.length-1] === 0) return 0;
    for(let key in hashMap){
        if(hashMap[key] === sortedFreqArr[sortedFreqArr.length-1])
            return parseInt(key);
    }
}
// maxOccurence([37, 823, 122, 2322, 6017], 2);
// maxOccurence([2153, 65, 1, 12, 11, 1111], 1);
// maxOccurence([2153, 65, 1, 12, 11, 1111], 10);
// maxOccurence([], 10);




//🌟 CAPGEMINI INTERVIEW PREPERATION QUESTIONS
/* Questions:
    1. reverse a string
    2. Fibonacci Series
    3. Prime Number
    4. Perfect Number
    5. Check Leap Year
    6. Swap Two Numbers
    7. Check Palindrome for Number & String
    8. Anagram
    9. Two Sum 
    10. Find Factorial
*/
//------------------------------------------------ ⭐Question-1 (Reverse a String)⭐ -------------------------------------
/*
    Test Cases:-
Input: s = "hello"
Output: olleh

Input: s = "Hannah"
Output: "hannaH"


    Apporach_#1:- (Iteration) [T.C: O(n) & S.C.: O(n)]
1. Create an empty string variable, result
2. Iterate over the string string from last i.e. i= s.length-1 to i >=0
    result += result.concat(s[i]);


    Approach_#2:- (Using JavaScript, Spilt, reverse & join method) [T.C: O(n) & S.C: O(1)] 


    Apporach_#3:- (Two Pointer Approach) [T.C: O(log(n)) & S.C: O(1)]
    Since a string is immutable, so we cannot perform swap operation on to the same string.
    Hence, we'll need to convert that string into an array.
1. let i = 0 & j = s.length-1
2. while(i<j)
    swap s[i] with s[j]
*/


//CODE IMPLEMENTATION
//Approach_#1
// var reverseString = function(s) {
//     let result = '';

//     for (let i = s.length-1; i >=0 ; i--) {
//         result += s[i];
//     }
//     return result;
// };


//Apporach_#2
// var reverseString = function(s) {
//     return s.split('').reverse().join('');
// };


//Apporach_#3
var reverseString = function(s) {
    let strArr = s.split('');
    let i =0,
        j = strArr.length-1;

    while(i<j){
        let thirdVar = strArr[i];
        strArr[i] = strArr[j];
        strArr[j] = thirdVar;
        i++;
        j--;
    }

    return strArr.join('');
};
// reverseString("hello");


//------------------------------------------------ ⭐Question-2 (Fibonacci Number/Series)⭐ -------------------------------------
/*
    Info:
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence
Such that each number is the sum of the two preceding ones starting from 0 and 1.
F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.

The Fibonacci numbers are the numbers in the following integer sequence.
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ……..


    Given:
1. n: A Number
2. calculate F(n)


    Approach_#1:- (Recursion) [T.C: O(n^2) i.e. Exponential T.C  & S.C: O(1)];
1. Base Cases:
    if(n===0) return 0
    if(n == 1 ) n =1;

2. Recursiver call the function with fib(n-1) + fib(n-2);


    Approach_#2:- (Iterative) [T.C: O(n) i.e. Linear T.C  & S.C: O(1)]
    Fibonacci Series: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ……..
1. let prevNum =0, nextNum =1 & sum =0; in the Fibonacci Series
2. Start loop till n
    sum = prevNum + nextNum;
    Update prevNum with nextNum
    Assign, sum to nextNum

3. return sum


    Approach_#3:- (Using MatrixMultiplication) [T.C: O(n) i.e. Linear T.C  & S.C: O(1)];
1. Initialize both matrix variable 'F' & 'M' with
    [1,1]
    [1,0]

2. multiply Both matrix 'F'*'M' upto n times
3. return right Diagonal element of 'F' F[0][1];


    Logic for Approach_#3:
if we n times multiply the matrix F = {{1,1},{1,0}} to itself, then we get the (n)th Fibonacci number as 
the element at row and column (0, 1) & (1,0) in the resultant matrix.

The matrix representation gives the following closed expression for the Fibonacci numbers: 
F = [1,1]
    [1,0] 


    Visualization for Approach_#3:-
    ➡➡       X                         
F = [1,1]          M = [1,1]  ⬇
    [1,0]              [1,0]  ⬇
                              
F*M = [1*1+1*1, 1*1+1*0]    =>    [2, 1]
      [1*1+0*1, 1*1+0*0]          [2, 1]


    Approach_#4:- (Using Binet's Formula) [T.C: O(log(n)) i.e. Logarithmic T.C  & S.C: O(1)];
1. Formula:
    {([1+√5]/2)^n}/√5
*/


//CODE IMPLEMENTATION
//Approach_#1
// var fib = function(n) {
//     if(n===0) return 0;

//     if(n===1) return 1;

//     return fib(n-1) + fib(n-2);
// };


//Approach_#2
// var fib = function(n) {

//     let prevNum = 0, nextNum = 1, sum; 

//     //Edge Cases
//     if(n ===0) return 0;
//     if(n===1) return 1;
    
//     for (let i = 2; i <=n; i++) {
//         sum = prevNum + nextNum; 
//         prevNum = nextNum ; 
//         nextNum = sum;
//     }

//     return sum;
// };


//Approach_#3
// var fib = function(n) {
//     if(n===0) return 0;
    
//     let F = [[1,1],[1,0]];
//     let M= [[1,1],[1,0]];
//     multiply(F, M, n);

//     //Right Diagonal elements would be the Fibonacci Number of n;
//     return F[0][1];
// };

// //Helper Functions:
// function multiply(F, M, n) {
//     let x, y, z, w;
//     for (let i = 2; i <=n; i++) {
//                 x = F[0][0] *  M[0][0] + F[0][1] * M[1][0];
//                 y = F[0][0] *  M[0][1] + F[0][1] * M[1][1];
//                 z = F[1][0] *  M[0][0] + F[1][1] * M[1][0];
//                 w = F[1][0] *  M[0][1] + F[1][1] * M[1][1];            
        
//         F[0][0] = x;
//         F[0][1] = y;
//         F[1][0] = z;       
//         F[1][1] = w; 
//     }
      
    
//         return F;
// }


//Apporach_#4:-
var fib = function(n) {
    //By using Binet's Formula
    const phi = [1 + Math.sqrt(5)]/2;

    return Math.round(Math.pow(phi, n) / Math.sqrt(5));
};
// fib(30); 


//------------------------------------------------ ⭐Question-3 (Prime Number)⭐ -------------------------------------
/*
    Given:
1. n: a Number
2. return true if Number is Prime otherwise return false;
3. Note:
    All prime Numbers are Odd except 2
    Prime Numbers start from 2


    Test Cases:
Prime Number: 2,3,5, 7, 11, 13, 17, 19, 21 .....


    Logic:-
1. A prime number is one which should be divisible by only 1 or by itself
2. A Number is completely divisible by only those number which must smaller than the given number
    Ex: 9/3 === 0
3. So, we have to write programm to keep the above points in mind.


    Approach_1:- Iteration [T.C: O(sqrt(n)) & S.C: O(1)]
1. Edge Cases:
    if(n<=1) return false;
2. Start a loop from i=2 till i<n Note(i should be smaller than n. To take care about n==2)
    if(n%i ===0)
        return false;
3. return true;


    Approach_2:- Iteration [T.C: O(n/2) & S.C: O(1)]
1. Edge Cases:
    if(n<=1) return false;
2. Start a loop from i=2 till i<n/2 Note(i should be smaller than n/2. To take care about n==2)
    if(n%i ===0)
        return false;
3. return true;


*/


//CODE IMPLEMENTATION
//Approach_#1
function primeNum(n) {
    if(n<=1) return false;

    for (let i = 2; i < n; i++) {
        if(n%i===0) return false;
    }

    return true;
}


//Approach_#2
// function primeNum(n) {
//     if(n<=1) return false;

//     for (let i = 2; i < n/2; i++) {
//         if(n%i===0) return false;
//     }

//     return true;
// }




//------------------------------------------------ ⭐Question-4 (Perfect Number)⭐ -------------------------------------
/*
    Given:-
1. n: a Positive Integer 
2. Return true if, n is a Perfect Number other return false;
3. Note:-
    -- A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself. 
    -- All perfect numbers are even in nature. There is no existence of an odd perfect Number;


    Test Cases:-
Input: num = 28
Output: true
Explanation: 28 = 1 + 2 + 4 + 7 + 14
1, 2, 4, 7, and 14 are all divisors of 28.

Input: num = 7
Output: false

Input: num = 2
Output: false

Input: num = 1
Output: false

    Apporach_#1:- [T.C: O(log(n)), S.C: O(1)]
1. Declare 'sum' and Initialize it with 0; i.e. sum = 2 & orginalNum = n;
2. Edge Case:-
    if(n is Odd) return false;
3. Start a loop while n<=1
    if(n is even)
        n = n/2
        sum +=n;
    else
        n /=n;
        sum +=n;
4. sum === orginalNum ? true: false; 
*/


//CODE IMPLEMENTATION




//------------------------------------------------ ⭐Question-5 (Check Palindrome)⭐ -------------------------------------
/*
     Given:-
1. input: Input might be number or string 
2. Check Palindrome for given Number and String.


    Test Cases:-
I/P: 'racecar' 
O/P: true

I/P: 121
O/P: true

I/P: 'Sas' 
O/P: false

I/P: 1231
O/P: false


    Apporach_#1:- (Two Pointer Approach) [T.C: O(n) & S.C: O(1)]
1. Convert the given 'input' in to a string and store it to 'inputStr'.
2. Initialize 'i' with 0 & 'j' = inputStr.length-1
3. Start a while loop till i<j
    if(inputStr[i] !== inputStr[j])
        return false;
    i++;
    j--;
4. return true;
*/


//CODE IMPLEMENTATION
function palindrome(input) {
    const inputStr = input.toString();
    let i = 0,
        j = inputStr.length-1;

    while(i<j){
        if(inputStr[i]!== inputStr[j])
            return false;
        i++;
        j--;
    }

    return true;
}
// palindrome(121);




//------------------------------------------------ ⭐Question-4 (Swap Two Numbers without Using third Variable)⭐ -------------------------------------
/*
    Approach_#1:- (Array Destructuring)

    Approach_#2:- (Trick)
S1 = S2-S1;
S2 = S2-S1;
S1 = S1+S2;
*/


//CODE IMPLEMENTATION:-
//Approach_#1
// let S1 = 10,
//     S2 = 30;

// [S1, S2] = [S2, S1];
// console.log(`S1: ${S1}, S2: ${S2}`);


//Approach_#2:-
// let S1 = 4999,
//     S2 = 4657;

// S1 = S2-S1; //30-10 == 20
// S2 = S2-S1; //30-20 == 10
// S1 = S1+S2;

// console.log(`S1: ${S1}, S2: ${S2}`);




//------------------------------------------------ ⭐Question-4 (Anangram)⭐ -------------------------------------
/* 
    Info:-
2 strings will be anagram only, if Both strings should have same character with same frequency
    

    Test Cases:-
I/P: "aacc", "ccac"  |  "ab", "a"  |  "a", "ab"  |  "a", "b"  |  "anagram", "nagaram"  |  "rat", "car"
O/P:      false             false         false         false           true                  false                                                        


    Approach_#1:- (Two HashMap)
1. Declare Two empty hashMap1 Object & hashMap2;
2. Edge Case:
    if(str1.length !== str2.length) return false.
3. Store every char of str1 with their frequency in hashMap1
4. Store every char of st2 with their frequency in hashMap2
5. Loop over hashMap1
    if(!hashMap2[key] && hashMap1[key]!== hashMap2[key])
        return false;
6. return true;
*/


//CODE IMPLEMENTATION
function anagram(str1, str2) {
    // debugger;
    let hashMap1 = {},
        hashMap2 = {};

    if(str1.length !== str2.length) return false;
    
    for (let i = 0; i < str1.length; i++) {
        hashMap1[str1[i]] = (hashMap1[str1[i]] || 0) + 1;
    }    

    for (let j = 0; j < str2.length; j++) {
        hashMap2[str2[j]] = (hashMap2[str2[j]] || 0 ) + 1;
    }

    for(let key in hashMap1){
        if(!hashMap2[key] || hashMap1[key] !== hashMap2[key])
            return false;
    }
    return true;
}
// anagram("anagram", "nagaram");
