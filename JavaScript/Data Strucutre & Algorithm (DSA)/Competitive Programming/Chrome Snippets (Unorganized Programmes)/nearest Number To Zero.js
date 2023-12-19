// Find nearest Number to Zero?


/* Scenario:-
I/P: [1, 2, 3, 4, 5]  |  [-1, -2, -3, -4, -5]  |  [-1, 1, 2, 3, 4]  | [-5, -1, 2, 3]  | [-5, 9, 8, 7]
O/P:         1                     -1                     1                  -1                -5                
*/

/* Rules:
-- Input would be an integer Array. Output would be an integer.
-- return only that num which is most nearest to Zero (0)
-- If -ve & +ve num both are at the same position nearer to Zero then return +ve num.
*/

/* Approach:
-- Create a function called nearestNumToZero(arr), accepting an integer array 'arr';

-- Initialize a variable called 'min' with Maximum Safest integer in JS.

-- Loop over the num array till its total length.
    if(the num[i] is +ve)
        
        Moreover, If(num[i]<min || num[i]<=parseInt(min.toLocaleString().replace(/-/g, '')))
                    min = num[i];
    Else if(num[i] is -ve)
        Moreover, if(parseInt(num[i].toLocaleString().replace(/-/g, ''))<min)
            min = num[i];
    Else
        return 0;
*/

//Code Implementation:-
function nearestNumToZero(num) {
    let min = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < num.length; i++) {
        if(num[i]>0){
            if(num[i]<min || num[i]<= parseInt(min.toLocaleString().replace(/-/g,'')))
                min = num[i];
        }else if(num[i]<0){
            if(num[i]>min || parseInt(num[i].toLocaleString().replace(/-/g, ''))<min)
                min = num[i];
        }else
            return 0;
    }
    return min;
}

nearestNumToZero([-5, -1, 2, 3]);