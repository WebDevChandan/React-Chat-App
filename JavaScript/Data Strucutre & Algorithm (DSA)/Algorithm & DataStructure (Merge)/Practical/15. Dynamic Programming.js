//                                                          🌟 FIBONACCI SEQUENCE 🌟

//------------------------------- Recursive Solution -------------------
/*
Fib(n) = Fib(n-1) + Fib(n-2)
Fib(2) is 1
Fib(1) is 1
*/

/*
// CODE IMPLEMENTATION:
function fib(n) {
    if(n<=2) return 1;
    return fib(n-1) + fib(n-2);
}
*/

//------------------------------- MEMOIZATION (Top-Bottom Appraoch) -------------------
/*
    Drawback of Memoization:
At some point of Number, it will give an error like Maximum call stack size exceeded 
Like for, fib_memo(10,000);
*/

/*
// CODE IMPLEMENTATION:
    function fib_memo(n, memo = []) {
    if(memo[n]!==undefined) return memo[n];
    if(n<=2) return 1;

    let result = fib_memo(n-1, memo) + fib_memo(n-2, memo);

    memo[n] = result;

    return result;
}


//                   OR
// CODE IMPLEMENTATION:
function fib_memo(n, memo = [undefined, 1, 1]) {
    if(memo[n]!==undefined) return memo[n];

    let result = fib_memo(n-1, memo) + fib_memo(n-2, memo);

    memo[n] = result;

    return result;
}
*/



//------------------------------- TABULATION (Top-Bottom Appraoch) -------------------
// CODE IMPLEMENTATION:
function fib_tab(n) {
    if(n<=2) return 1;

    let fibNums = [0, 1, 1];

    for(let i=3; i<=n; i++){
        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }

    return fibNums[n];
}