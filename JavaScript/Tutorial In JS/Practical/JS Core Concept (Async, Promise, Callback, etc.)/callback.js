//CALLBACK:-
//Lower Order Function
// function message() {
//     console.log("hello There");
// }

//This is Higher Order Function, A function which takes other function as its parameter
// function logger(message) {
//     //Callback Function
//     message();
// }
// logger(message);


//EXECUTING THE First WRITTEN CODE IN SEQUENCE USING CALLBACK:
// function first() {

//     console.log(1);
// }

// function second(third) {
//     setTimeout(() => {
//         console.log(2);
//         third();
//     }, 0);
// }

// function third() {
//     console.log(3);
// }

// first();
// second(third);


//EXECUTING THE First WRITTEN CODE IN SEQUENCE USING CALLBACK HELL:
function callbackHell() {
    //This is Higher Order Function(HOF), because it's passing a function into its parameter
    setTimeout(() => {
        const data = { user: "Chandan" };
        console.log(data);

        setTimeout(() => {
            console.log("Data Updated");
        }, 0);
    }, 5000);
}
callbackHell();
