// Leetcode: #278 (First Bad Version)


/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

/* Given:-
1. I/P: n => versions [1,2,...,n]
2. O/P: Find out the first bad version.
3. Launching Prodouct with Each version is based on th previous version, all the versions after a bad version are also bad.
4. Note: Here we've given an API bool isBadVersion(version) which returns wheter version is bad. 
*/

/* Test Cases:-
Input: n = 5, bad = 4       |   Output: 4
Input: n = 1, bad = 1       |   Output: 1
*/

/* 1st Approach (BruteForce):- [BruteForce]
1. Start a loop till nth version
    
   Since, For every version is going to have for API call by calling isBadVersion()
    AS a response it'll   return true of false.
        So, As we got isBadVersion true. Just return that version.
        This would be the First BadVersion of the Product
        
        IF(!n)
            return i;
*/

// var solution = function(isBadVersion) {
//     /**
//      * @param {integer} n Total versions
//      * @return {integer} The first bad version
//      */
//     return function(n) {
//         for(let i=1; i<=n; i++){
//             if(isBadVersion(i))
//                 return i;
//         }
//     };
// };


/* #2 Approach (Binary Search):- [T.C:O(logN) & S.C: O(1)]
1. Create a left & right pointer; first=1 & last = n;
2. Run a loop while left<right
    Find the mid to place mid pointer; mid = Math.floor((left + (right-left))/2);
        if(!isBadVersion(mid))
            move 'left' to = mid+1;
        else 
            move 'right' to = mid;

3. Since, loop will get terminated only when left === right;
    So, we're free to return left or return right; (Answer would be same).
*/
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) { //5
        let left =1, //4
            right = n; //4
        
        // 4<4
        while(left<right){
            let mid = Math.floor((left + right)/2); //4
            if(!isBadVersion(mid))//bad==true
                left = mid+1;
            else
               right = mid; //4
        }
        return right;
    };
};