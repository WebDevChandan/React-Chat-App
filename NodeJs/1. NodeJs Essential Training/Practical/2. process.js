function grab(flag) {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
}
let greeting = grab("--Greeting");
let user = grab("--user");

console.log(greeting);
console.log(user);
console.log(process.argv);