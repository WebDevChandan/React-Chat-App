function subarraySum(arr, s){
        let last=0;
        let start=0;
        let currsum=0;
        let flag=false;
        let res = [];
        
        //iterating over the array.
        for(let i=0; i<arr.length; i++)
        {
            //storing sum upto current element.
            currsum += arr[i];
            
            //checking if current sum is greater than or equal to given number.
            if(currsum>=s)
            {
                last=i;
                //we start from starting index till current index and do the 
                //excluding part while s(given number) < currsum.
                while(s<currsum && start<last)
                {
                    //subtracting the element from left i.e., arr[start]
                    currsum -= arr[start];
                    ++start;
                }
                
                //now if current sum becomes equal to given number, we store 
                //the starting and ending index for the subarray.
                if(currsum==s)
                {
                    res.push(start + 1);
                    res.push(last + 1);
                    
                    //flag is set to true since subarray exists.
                    flag = true;
                    break;
                }
            }
        }
        //if no subarray is found, we store -1 in result.
        if(flag==false)
            res.push(-1);
            
        //returning the result.
        return res;    
    
        }
subarraySum([1,2,3,7,5], 12);


// Array of Matrix:
// 1   2   3   4
// 12  13  14  5
// 11  16  15  6
// 10   9   8  7




/* Matrix:-
                 L   R    
                 v   v                
top   -->        1 2 3             
                 4 5 6     
bottom-->        7 8 9
                
*/
var spiralOrder = function(matrix) {

    let top = 0,
        bottom = matrix.length-1,
        left  = 0,
        right = matrix[0].length-1,
        result = [],
        matrxSize = matrix.length * matrix[0].length;

    while(result.length<matrxSize){

        for(let i=left; i<=right; i++){
            result.push(matrix[top][i]);
        }
        top++;
        
        for(let i = top; i<=bottom;i++){
            result.push(matrix[i][right]);
        }
        right--;

        for(let i = right; i>=left; i--){
            result.push(matrix[bottom][i]);
        }
        bottom--;

        for(let i = bottom; i>=top; i--){
            result.push(matrix[i][left]);
        }
        left++;
        
    }
    
return result;
    
    
};
spiralOrder([[1,2,3],[4,5,6],[7,8,9]]);














var generateMatrix = function(n) {
    // debugger
    let matrix = [],
        l = n;

      for(let i =0; i<n; i++){
          matrix[i] = [];
      }
    let r=0,
        c=0,
        num=0;
    
    while(num<n**2){
        
    
    for(; c<l && num<n**2; c++){
    num++;
        matrix[r][c]=num;
        
    }
    c--;
    r++;

    for(; r<l && num<n**2; r++){
        num++;
        matrix[r][c] = num;
    }
    r--;
    c--;

    for(; c>=0 && num<n**2; c--){
        num++;
        matrix[r][c]=num;
    }
    c++;
    r--;
    for(;r>0 && num<n**2;r--){
        num++;
        matrix[r][c]=num;
    }
    r++;
    c++;    
    l--;    
}
    
    

    return matrix;
}
generateMatrix(5);