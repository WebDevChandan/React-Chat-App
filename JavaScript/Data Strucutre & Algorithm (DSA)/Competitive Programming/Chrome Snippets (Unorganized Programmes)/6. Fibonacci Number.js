// Leetcode: #509 (Fibonacci Number)
var fib = function(n) {
   if(n === 0) return 0;
    
    return num =  fib(n-1) + fib(n-2); 
};
fib(10);

// // LOGIC:-
// num = 1 + fib(4-1)
    
//           1 + fib(3);//1+3 =4
//               1 + fib(2);//1+2 = 3;
//                     1 + fib(1);  //1+1 = 2
