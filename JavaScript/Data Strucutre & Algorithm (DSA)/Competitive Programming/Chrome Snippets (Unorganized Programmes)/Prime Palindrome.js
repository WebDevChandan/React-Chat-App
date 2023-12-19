// Leetcode #866 (Prime Palindrome)

/* TC: O(n^2)
    SC: O(1)

Result: Time Limit Exceeded
*/

var primePalindrome = function(n) {
    // debugger;
    let getPrime,
        bol = true;
    
    //Edge Case
    if(n===1) return 2;
    
    while(bol){
        for (let i = 2; i <= Math.round(n/2); i++) {
         if(n%i ===0){
            n++;
            i=2;
            --i;
          }
        }
        
        getPrime = n;
        bol = false;        
   

    
    getPrime = getPrime.toLocaleString().replace(/,/gi, '');  
        let j = getPrime.length-1;
        
        for (let i = 0; i < getPrime.length && i<j; i++) {
            if(getPrime[i]!==getPrime[j]){
                bol = true;
                break;
            }
            j--;
        }
        n++;
      }
    return parseInt(getPrime);
    
};




        
