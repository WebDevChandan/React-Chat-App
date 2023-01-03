//Write a function that calculates the sum of all numbers from 1 up to some number n. 

//1st approach
// function addUPTo(n){
//     let total = 0;
//     for(let i= 1; i<=n; i++){
//         total+=i;
//     }
// return console.log(total);
// }

// let t1 = performance.now();
// addUpTo(10000000000);
// let t2 = performance.now();
// console.log(`Time Elapsed ${(t2-t1)/100} seconds`);

// //2nd approach
// function addUpTo(n) {
//   return console.log(n * (n + 1) / 2);
// }


//First Count Up then Down for n input
// function countUpandDown(n){
//   console.log('Going Up');
//   for(let i=0; i<n; i++){
//     console.log(i);
//   }
//   console.log("At the Top! \n Going Down....");
//   for(let j=n-1;j>=0; j--){
//     console.log(j);
//   }
//   console.log("Back Down. Bye!");
// }
// countUpandDown(10);

//PrintAllPairs
// function PrintAllPairs(n){
//   for(let i=0;i<n;i++){          //n times iteration
//     for(let j=0;j<n;j++){        //n times iteration
//       console.log(i,j);
//     }
//   }
// }
// PrintAllPairs(2);

//logAtLeast 5 will print & //lotAtMost up to 5 will print using Math.min(5,n)
// function logAtLeast(n){
//   for(let i=1; i<=Math.max(n,5); i++){
//     console.log(i);
//   }
// }
// logAtLeast(30);