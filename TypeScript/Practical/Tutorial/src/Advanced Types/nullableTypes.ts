//By default, TS is very strict by using null or undefined values
//Note: Null and undefined are common source of problems

function greet(name: string | null | undefined): void {
    if (name)
        console.log(name.toUpperCase);
    else
        console.log("Hello");
}

greet(undefined);