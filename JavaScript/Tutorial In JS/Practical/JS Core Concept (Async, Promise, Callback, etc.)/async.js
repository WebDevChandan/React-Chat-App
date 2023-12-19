//ASYNC-AWAIT
//async makes programm to run more synchronously
// async function getTodos() {
//     console.log(1);
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos/1").then(data => data.json());
//     console.log(response);
//     console.log(2);
// }
// getTodos();


//Also Do like this:
async function getTodos() {
    try {
        console.log(1);
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await response.json();
        console.log(data);
        console.log(2);
    } catch (error) {
        console.log(error);        
    }
}
getTodos();