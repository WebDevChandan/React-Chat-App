//PROMISE: WE USE IT FOR MORE READABLE SYNTAX AS COMPARED TO CALLBACK:
// const promise = new Promise((resolve, reject) => {
//     //resolve & reject are pre-built Callback function here.
//     setTimeout(() => {
//         resolve({ user: "Chandan" });
//     }, 2000);
//     // reject("We've Failed");
// })

// //If promise doesn't get resolve, reject'll transfer to catch method.
// promise
//     //It get back/return the resolve data from 'promise' funciton
//     .then(data => {
//         // console.log(data);
//         //'data' should be return, if we want to transfer it to next .then() method
//         return data;
//     })
//     .then(({ user }) => { //Object Destructuring
//         console.log(user);
//     })
//     //It get back/return the reject data from 'promise' funciton
//     .catch(err => {
//         console.log(err);
//     })


//EXAMPLE:   
//API itselft return promise. So we doesn't need to make promise object seperately
fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((data) => {
        return data.json();
    })
    .then(jsonData => {
        console.log(jsonData);
    })
    .catch(err => {
        console.log(err);
    });